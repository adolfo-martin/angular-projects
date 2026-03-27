export default class Pelicula {
    constructor(id, titulo, generoId, fotografiaId, protagonistaId, precio) {
        this.id = id;
        this.titulo = titulo;
        this.generoId = generoId;
        this.fotografiaId = fotografiaId;
        this.protagonistaId = protagonistaId;
        this.precio = precio;
    }
}