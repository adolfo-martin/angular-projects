import Genero from '../entities/Genero.js';
import Pelicula from '../entities/Pelicula.js';
import Persona from '../entities/Persona.js';

export default class VideoStreamRepositoryMock {
    _generos = [
        new Genero("ro", "Románticas", "Películas de pasteleo y esas tonterías de besos y abrazos."),
        new Genero("be", "Bélicas", "Películas de guerra donde se emfrentan países."),
        new Genero("po", "Policiacas", "Películas de policias y ladrones, en las que siempre ganan los buenos."),
        new Genero("he", "Superheroes", "Películas para frikis, donde unos tíos en calzoncillos salvan el mundo."),
    ];

    _peliculas = [
        new Pelicula('ro1', "Love Actualy", 'ro', 'col', 'pe43', 3.5),
        new Pelicula('ro2', "Titanic", 'ro', 'col', 'pe44', 3.0),
        new Pelicula('ro3', "El apartamento", 'ro', 'byn', 'pe35', 3.25),
        new Pelicula('ro4', "La mujer del año", 'ro', 'byn', 'pe40', 4.25),
        new Pelicula('ro5', "No me mandes flores", 'ro', 'byn', 'pe42', 4.25),
        new Pelicula('ro7', "Los puentes de Madison", 'ro', 'col', 'pe17', 3.0),
        new Pelicula('ro10', "Memorias de África", 'ro', 'col', 'pe21', 3.0),
        new Pelicula('be3', "Salvar al soldado Ryan", 'be', 'col', 'pe8', 4.0),
        new Pelicula('be11', "El sargento de Hierro", 'be', 'col', 'pe17', 4.5),
        new Pelicula('be12', "Casablanca", 'be', 'byn', 'pe33', 4.25),
        new Pelicula('be13', "Senderos de gloria", 'be', 'byn', 'pe38', 4.25),
        new Pelicula('be14', "Adios a las armas", 'be', 'byn', 'pe41', 4.25),
        new Pelicula('be15', "La noche más oscura", 'be', 'col', 'pe45', 4.75),
        new Pelicula('be16', "En tierra hostil", 'be', 'col', 'pe46', 4.50),
        new Pelicula('po4', "Infiltrados", 'po', 'col', 'pe10', 4.0),
        new Pelicula('po5', "Seven", 'po', 'col', 'pe12', 2.5),
        new Pelicula('po6', "El halcón maltés", 'po', 'byn', 'pe33', 3.0),
        new Pelicula('po7', "Perversidad", 'po', 'byn', 'pe34', 2.75),
        new Pelicula('po9', "Harry el sucio", 'po', 'col', 'pe23', 4.25),
        new Pelicula('po10', "El hombre que nunca estuvo ahí", 'po', 'byn', 'pe39', 4.0),
        new Pelicula('he6', "Spiderman", 'he', 'col', 'pe15', 4.5),
        new Pelicula('he8', "Superman", 'he', 'col', 'pe19', 4.5),
        new Pelicula('he9', "Flash Gordon", 'he', 'byn', 'pe36', 2.75),
        new Pelicula('he10', "Superman contra el hombre gigante", 'he', 'byn', 'pe37', 3.5),
    ];


    _personas = [
        new Persona('pe1', "Richard Curtis"),
        new Persona('pe2', "Hugh Grant"),
        new Persona('pe3', "Keira Knightley"),
        new Persona('pe4', "Liam Neeson"),
        new Persona('pe5', "James Cameron"),
        new Persona('pe6', "Leonardo DiCaprio"),
        new Persona('pe7', "Kate Winslet"),
        new Persona('pe8', "Steven Spielberg"),
        new Persona('pe9', "Tom Hanks"),
        new Persona('pe10', "Martin Scorsese"),
        new Persona('pe11', "Matt Damon"),
        new Persona('pe12', "David Fincher"),
        new Persona('pe13', "Brad Pitt"),
        new Persona('pe14', "Gwyneth Paltrow"),
        new Persona('pe15', "Sam Raimi"),
        new Persona('pe16', "Tobey Maguire"),
        new Persona('pe17', "Clint Eastwood"),
        new Persona('pe18', "Meryl Streep"),
        new Persona('pe19', "Richard Donner"),
        new Persona('pe20', "Christopher Reeve"),
        new Persona('pe21', "Sydney Pollack"),
        new Persona('pe22', "Robert Redford"),
        new Persona('pe23', "Don Siegel"),
        new Persona('pe24', "Klaus Maria Brandauer"),
        new Persona('pe25', "Vin Diesel"),
        new Persona('pe26', "Margot Kidder"),
        new Persona('pe27', "Kirsten Dunst"),
        new Persona('pe28', "Willem Dafoe"),
        new Persona('pe29', "Mario Van Peebles"),
        new Persona('pe30', "Mark Walberg"),
        new Persona('pe31', "Jack Nicholson"),
        new Persona('pe32', "Morgan Freeman"),
        new Persona('pe33', "Humphrey Bogart"),
        new Persona('pe34', "Edward G. Robinson"),
        new Persona('pe35', "Jack Lemmon"),
        new Persona('pe36', "Buster Crabbe"),
        new Persona('pe37', "George Reeves"),
        new Persona('pe38', "Kirk Douglas"),
        new Persona('pe39', "Billy Bob Thornton"),
        new Persona('pe40', "Katharine Hepburn"),
        new Persona('pe41', "Rod Hubson"),
        new Persona('pe42', "Doris Day"),
        new Persona('pe43', "Keira Knightley"),
        new Persona('pe44', "Kate Winslet"),
        new Persona('pe45', "Jessica Chastain"),
        new Persona('pe46', "Kathryn Bigelow"),

    ]


    async retrieveGeneros() {
        if (this._isThereTechnicalProblem()) {
            throw new Error('Cannot retrieve genres.');
        }

        return this._generos;
    }


    // async retrieveGeneroById(id) {
    //     return this._generos.find(genero => genero.id === id)
    // }


    async retrievePeliculasByGeneroIdAndFotografiaId(generoId, fotografiaId) {
        return this._peliculas
            .filter(pelicula => pelicula.generoId === generoId && pelicula.fotografiaId === fotografiaId)
            .map(({ id }) => id)
    }


    async retrievePeliculaById(id) {
        return this._peliculas.find(pelicula => pelicula.id === id)
    }


    async retrievePersonaById(id) {
        return this._personas.find(persona => persona.id === id)
    }


    _isThereTechnicalProblem() {
        return Math.random() < 0.4 ? true : false;
    }
}
