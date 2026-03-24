// const rutas = [
//     { salida: "Madrid", llegada: "Barcelona", distancia: 621 },
//     { salida: "Valencia", llegada: "Sevilla", distancia: 697 },
//     { salida: "Zaragoza", llegada: "Málaga", distancia: 799 },
//     { salida: "Bilbao", llegada: "Alicante", distancia: 723 },
//     { salida: "Murcia", llegada: "Valladolid", distancia: 642 },
//     { salida: "Las Palmas", llegada: "Granada", distancia: 1846 },
//     { salida: "Palma", llegada: "Vigo", distancia: 1235 },
//     { salida: "Córdoba", llegada: "Gijón", distancia: 842 },
//     { salida: "Vitoria", llegada: "Salamanca", distancia: 417 },
//     { salida: "Almería", llegada: "Santander", distancia: 913 },
//     { salida: "Oviedo", llegada: "Toledo", distancia: 545 },
//     { salida: "Badajoz", llegada: "Tarragona", distancia: 834 },
//     { salida: "Huelva", llegada: "Castellón", distancia: 757 },
//     { salida: "Cádiz", llegada: "Logroño", distancia: 857 },
//     { salida: "Pamplona", llegada: "Albacete", distancia: 612 },
//     { salida: "Burgos", llegada: "Lleida", distancia: 557 },
//     { salida: "León", llegada: "Jaén", distancia: 647 },
//     { salida: "Ourense", llegada: "Girona", distancia: 1107 },
//     { salida: "Lugo", llegada: "Cáceres", distancia: 567 },
//     { salida: "Santiago", llegada: "Ávila", distancia: 487 },
//     { salida: "Mérida", llegada: "Teruel", distancia: 647 },
//     { salida: "Ceuta", llegada: "Cuenca", distancia: 707 },
//     { salida: "Melilla", llegada: "Huesca", distancia: 897 },
//     { salida: "Tenerife", llegada: "Soria", distancia: 2107 },
//     { salida: "Madrid", llegada: "Valencia", distancia: 357 },
//     { salida: "Barcelona", llegada: "Sevilla", distancia: 997 },
//     { salida: "Málaga", llegada: "Bilbao", distancia: 897 },
//     { salida: "Alicante", llegada: "Murcia", distancia: 82 },
//     { salida: "Córdoba", llegada: "Granada", distancia: 166 },
//     { salida: "Valladolid", llegada: "Vigo", distancia: 456 },
//     { salida: "Zaragoza", llegada: "Gijón", distancia: 654 },
//     { salida: "Palma", llegada: "Santander", distancia: 897 },
//     { salida: "Vitoria", llegada: "Salamanca", distancia: 423 },
//     { salida: "Toledo", llegada: "Badajoz", distancia: 342 },
//     { salida: "Almería", llegada: "Huelva", distancia: 567 },
//     { salida: "Cádiz", llegada: "Tarragona", distancia: 987 },
//     { salida: "Castellón", llegada: "Logroño", distancia: 476 },
//     { salida: "Albacete", llegada: "Lleida", distancia: 567 },
//     { salida: "Burgos", llegada: "Jaén", distancia: 654 },
//     { salida: "León", llegada: "Girona", distancia: 897 },
//     { salida: "Pamplona", llegada: "Cáceres", distancia: 654 },
//     { salida: "Ourense", llegada: "Ávila", distancia: 456 },
//     { salida: "Lugo", llegada: "Teruel", distancia: 787 },
//     { salida: "Santiago", llegada: "Cuenca", distancia: 678 },
//     { salida: "Mérida", llegada: "Huesca", distancia: 765 },
//     { salida: "Madrid", llegada: "Málaga", distancia: 544 },
//     { salida: "Barcelona", llegada: "Bilbao", distancia: 620 },
//     { salida: "Valencia", llegada: "Murcia", distancia: 241 },
//     { salida: "Sevilla", llegada: "Granada", distancia: 254 },
//     { salida: "Zaragoza", llegada: "Vigo", distancia: 789 },
//     { salida: "Gijón", llegada: "Santander", distancia: 192 },
//     { salida: "Valladolid", llegada: "Salamanca", distancia: 116 },
//     { salida: "Palma", llegada: "Badajoz", distancia: 987 },
//     { salida: "Vitoria", llegada: "Huelva", distancia: 876 },
//     { salida: "Toledo", llegada: "Tarragona", distancia: 654 },
//     { salida: "Almería", llegada: "Logroño", distancia: 789 },
//     { salida: "Cádiz", llegada: "Lleida", distancia: 987 },
//     { salida: "Castellón", llegada: "Jaén", distancia: 567 },
//     { salida: "Albacete", llegada: "Girona", distancia: 765 },
//     { salida: "Burgos", llegada: "Cáceres", distancia: 456 },
//     { salida: "León", llegada: "Ávila", distancia: 234 },
//     { salida: "Pamplona", llegada: "Teruel", distancia: 432 },
//     { salida: "Madrid", llegada: "Sevilla", distancia: 538 },
//     { salida: "Barcelona", llegada: "Valencia", distancia: 349 },
//     { salida: "Málaga", llegada: "Murcia", distancia: 412 },
//     { salida: "Bilbao", llegada: "Granada", distancia: 832 },
//     { salida: "Zaragoza", llegada: "Santander", distancia: 394 },
//     { salida: "Vigo", llegada: "Salamanca", distancia: 389 },
//     { salida: "Gijón", llegada: "Badajoz", distancia: 567 },
//     { salida: "Valladolid", llegada: "Huelva", distancia: 654 },
//     { salida: "Palma", llegada: "Tarragona", distancia: 234 },
//     { salida: "Vitoria", llegada: "Logroño", distancia: 98 },
//     { salida: "Toledo", llegada: "Lleida", distancia: 567 },
//     { salida: "Almería", llegada: "Jaén", distancia: 234 },
//     { salida: "Cádiz", llegada: "Girona", distancia: 1123 },
//     { salida: "Castellón", llegada: "Cáceres", distancia: 654 },
//     { salida: "Albacete", llegada: "Ávila", distancia: 432 },
//     { salida: "Madrid", llegada: "Murcia", distancia: 401 },
//     { salida: "Barcelona", llegada: "Granada", distancia: 897 },
//     { salida: "Valencia", llegada: "Santander", distancia: 765 },
//     { salida: "Sevilla", llegada: "Salamanca", distancia: 543 },
//     { salida: "Málaga", llegada: "Badajoz", distancia: 432 },
//     { salida: "Bilbao", llegada: "Huelva", distancia: 876 },
//     { salida: "Zaragoza", llegada: "Tarragona", distancia: 243 },
//     { salida: "Vigo", llegada: "Logroño", distancia: 678 },
//     { salida: "Gijón", llegada: "Lleida", distancia: 765 },
//     { salida: "Valladolid", llegada: "Jaén", distancia: 567 },
//     { salida: "Palma", llegada: "Girona", distancia: 345 },
//     { salida: "Vitoria", llegada: "Cáceres", distancia: 654 },
//     { salida: "Toledo", llegada: "Ávila", distancia: 134 },
//     { salida: "Madrid", llegada: "Santander", distancia: 423 },
//     { salida: "Barcelona", llegada: "Salamanca", distancia: 789 },
//     { salida: "Valencia", llegada: "Badajoz", distancia: 654 },
//     { salida: "Sevilla", llegada: "Huelva", distancia: 92 },
//     { salida: "Málaga", llegada: "Tarragona", distancia: 876 },
//     { salida: "Bilbao", llegada: "Logroño", distancia: 133 },
//     { salida: "Zaragoza", llegada: "Lleida", distancia: 151 },
//     { salida: "Vigo", llegada: "Jaén", distancia: 765 },
//     { salida: "Gijón", llegada: "Girona", distancia: 987 },
//     { salida: "Valladolid", llegada: "Cáceres", distancia: 432 },
//     { salida: "Madrid", llegada: "Ávila", distancia: 115 },
//     { salida: "Barcelona", llegada: "Teruel", distancia: 432 },
//     { salida: "Valencia", llegada: "Cuenca", distancia: 234 },
//     { salida: "Sevilla", llegada: "Huesca", distancia: 876 },
//     { salida: "Málaga", llegada: "Soria", distancia: 765 },
//     { salida: "Bilbao", llegada: "Zamora", distancia: 432 },
//     { salida: "Zaragoza", llegada: "Ourense", distancia: 789 },
//     { salida: "Vigo", llegada: "Lugo", distancia: 171 },
//     { salida: "Gijón", llegada: "Santiago", distancia: 345 }
// ];


const rutas = [
    { salida: "Madrid", llegada: "Barcelona", distancia: 621 },
    { salida: "Madrid", llegada: "Valencia", distancia: 357 },
    { salida: "Madrid", llegada: "Sevilla", distancia: 538 },
    { salida: "Madrid", llegada: "Zaragoza", distancia: 325 },
    { salida: "Madrid", llegada: "Málaga", distancia: 544 },
    { salida: "Madrid", llegada: "Murcia", distancia: 401 },
    { salida: "Madrid", llegada: "Palma", distancia: 850 },
    { salida: "Madrid", llegada: "Bilbao", distancia: 395 },
    { salida: "Madrid", llegada: "Alicante", distancia: 422 },
    { salida: "Madrid", llegada: "Córdoba", distancia: 394 },
    { salida: "Barcelona", llegada: "Valencia", distancia: 349 },
    { salida: "Barcelona", llegada: "Sevilla", distancia: 997 },
    { salida: "Barcelona", llegada: "Zaragoza", distancia: 296 },
    { salida: "Barcelona", llegada: "Málaga", distancia: 867 },
    { salida: "Barcelona", llegada: "Murcia", distancia: 590 },
    { salida: "Barcelona", llegada: "Palma", distancia: 208 },
    { salida: "Barcelona", llegada: "Bilbao", distancia: 620 },
    { salida: "Barcelona", llegada: "Alicante", distancia: 515 },
    { salida: "Barcelona", llegada: "Córdoba", distancia: 908 },
    { salida: "Valencia", llegada: "Sevilla", distancia: 697 },
    { salida: "Valencia", llegada: "Zaragoza", distancia: 311 },
    { salida: "Valencia", llegada: "Málaga", distancia: 498 },
    { salida: "Valencia", llegada: "Murcia", distancia: 241 },
    { salida: "Valencia", llegada: "Palma", distancia: 276 },
    { salida: "Valencia", llegada: "Bilbao", distancia: 590 },
    { salida: "Valencia", llegada: "Alicante", distancia: 166 },
    { salida: "Valencia", llegada: "Córdoba", distancia: 537 },
    { salida: "Sevilla", llegada: "Zaragoza", distancia: 849 },
    { salida: "Sevilla", llegada: "Málaga", distancia: 219 },
    { salida: "Sevilla", llegada: "Murcia", distancia: 571 },
    { salida: "Sevilla", llegada: "Palma", distancia: 1056 },
    { salida: "Sevilla", llegada: "Bilbao", distancia: 832 },
    { salida: "Sevilla", llegada: "Alicante", distancia: 654 },
    { salida: "Sevilla", llegada: "Córdoba", distancia: 140 },
    { salida: "Zaragoza", llegada: "Málaga", distancia: 799 },
    { salida: "Zaragoza", llegada: "Murcia", distancia: 534 },
    { salida: "Zaragoza", llegada: "Palma", distancia: 476 },
    { salida: "Zaragoza", llegada: "Bilbao", distancia: 324 },
    { salida: "Zaragoza", llegada: "Alicante", distancia: 497 },
    { salida: "Zaragoza", llegada: "Córdoba", distancia: 756 },
    { salida: "Málaga", llegada: "Murcia", distancia: 412 },
    { salida: "Málaga", llegada: "Palma", distancia: 897 },
    { salida: "Málaga", llegada: "Bilbao", distancia: 932 },
    { salida: "Málaga", llegada: "Alicante", distancia: 467 },
    { salida: "Málaga", llegada: "Córdoba", distancia: 187 },
    { salida: "Murcia", llegada: "Palma", distancia: 432 },
    { salida: "Murcia", llegada: "Bilbao", distancia: 789 },
    { salida: "Murcia", llegada: "Alicante", distancia: 82 },
    { salida: "Murcia", llegada: "Córdoba", distancia: 456 },
    { salida: "Palma", llegada: "Bilbao", distancia: 897 },
    { salida: "Palma", llegada: "Alicante", distancia: 432 },
    { salida: "Palma", llegada: "Córdoba", distancia: 987 },
    { salida: "Bilbao", llegada: "Alicante", distancia: 689 },
    { salida: "Bilbao", llegada: "Córdoba", distancia: 789 },
    { salida: "Alicante", llegada: "Córdoba", distancia: 498 },
    { salida: "Madrid", llegada: "Valladolid", distancia: 213 },
    { salida: "Madrid", llegada: "Vigo", distancia: 592 },
    { salida: "Madrid", llegada: "Gijón", distancia: 451 },
    { salida: "Barcelona", llegada: "Valladolid", distancia: 789 },
    { salida: "Barcelona", llegada: "Vigo", distancia: 1098 },
    { salida: "Barcelona", llegada: "Gijón", distancia: 897 },
    { salida: "Valencia", llegada: "Valladolid", distancia: 567 },
    { salida: "Valencia", llegada: "Vigo", distancia: 876 },
    { salida: "Valencia", llegada: "Gijón", distancia: 789 },
    { salida: "Sevilla", llegada: "Valladolid", distancia: 654 },
    { salida: "Sevilla", llegada: "Vigo", distancia: 789 },
    { salida: "Sevilla", llegada: "Gijón", distancia: 876 },
    { salida: "Zaragoza", llegada: "Valladolid", distancia: 432 },
    { salida: "Zaragoza", llegada: "Vigo", distancia: 789 },
    { salida: "Zaragoza", llegada: "Gijón", distancia: 654 },
    { salida: "Málaga", llegada: "Valladolid", distancia: 765 },
    { salida: "Málaga", llegada: "Vigo", distancia: 987 },
    { salida: "Málaga", llegada: "Gijón", distancia: 876 },
    { salida: "Murcia", llegada: "Valladolid", distancia: 654 },
    { salida: "Murcia", llegada: "Vigo", distancia: 987 },
    { salida: "Murcia", llegada: "Gijón", distancia: 876 },
    { salida: "Palma", llegada: "Valladolid", distancia: 897 },
    { salida: "Palma", llegada: "Vigo", distancia: 1234 },
    { salida: "Palma", llegada: "Gijón", distancia: 1123 },
    { salida: "Bilbao", llegada: "Valladolid", distancia: 280 },
    { salida: "Bilbao", llegada: "Vigo", distancia: 567 },
    { salida: "Bilbao", llegada: "Gijón", distancia: 304 },
    { salida: "Alicante", llegada: "Valladolid", distancia: 654 },
    { salida: "Alicante", llegada: "Vigo", distancia: 987 },
    { salida: "Alicante", llegada: "Gijón", distancia: 876 },
    { salida: "Córdoba", llegada: "Valladolid", distancia: 567 },
    { salida: "Córdoba", llegada: "Vigo", distancia: 876 },
    { salida: "Córdoba", llegada: "Gijón", distancia: 789 },
    { salida: "Valladolid", llegada: "Vigo", distancia: 456 },
    { salida: "Valladolid", llegada: "Gijón", distancia: 287 },
    { salida: "Vigo", llegada: "Gijón", distancia: 382 },
    { salida: "Madrid", llegada: "Las Palmas", distancia: 2200 },
    { salida: "Barcelona", llegada: "Las Palmas", distancia: 2590 },
    { salida: "Valencia", llegada: "Las Palmas", distancia: 2320 },
    { salida: "Sevilla", llegada: "Las Palmas", distancia: 1890 },
    { salida: "Zaragoza", llegada: "Las Palmas", distancia: 2450 },
    { salida: "Málaga", llegada: "Las Palmas", distancia: 1780 },
    { salida: "Murcia", llegada: "Las Palmas", distancia: 2150 },
    { salida: "Palma", llegada: "Las Palmas", distancia: 2480 },
    { salida: "Bilbao", llegada: "Las Palmas", distancia: 2340 },
    // { salida: "Alicante", llegada: "Las Palmas", distancia: 2180 },
    // { salida: "Córdoba", llegada: "Las Palmas", distancia: 1980 },
    // { salida: "Valladolid", llegada: "Las Palmas", distancia: 2290 },
    // { salida: "Vigo", llegada: "Las Palmas", distancia: 2100 },
    // { salida: "Gijón", llegada: "Las Palmas", distancia: 2280 }
];


const ciudades = [
    {
        codigo: 'c7aa0acd-0906-460f-b913-5352cfc56d8a',
        nombre: 'Madrid'
    },
    {
        codigo: 'eb101914-37de-4104-b715-9268e0c08228',
        nombre: 'Barcelona'
    },
    {
        codigo: '9229b196-f1b9-4235-ac9e-60da97fcba0b',
        nombre: 'Valencia'
    },
    {
        codigo: '6164a8b2-9a3c-4248-bd67-de41f7ce8f58',
        nombre: 'Sevilla'
    },
    {
        codigo: '2512212e-b281-451c-9b3c-de39ed38b555',
        nombre: 'Zaragoza'
    },
    {
        codigo: '7123c15d-f175-450e-89f9-002dcd613a45',
        nombre: 'Málaga'
    },
    {
        codigo: '356bf613-b2ed-44c2-83ee-b766e02def29',
        nombre: 'Murcia'
    },
    {
        codigo: '60cf6ac6-acfc-4345-880c-fb6d6ec68be3',
        nombre: 'Palma'
    },
    {
        codigo: 'a3a60498-84b5-46f4-8c72-5ab42347b029',
        nombre: 'Bilbao'
    },
    {
        codigo: '3a9c743a-bb33-4b16-bf7e-420729186679',
        nombre: 'Alicante'
    },
    {
        codigo: '394cb8ee-9bd0-4887-9d73-d520de8feb34',
        nombre: 'Córdoba'
    },
    {
        codigo: '53fe110a-1093-4a6d-902c-67541d4cef24',
        nombre: 'Valladolid'
    },
    {
        codigo: '0223735d-dd15-4908-b4ad-2251aadc5797',
        nombre: 'Vigo'
    },
    {
        codigo: '51e904dc-2950-4384-bd19-bca072af83ac',
        nombre: 'Gijón'
    },
    {
        codigo: '4a619c8b-0f12-4782-b06e-a53846c300c6',
        nombre: 'Las Palmas'
    }
];


// let ciudades = Array.from(new Set([...rutas.map(ruta => ruta.salida), ...rutas.map(ruta => ruta.llegada)]));
// ciudades = ciudades.map(ciudad => ({ codigo: crypto.randomUUID(), nombre: ciudad }));

// console.log(ciudades);




function getCode(ciudad) {
    return ciudades.find(c => c.nombre === ciudad)?.codigo;
}

// console.log(getCode("Córdoba"));


// ciudades.forEach(ciudad => console.log(ciudad.nombre, getCode(ciudad.nombre)));


function getRandomDuration() {
    return (Math.round((Math.random() * (0.6 - 0.4) + 0.4) * 100) / 100);
}

function getRandomPrice() {
    return (Math.round((Math.random() * (0.28 - 0.18) + 0.18) * 100) / 100);
}

function formatTwoDecimals(number) {
    return parseFloat(number).toFixed(2);
}

let newRutas = rutas.map(ruta => ({
    ...ruta,
    duracion: Math.round(ruta.distancia * getRandomDuration()),
    precio: parseFloat(getRandomPrice()),
}));


newRutas = newRutas.map(ciudad => ({ 
    salida: getCode(ciudad.salida), 
    llegada: getCode(ciudad.llegada), 
    distancia: ciudad.distancia,
    duracion: ciudad.duracion, 
    precio: ciudad.precio, 
}));

console.log(newRutas);

