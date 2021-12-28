const Blog = require("../Blog");
const Estudiante = require("./Estudiante");

class MiembroJekuaa extends Estudiante {
    constructor(datos) {
        const {} = datos
    }


    static async crearBlog (datosBlog, rutaArchivoTemp) {
        // Agregar a Firestore
        const blogRespuesta = await Blog.crearNuevoBlog( datosBlog )

        // Agregar archivo blog (contenido)
        await Blog.subirArchivoBlogAStorage( rutaArchivoTemp, datosBlog.uid )

        return blogRespuesta
    }

    static async actualizarBlog (uid, datosBlog, rutaArchivoTemp) {
        // Actualizar a Firestore
        let blogRespuesta
        if (datosBlog && Object.keys(datosBlog).length) {
            blogRespuesta = await Blog.actualizarBlog( uid, datosBlog )
        }

        // Actualizar archivo blog (contenido)
        let archivoCreado
        if (rutaArchivoTemp) {
            archivoCreado = await Blog.subirArchivoBlogAStorage( rutaArchivoTemp, uid )
        }

        const data = {}
        blogRespuesta ? data.blogRespuesta = blogRespuesta : ''
        archivoCreado ? data.archivoCreado = archivoCreado : ''

        return data
    }

    static async eliminarBlog (uid) {
        // Eliminar los datos del blog en Firestore
        const datosBlogEliminado = await Blog.eliminarBlog( uid )

        // Eliminar el archivo del blog en Storage
        await Blog.eliminarArchivoBlog( uid )

        return datosBlogEliminado
    }
}

module.exports = MiembroJekuaa