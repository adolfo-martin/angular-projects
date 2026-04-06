export async function retrieveContinents() {
    const url = 'http://localhost/geoformas/controlador.php?operacion=obtener-continentes';
    const response = await fetch(url);
    if (!response.ok) {
        throw 'Cannot retrieve the continents';
    }
    const data = await response.json();
    if (data.estado !== 'exito') {
        throw 'Cannot retrieve the continents';
    }
    return data.resultado.continentes;
}


export async function retrieveLandformsOfContinent(continent) {
    const url = `http://localhost/geoformas/controlador.php?operacion=obtener-geoformas&continente=${continent}`;
    const response = await fetch(url);
    if (!response.ok) {
        throw `Cannot retrieve the landforms of continent ${continent}`;
    }
    const data = await response.json();
    if (data.estado !== 'exito') {
        throw `Cannot retrieve the landforms of continent ${continent}`;
    }
    return data.resultado.geoformas;
}


export async function retrieveLandformById(landform) {
    const url = `http://localhost/geoformas/controlador.php?operacion=obtener-geoforma&geoforma=${landform}`;
    const response = await fetch(url);
    if (!response.ok) {
        throw `Cannot retrieve the landform ${landform}`;
    }
    const data = await response.json();
    if (data.estado !== 'exito') {
        throw `Cannot retrieve the landform ${landform}`;
    }
    return data.resultado.geoforma;
}


// export async function retrieveTypesOfLandforms() {

//     const url = 'http://localhost/geoformas/controlador.php?operacion=obtener-tipos-geoformas';
//     const response = await fetch(url);
//     if (!response.ok) {
//         throw 'Cannot retrieve the types of landforms';
//     }
//     const data = await response.json();
//     if (data.estado !== 'exito') {
//         throw 'Cannot retrieve the types of landforms';
//     }
//     return data.resultado.continentes;
// }