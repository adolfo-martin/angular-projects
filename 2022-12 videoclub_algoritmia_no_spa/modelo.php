<?php

$generos = array(
    array("identificador" => "ro", "nombre" => "Románticas", "descripcion" => "Películas de pasteleo y esas tonterías de besos y abrazos."),
    array("identificador" => "be", "nombre" => "Bélicas", "descripcion" => "Películas de guerra donde se emfrentan países."),
    array("identificador" => "po", "nombre" => "Policiacas", "descripcion" => "Películas de policias y ladrones, en las que siempre ganan los buenos."),
    array("identificador" => "he", "nombre" => "Superheroes", "descripcion" => "Películas para frikis, donde unos tíos en calzoncillos salvan el mundo.")
);

$peliculas_por_genero = array(
    "ro" => array(1, 2, 7, 10),
    "be" => array(3, 11),
    "po" => array(4, 5, 9),
    "he" => array(6, 8)
);

$peliculas = array();

$pelicula = new stdClass();
$pelicula->identificador = 1;
$pelicula->titulo = "Love Actualy";
$pelicula->director = 1;
$pelicula->interpretes = array(2, 3, 4);
$pelicula->precio = 2.5;
$peliculas[] = $pelicula;

$pelicula = new stdClass();
$pelicula->identificador = 2;
$pelicula->titulo = "Titanic";
$pelicula->director = 5;
$pelicula->interpretes = array(6, 7);
$pelicula->precio = 2.0;
$peliculas[] = $pelicula;

$pelicula = new stdClass();
$pelicula->identificador = 3;
$pelicula->titulo = "Salvar al soldado Ryan";
$pelicula->director = 8;
$pelicula->interpretes = array(9, 11, 25);
$pelicula->precio = 3.0;
$peliculas[] = $pelicula;

$pelicula = new stdClass();
$pelicula->identificador = 4;
$pelicula->titulo = "Infiltrados";
$pelicula->director = 10;
$pelicula->interpretes = array(6, 11, 30, 31);
$pelicula->precio = 2.0;
$peliculas[] = $pelicula;

$pelicula = new stdClass();
$pelicula->identificador = 5;
$pelicula->titulo = "Seven";
$pelicula->director = 12;
$pelicula->interpretes = array(13, 14, 32);
$pelicula->precio = 1.5;
$peliculas[] = $pelicula;

$pelicula = new stdClass();
$pelicula->identificador = 6;
$pelicula->titulo = "Spiderman";
$pelicula->director = 15;
$pelicula->interpretes = array(16, 27, 28);
$pelicula->precio = 2.5;
$peliculas[] = $pelicula;

$pelicula = new stdClass();
$pelicula->identificador = 7;
$pelicula->titulo = "Los puentes de Madison";
$pelicula->director = 17;
$pelicula->interpretes = array(17, 18);
$pelicula->precio = 2.0;
$peliculas[] = $pelicula;

$pelicula = new stdClass();
$pelicula->identificador = 8;
$pelicula->titulo = "Superman";
$pelicula->director = 19;
$pelicula->interpretes = array(20, 26);
$pelicula->precio = 1.5;
$peliculas[] = $pelicula;

$pelicula = new stdClass();
$pelicula->identificador = 9;
$pelicula->titulo = "Harry el sucio";
$pelicula->director = 23;
$pelicula->interpretes = array(17);
$pelicula->precio = 3.0;
$peliculas[] = $pelicula;

$pelicula = new stdClass();
$pelicula->identificador = 10;
$pelicula->titulo = "Memorias de África";
$pelicula->director = 21;
$pelicula->interpretes = array(18, 22, 24);
$pelicula->precio = 2.0;
$peliculas[] = $pelicula;

$pelicula = new stdClass();
$pelicula->identificador = 11;
$pelicula->titulo = "El sargento de Hierro";
$pelicula->director = 17;
$pelicula->interpretes = array(17, 29);
$pelicula->precio = 2.5;
$peliculas[] = $pelicula;


$personas = array();

$persona = new stdClass();
$persona->identificador = 1;
$persona->nombre = "Richard Curtis";
$personas[] = $persona;

$persona = new stdClass();
$persona->identificador = 2;
$persona->nombre = "Hugh Grant";
$personas[] = $persona;

$persona = new stdClass();
$persona->identificador = 3;
$persona->nombre = "Keira Knightley";
$personas[] = $persona;

$persona = new stdClass();
$persona->identificador = 4;
$persona->nombre = "Liam Neeson";
$personas[] = $persona;

$persona = new stdClass();
$persona->identificador = 5;
$persona->nombre = "James Cameron";
$personas[] = $persona;

$persona = new stdClass();
$persona->identificador = 6;
$persona->nombre = "Leonardo DiCaprio";
$personas[] = $persona;

$persona = new stdClass();
$persona->identificador = 7;
$persona->nombre = "Kate Winslet";
$personas[] = $persona;

$persona = new stdClass();
$persona->identificador = 8;
$persona->nombre = "Steven Spielberg";
$personas[] = $persona;

$persona = new stdClass();
$persona->identificador = 9;
$persona->nombre = "Tom Hanks";
$personas[] = $persona;

$persona = new stdClass();
$persona->identificador = 10;
$persona->nombre = "Martin Scorsese";
$personas[] = $persona;

$persona = new stdClass();
$persona->identificador = 11;
$persona->nombre = "Matt Damon";
$personas[] = $persona;

$persona = new stdClass();
$persona->identificador = 12;
$persona->nombre = "David Fincher";
$personas[] = $persona;

$persona = new stdClass();
$persona->identificador = 13;
$persona->nombre = "Brad Pitt";
$personas[] = $persona;

$persona = new stdClass();
$persona->identificador = 14;
$persona->nombre = "Gwyneth Paltrow";
$personas[] = $persona;

$persona = new stdClass();
$persona->identificador = 15;
$persona->nombre = "Sam Raimi";
$personas[] = $persona;

$persona = new stdClass();
$persona->identificador = 16;
$persona->nombre = "Tobey Maguire";
$personas[] = $persona;

$persona = new stdClass();
$persona->identificador = 17;
$persona->nombre = "Clint Eastwood";
$personas[] = $persona;

$persona = new stdClass();
$persona->identificador = 18;
$persona->nombre = "Meryl Streep";
$personas[] = $persona;

$persona = new stdClass();
$persona->identificador = 19;
$persona->nombre = "Richard Donner";
$personas[] = $persona;

$persona = new stdClass();
$persona->identificador = 20;
$persona->nombre = "Christopher Reeve";
$personas[] = $persona;

$persona = new stdClass();
$persona->identificador = 21;
$persona->nombre = "Sydney Pollack";
$personas[] = $persona;

$persona = new stdClass();
$persona->identificador = 22;
$persona->nombre = "Robert Redford";
$personas[] = $persona;

$persona = new stdClass();
$persona->identificador = 23;
$persona->nombre = "Don Siegel";
$personas[] = $persona;

$persona = new stdClass();
$persona->identificador = 24;
$persona->nombre = "Klaus Maria Brandauer";
$personas[] = $persona;

$persona = new stdClass();
$persona->identificador = 25;
$persona->nombre = "Vin Diesel";
$personas[] = $persona;

$persona = new stdClass();
$persona->identificador = 26;
$persona->nombre = "Margot Kidder";
$personas[] = $persona;

$persona = new stdClass();
$persona->identificador = 27;
$persona->nombre = "Kirsten Dunst";
$personas[] = $persona;

$persona = new stdClass();
$persona->identificador = 28;
$persona->nombre = "Willem Dafoe";
$personas[] = $persona;

$persona = new stdClass();
$persona->identificador = 29;
$persona->nombre = "Mario Van Peebles";
$personas[] = $persona;

$persona = new stdClass();
$persona->identificador = 30;
$persona->nombre = "Mark Walberg";
$personas[] = $persona;

$persona = new stdClass();
$persona->identificador = 31;
$persona->nombre = "Jack Nicholson";
$personas[] = $persona;

$persona = new stdClass();
$persona->identificador = 32;
$persona->nombre = "Morgan Freeman";
$personas[] = $persona;

//------------------------------------------------------------------------------
function conseguir_generos() {    
    global $generos;
    return $generos;
}

//------------------------------------------------------------------------------
function conseguir_pelicula($id_pelicula) {    
    global $peliculas;
    foreach ($peliculas as $clave => $pelicula) {
        if ($pelicula->identificador == $id_pelicula) {
            return $pelicula;
        }
    }
}

//------------------------------------------------------------------------------
function conseguir_peliculas_por_genero($genero) {
    global $peliculas_por_genero;
    global $peliculas;

    $resultado = array();
    foreach ($peliculas_por_genero[$genero] as $i => $id) {
        foreach ($peliculas as $j => $pelicula)
            if ($pelicula->identificador == $id) {
                $resultado[] = $pelicula;
                break;
            }
    }

    return $resultado;
}

//------------------------------------------------------------------------------
function conseguir_persona($idPersona) {
    global $personas;

    foreach ($personas as $i => $persona)
        if ($persona->identificador == $idPersona)
            return $persona;
}

//------------------------------------------------------------------------------
?>