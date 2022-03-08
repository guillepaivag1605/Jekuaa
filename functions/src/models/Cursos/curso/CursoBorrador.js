const admin = require('../../../../firebase-service')
const db = require('../../../../db')
const Curso = require('./Curso')
const Errores = require('../../Error/Errores')

const COLECCION_CURSOS = 'CursosBorrador'

class CursoBorrador extends Curso {
    constructor (datos = {}) {
        super( datos )
        this.mensajesError = datos.mensajesError ? datos.mensajesError : []
        this.estadoDocumento = datos.estadoDocumento ? datos.estadoDocumento : ''
    }





    /**
     * ###############################
     *      METODOS NO ESTATICOS
     * ###############################
     */

    getCursoBorrador () {
        return {
            ...super.getCurso(),
            mensajesError: this.mensajesError,
            estadoDocumento: this.estadoDocumento,
        }
    }

    setCursoBorrador ( datos = {} ) {
        super.setCurso(datos)
        this.setMensajesError(datos.mensajesError)
        this.setEstadoDocumento(datos.estadoDocumento)
    }

    setMensajesError ( mensajesError = [] ) {
        this.mensajesError = mensajesError
    }

    setEstadoDocumento ( estadoDocumento = '' ) {
        this.estadoDocumento = estadoDocumento
    }

    // IMPORTAR DATOS
    async importarDatosDeUnCurso ( uidCurso = '' ) {       
        const docCurso = await db
        .collection(COLECCION_CURSOS).doc(uidCurso)
        .get()

        if (!docCurso.exists) return null

        let datosCurso = docCurso.data()

        this.setCursoBorrador( datosCurso )

        return this
    }











    /* 
     *    ################################
     *           METODOS ESTATICOS
     *    ################################
    */

    // CRUD Curso
    static async agregarCursoBorrador ( cursoBorrador = new CursoBorrador() ) {
        const datosCursoBorrador = cursoBorrador.getCursoBorrador()
        
        await db
        .collection(COLECCION_CURSOS).doc(cursoBorrador.uid)
        .set(datosCursoBorrador)

        return true
    }

    static async actualizarCurso ( uidCurso = '', datosActualizados = {} ) {
        if (!Object.keys(datosActualizados).length) {
            throw new Errores({
                codigo: 'error/usuario_mala_solicitud',
                mensaje: 'No hay datos para actualizar el curso.'
            })
        }

        await db
        .collection(COLECCION_CURSOS).doc(uidCurso)
        .update(datosActualizados)

        return true
    }

    static async eliminarCurso ( uidCurso = '' ) {
        await db
        .collection(COLECCION_CURSOS).doc(uidCurso)
        .delete()
        
        return true
    }

}

module.exports = CursoBorrador