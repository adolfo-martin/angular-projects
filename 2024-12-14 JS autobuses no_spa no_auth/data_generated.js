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

const rutas = [
    {
        salida: 'c7aa0acd-0906-460f-b913-5352cfc56d8a',
        llegada: 'eb101914-37de-4104-b715-9268e0c08228',
        distancia: 621,
        duracion: 279,
        precio: 0.19
    },
    {
        salida: 'c7aa0acd-0906-460f-b913-5352cfc56d8a',
        llegada: '9229b196-f1b9-4235-ac9e-60da97fcba0b',
        distancia: 357,
        duracion: 143,
        precio: 0.27
    },
    {
        salida: 'c7aa0acd-0906-460f-b913-5352cfc56d8a',
        llegada: '6164a8b2-9a3c-4248-bd67-de41f7ce8f58',
        distancia: 538,
        duracion: 269,
        precio: 0.25
    },
    {
        salida: 'c7aa0acd-0906-460f-b913-5352cfc56d8a',
        llegada: '2512212e-b281-451c-9b3c-de39ed38b555',
        distancia: 325,
        duracion: 133,
        precio: 0.27
    },
    {
        salida: 'c7aa0acd-0906-460f-b913-5352cfc56d8a',
        llegada: '7123c15d-f175-450e-89f9-002dcd613a45',
        distancia: 544,
        duracion: 305,
        precio: 0.25
    },
    {
        salida: 'c7aa0acd-0906-460f-b913-5352cfc56d8a',
        llegada: '356bf613-b2ed-44c2-83ee-b766e02def29',
        distancia: 401,
        duracion: 225,
        precio: 0.18
    },
    {
        salida: 'c7aa0acd-0906-460f-b913-5352cfc56d8a',
        llegada: '60cf6ac6-acfc-4345-880c-fb6d6ec68be3',
        distancia: 850,
        duracion: 417,
        precio: 0.25
    },
    {
        salida: 'c7aa0acd-0906-460f-b913-5352cfc56d8a',
        llegada: 'a3a60498-84b5-46f4-8c72-5ab42347b029',
        distancia: 395,
        duracion: 198,
        precio: 0.24
    },
    {
        salida: 'c7aa0acd-0906-460f-b913-5352cfc56d8a',
        llegada: '3a9c743a-bb33-4b16-bf7e-420729186679',
        distancia: 422,
        duracion: 241,
        precio: 0.26
    },
    {
        salida: 'c7aa0acd-0906-460f-b913-5352cfc56d8a',
        llegada: '394cb8ee-9bd0-4887-9d73-d520de8feb34',
        distancia: 394,
        duracion: 232,
        precio: 0.26
    },
    {
        salida: 'eb101914-37de-4104-b715-9268e0c08228',
        llegada: '9229b196-f1b9-4235-ac9e-60da97fcba0b',
        distancia: 349,
        duracion: 175,
        precio: 0.22
    },
    {
        salida: 'eb101914-37de-4104-b715-9268e0c08228',
        llegada: '6164a8b2-9a3c-4248-bd67-de41f7ce8f58',
        distancia: 997,
        duracion: 568,
        precio: 0.27
    },
    {
        salida: 'eb101914-37de-4104-b715-9268e0c08228',
        llegada: '2512212e-b281-451c-9b3c-de39ed38b555',
        distancia: 296,
        duracion: 154,
        precio: 0.26
    },
    {
        salida: 'eb101914-37de-4104-b715-9268e0c08228',
        llegada: '7123c15d-f175-450e-89f9-002dcd613a45',
        distancia: 867,
        duracion: 442,
        precio: 0.19
    },
    {
        salida: 'eb101914-37de-4104-b715-9268e0c08228',
        llegada: '356bf613-b2ed-44c2-83ee-b766e02def29',
        distancia: 590,
        duracion: 336,
        precio: 0.23
    },
    {
        salida: 'eb101914-37de-4104-b715-9268e0c08228',
        llegada: '60cf6ac6-acfc-4345-880c-fb6d6ec68be3',
        distancia: 208,
        duracion: 119,
        precio: 0.27
    },
    {
        salida: 'eb101914-37de-4104-b715-9268e0c08228',
        llegada: 'a3a60498-84b5-46f4-8c72-5ab42347b029',
        distancia: 620,
        duracion: 273,
        precio: 0.27
    },
    {
        salida: 'eb101914-37de-4104-b715-9268e0c08228',
        llegada: '3a9c743a-bb33-4b16-bf7e-420729186679',
        distancia: 515,
        duracion: 283,
        precio: 0.28
    },
    {
        salida: 'eb101914-37de-4104-b715-9268e0c08228',
        llegada: '394cb8ee-9bd0-4887-9d73-d520de8feb34',
        distancia: 908,
        duracion: 490,
        precio: 0.21
    },
    {
        salida: '9229b196-f1b9-4235-ac9e-60da97fcba0b',
        llegada: '6164a8b2-9a3c-4248-bd67-de41f7ce8f58',
        distancia: 697,
        duracion: 307,
        precio: 0.24
    },
    {
        salida: '9229b196-f1b9-4235-ac9e-60da97fcba0b',
        llegada: '2512212e-b281-451c-9b3c-de39ed38b555',
        distancia: 311,
        duracion: 165,
        precio: 0.22
    },
    {
        salida: '9229b196-f1b9-4235-ac9e-60da97fcba0b',
        llegada: '7123c15d-f175-450e-89f9-002dcd613a45',
        distancia: 498,
        duracion: 269,
        precio: 0.19
    },
    {
        salida: '9229b196-f1b9-4235-ac9e-60da97fcba0b',
        llegada: '356bf613-b2ed-44c2-83ee-b766e02def29',
        distancia: 241,
        duracion: 142,
        precio: 0.2
    },
    {
        salida: '9229b196-f1b9-4235-ac9e-60da97fcba0b',
        llegada: '60cf6ac6-acfc-4345-880c-fb6d6ec68be3',
        distancia: 276,
        duracion: 130,
        precio: 0.21
    },
    {
        salida: '9229b196-f1b9-4235-ac9e-60da97fcba0b',
        llegada: 'a3a60498-84b5-46f4-8c72-5ab42347b029',
        distancia: 590,
        duracion: 336,
        precio: 0.24
    },
    {
        salida: '9229b196-f1b9-4235-ac9e-60da97fcba0b',
        llegada: '3a9c743a-bb33-4b16-bf7e-420729186679',
        distancia: 166,
        duracion: 70,
        precio: 0.22
    },
    {
        salida: '9229b196-f1b9-4235-ac9e-60da97fcba0b',
        llegada: '394cb8ee-9bd0-4887-9d73-d520de8feb34',
        distancia: 537,
        duracion: 242,
        precio: 0.22
    },
    {
        salida: '6164a8b2-9a3c-4248-bd67-de41f7ce8f58',
        llegada: '2512212e-b281-451c-9b3c-de39ed38b555',
        distancia: 849,
        duracion: 492,
        precio: 0.2
    },
    {
        salida: '6164a8b2-9a3c-4248-bd67-de41f7ce8f58',
        llegada: '7123c15d-f175-450e-89f9-002dcd613a45',
        distancia: 219,
        duracion: 103,
        precio: 0.24
    },
    {
        salida: '6164a8b2-9a3c-4248-bd67-de41f7ce8f58',
        llegada: '356bf613-b2ed-44c2-83ee-b766e02def29',
        distancia: 571,
        duracion: 234,
        precio: 0.25
    },
    {
        salida: '6164a8b2-9a3c-4248-bd67-de41f7ce8f58',
        llegada: '60cf6ac6-acfc-4345-880c-fb6d6ec68be3',
        distancia: 1056,
        duracion: 581,
        precio: 0.19
    },
    {
        salida: '6164a8b2-9a3c-4248-bd67-de41f7ce8f58',
        llegada: 'a3a60498-84b5-46f4-8c72-5ab42347b029',
        distancia: 832,
        duracion: 399,
        precio: 0.22
    },
    {
        salida: '6164a8b2-9a3c-4248-bd67-de41f7ce8f58',
        llegada: '3a9c743a-bb33-4b16-bf7e-420729186679',
        distancia: 654,
        duracion: 353,
        precio: 0.24
    },
    {
        salida: '6164a8b2-9a3c-4248-bd67-de41f7ce8f58',
        llegada: '394cb8ee-9bd0-4887-9d73-d520de8feb34',
        distancia: 140,
        duracion: 71,
        precio: 0.19
    },
    {
        salida: '2512212e-b281-451c-9b3c-de39ed38b555',
        llegada: '7123c15d-f175-450e-89f9-002dcd613a45',
        distancia: 799,
        duracion: 344,
        precio: 0.23
    },
    {
        salida: '2512212e-b281-451c-9b3c-de39ed38b555',
        llegada: '356bf613-b2ed-44c2-83ee-b766e02def29',
        distancia: 534,
        duracion: 294,
        precio: 0.24
    },
    {
        salida: '2512212e-b281-451c-9b3c-de39ed38b555',
        llegada: '60cf6ac6-acfc-4345-880c-fb6d6ec68be3',
        distancia: 476,
        duracion: 262,
        precio: 0.2
    },
    {
        salida: '2512212e-b281-451c-9b3c-de39ed38b555',
        llegada: 'a3a60498-84b5-46f4-8c72-5ab42347b029',
        distancia: 324,
        duracion: 146,
        precio: 0.23
    },
    {
        salida: '2512212e-b281-451c-9b3c-de39ed38b555',
        llegada: '3a9c743a-bb33-4b16-bf7e-420729186679',
        distancia: 497,
        duracion: 249,
        precio: 0.19
    },
    {
        salida: '2512212e-b281-451c-9b3c-de39ed38b555',
        llegada: '394cb8ee-9bd0-4887-9d73-d520de8feb34',
        distancia: 756,
        duracion: 393,
        precio: 0.24
    },
    {
        salida: '7123c15d-f175-450e-89f9-002dcd613a45',
        llegada: '356bf613-b2ed-44c2-83ee-b766e02def29',
        distancia: 412,
        duracion: 218,
        precio: 0.2
    },
    {
        salida: '7123c15d-f175-450e-89f9-002dcd613a45',
        llegada: '60cf6ac6-acfc-4345-880c-fb6d6ec68be3',
        distancia: 897,
        duracion: 475,
        precio: 0.2
    },
    {
        salida: '7123c15d-f175-450e-89f9-002dcd613a45',
        llegada: 'a3a60498-84b5-46f4-8c72-5ab42347b029',
        distancia: 932,
        duracion: 475,
        precio: 0.28
    },
    {
        salida: '7123c15d-f175-450e-89f9-002dcd613a45',
        llegada: '3a9c743a-bb33-4b16-bf7e-420729186679',
        distancia: 467,
        duracion: 262,
        precio: 0.19
    },
    {
        salida: '7123c15d-f175-450e-89f9-002dcd613a45',
        llegada: '394cb8ee-9bd0-4887-9d73-d520de8feb34',
        distancia: 187,
        duracion: 105,
        precio: 0.24
    },
    {
        salida: '356bf613-b2ed-44c2-83ee-b766e02def29',
        llegada: '60cf6ac6-acfc-4345-880c-fb6d6ec68be3',
        distancia: 432,
        duracion: 220,
        precio: 0.24
    },
    {
        salida: '356bf613-b2ed-44c2-83ee-b766e02def29',
        llegada: 'a3a60498-84b5-46f4-8c72-5ab42347b029',
        distancia: 789,
        duracion: 426,
        precio: 0.26
    },
    {
        salida: '356bf613-b2ed-44c2-83ee-b766e02def29',
        llegada: '3a9c743a-bb33-4b16-bf7e-420729186679',
        distancia: 82,
        duracion: 33,
        precio: 0.27
    },
    {
        salida: '356bf613-b2ed-44c2-83ee-b766e02def29',
        llegada: '394cb8ee-9bd0-4887-9d73-d520de8feb34',
        distancia: 456,
        duracion: 201,
        precio: 0.19
    },
    {
        salida: '60cf6ac6-acfc-4345-880c-fb6d6ec68be3',
        llegada: 'a3a60498-84b5-46f4-8c72-5ab42347b029',
        distancia: 897,
        duracion: 413,
        precio: 0.23
    },
    {
        salida: '60cf6ac6-acfc-4345-880c-fb6d6ec68be3',
        llegada: '3a9c743a-bb33-4b16-bf7e-420729186679',
        distancia: 432,
        duracion: 238,
        precio: 0.2
    },
    {
        salida: '60cf6ac6-acfc-4345-880c-fb6d6ec68be3',
        llegada: '394cb8ee-9bd0-4887-9d73-d520de8feb34',
        distancia: 987,
        duracion: 553,
        precio: 0.25
    },
    {
        salida: 'a3a60498-84b5-46f4-8c72-5ab42347b029',
        llegada: '3a9c743a-bb33-4b16-bf7e-420729186679',
        distancia: 689,
        duracion: 331,
        precio: 0.26
    },
    {
        salida: 'a3a60498-84b5-46f4-8c72-5ab42347b029',
        llegada: '394cb8ee-9bd0-4887-9d73-d520de8feb34',
        distancia: 789,
        duracion: 402,
        precio: 0.2
    },
    {
        salida: '3a9c743a-bb33-4b16-bf7e-420729186679',
        llegada: '394cb8ee-9bd0-4887-9d73-d520de8feb34',
        distancia: 498,
        duracion: 274,
        precio: 0.27
    },
    {
        salida: 'c7aa0acd-0906-460f-b913-5352cfc56d8a',
        llegada: '53fe110a-1093-4a6d-902c-67541d4cef24',
        distancia: 213,
        duracion: 92,
        precio: 0.22
    },
    {
        salida: 'c7aa0acd-0906-460f-b913-5352cfc56d8a',
        llegada: '0223735d-dd15-4908-b4ad-2251aadc5797',
        distancia: 592,
        duracion: 290,
        precio: 0.22
    },
    {
        salida: 'c7aa0acd-0906-460f-b913-5352cfc56d8a',
        llegada: '51e904dc-2950-4384-bd19-bca072af83ac',
        distancia: 451,
        duracion: 216,
        precio: 0.24
    },
    {
        salida: 'eb101914-37de-4104-b715-9268e0c08228',
        llegada: '53fe110a-1093-4a6d-902c-67541d4cef24',
        distancia: 789,
        duracion: 473,
        precio: 0.19
    },
    {
        salida: 'eb101914-37de-4104-b715-9268e0c08228',
        llegada: '0223735d-dd15-4908-b4ad-2251aadc5797',
        distancia: 1098,
        duracion: 494,
        precio: 0.24
    },
    {
        salida: 'eb101914-37de-4104-b715-9268e0c08228',
        llegada: '51e904dc-2950-4384-bd19-bca072af83ac',
        distancia: 897,
        duracion: 386,
        precio: 0.27
    },
    {
        salida: '9229b196-f1b9-4235-ac9e-60da97fcba0b',
        llegada: '53fe110a-1093-4a6d-902c-67541d4cef24',
        distancia: 567,
        duracion: 238,
        precio: 0.21
    },
    {
        salida: '9229b196-f1b9-4235-ac9e-60da97fcba0b',
        llegada: '0223735d-dd15-4908-b4ad-2251aadc5797',
        distancia: 876,
        duracion: 464,
        precio: 0.19
    },
    {
        salida: '9229b196-f1b9-4235-ac9e-60da97fcba0b',
        llegada: '51e904dc-2950-4384-bd19-bca072af83ac',
        distancia: 789,
        duracion: 402,
        precio: 0.19
    },
    {
        salida: '6164a8b2-9a3c-4248-bd67-de41f7ce8f58',
        llegada: '53fe110a-1093-4a6d-902c-67541d4cef24',
        distancia: 654,
        duracion: 281,
        precio: 0.28
    },
    {
        salida: '6164a8b2-9a3c-4248-bd67-de41f7ce8f58',
        llegada: '0223735d-dd15-4908-b4ad-2251aadc5797',
        distancia: 789,
        duracion: 434,
        precio: 0.24
    },
    {
        salida: '6164a8b2-9a3c-4248-bd67-de41f7ce8f58',
        llegada: '51e904dc-2950-4384-bd19-bca072af83ac',
        distancia: 876,
        duracion: 491,
        precio: 0.27
    },
    {
        salida: '2512212e-b281-451c-9b3c-de39ed38b555',
        llegada: '53fe110a-1093-4a6d-902c-67541d4cef24',
        distancia: 432,
        duracion: 203,
        precio: 0.22
    },
    {
        salida: '2512212e-b281-451c-9b3c-de39ed38b555',
        llegada: '0223735d-dd15-4908-b4ad-2251aadc5797',
        distancia: 789,
        duracion: 450,
        precio: 0.28
    },
    {
        salida: '2512212e-b281-451c-9b3c-de39ed38b555',
        llegada: '51e904dc-2950-4384-bd19-bca072af83ac',
        distancia: 654,
        duracion: 281,
        precio: 0.27
    },
    {
        salida: '7123c15d-f175-450e-89f9-002dcd613a45',
        llegada: '53fe110a-1093-4a6d-902c-67541d4cef24',
        distancia: 765,
        duracion: 428,
        precio: 0.25
    },
    {
        salida: '7123c15d-f175-450e-89f9-002dcd613a45',
        llegada: '0223735d-dd15-4908-b4ad-2251aadc5797',
        distancia: 987,
        duracion: 523,
        precio: 0.21
    },
    {
        salida: '7123c15d-f175-450e-89f9-002dcd613a45',
        llegada: '51e904dc-2950-4384-bd19-bca072af83ac',
        distancia: 876,
        duracion: 420,
        precio: 0.27
    },
    {
        salida: '356bf613-b2ed-44c2-83ee-b766e02def29',
        llegada: '53fe110a-1093-4a6d-902c-67541d4cef24',
        distancia: 654,
        duracion: 327,
        precio: 0.27
    },
    {
        salida: '356bf613-b2ed-44c2-83ee-b766e02def29',
        llegada: '0223735d-dd15-4908-b4ad-2251aadc5797',
        distancia: 987,
        duracion: 484,
        precio: 0.26
    },
    {
        salida: '356bf613-b2ed-44c2-83ee-b766e02def29',
        llegada: '51e904dc-2950-4384-bd19-bca072af83ac',
        distancia: 876,
        duracion: 456,
        precio: 0.21
    },
    {
        salida: '60cf6ac6-acfc-4345-880c-fb6d6ec68be3',
        llegada: '53fe110a-1093-4a6d-902c-67541d4cef24',
        distancia: 897,
        duracion: 386,
        precio: 0.21
    },
    {
        salida: '60cf6ac6-acfc-4345-880c-fb6d6ec68be3',
        llegada: '0223735d-dd15-4908-b4ad-2251aadc5797',
        distancia: 1234,
        duracion: 580,
        precio: 0.25
    },
    {
        salida: '60cf6ac6-acfc-4345-880c-fb6d6ec68be3',
        llegada: '51e904dc-2950-4384-bd19-bca072af83ac',
        distancia: 1123,
        duracion: 606,
        precio: 0.25
    },
    {
        salida: 'a3a60498-84b5-46f4-8c72-5ab42347b029',
        llegada: '53fe110a-1093-4a6d-902c-67541d4cef24',
        distancia: 280,
        duracion: 151,
        precio: 0.25
    },
    {
        salida: 'a3a60498-84b5-46f4-8c72-5ab42347b029',
        llegada: '0223735d-dd15-4908-b4ad-2251aadc5797',
        distancia: 567,
        duracion: 255,
        precio: 0.22
    },
    {
        salida: 'a3a60498-84b5-46f4-8c72-5ab42347b029',
        llegada: '51e904dc-2950-4384-bd19-bca072af83ac',
        distancia: 304,
        duracion: 161,
        precio: 0.2
    },
    {
        salida: '3a9c743a-bb33-4b16-bf7e-420729186679',
        llegada: '53fe110a-1093-4a6d-902c-67541d4cef24',
        distancia: 654,
        duracion: 314,
        precio: 0.25
    },
    {
        salida: '3a9c743a-bb33-4b16-bf7e-420729186679',
        llegada: '0223735d-dd15-4908-b4ad-2251aadc5797',
        distancia: 987,
        duracion: 523,
        precio: 0.28
    },
    {
        salida: '3a9c743a-bb33-4b16-bf7e-420729186679',
        llegada: '51e904dc-2950-4384-bd19-bca072af83ac',
        distancia: 876,
        duracion: 438,
        precio: 0.19
    },
    {
        salida: '394cb8ee-9bd0-4887-9d73-d520de8feb34',
        llegada: '53fe110a-1093-4a6d-902c-67541d4cef24',
        distancia: 567,
        duracion: 323,
        precio: 0.2
    },
    {
        salida: '394cb8ee-9bd0-4887-9d73-d520de8feb34',
        llegada: '0223735d-dd15-4908-b4ad-2251aadc5797',
        distancia: 876,
        duracion: 420,
        precio: 0.24
    },
    {
        salida: '394cb8ee-9bd0-4887-9d73-d520de8feb34',
        llegada: '51e904dc-2950-4384-bd19-bca072af83ac',
        distancia: 789,
        duracion: 434,
        precio: 0.25
    },
    {
        salida: '53fe110a-1093-4a6d-902c-67541d4cef24',
        llegada: '0223735d-dd15-4908-b4ad-2251aadc5797',
        distancia: 456,
        duracion: 242,
        precio: 0.24
    },
    {
        salida: '53fe110a-1093-4a6d-902c-67541d4cef24',
        llegada: '51e904dc-2950-4384-bd19-bca072af83ac',
        distancia: 287,
        duracion: 152,
        precio: 0.27
    },
    {
        salida: '0223735d-dd15-4908-b4ad-2251aadc5797',
        llegada: '51e904dc-2950-4384-bd19-bca072af83ac',
        distancia: 382,
        duracion: 222,
        precio: 0.22
    },
    {
        salida: 'c7aa0acd-0906-460f-b913-5352cfc56d8a',
        llegada: '4a619c8b-0f12-4782-b06e-a53846c300c6',
        distancia: 2200,
        duracion: 1188,
        precio: 0.25
    },
    {
        salida: 'eb101914-37de-4104-b715-9268e0c08228',
        llegada: '4a619c8b-0f12-4782-b06e-a53846c300c6',
        distancia: 2590,
        duracion: 1347,
        precio: 0.23
    },
    {
        salida: '9229b196-f1b9-4235-ac9e-60da97fcba0b',
        llegada: '4a619c8b-0f12-4782-b06e-a53846c300c6',
        distancia: 2320,
        duracion: 951,
        precio: 0.21
    },
    {
        salida: '6164a8b2-9a3c-4248-bd67-de41f7ce8f58',
        llegada: '4a619c8b-0f12-4782-b06e-a53846c300c6',
        distancia: 1890,
        duracion: 907,
        precio: 0.25
    },
    {
        salida: '2512212e-b281-451c-9b3c-de39ed38b555',
        llegada: '4a619c8b-0f12-4782-b06e-a53846c300c6',
        distancia: 2450,
        duracion: 1250,
        precio: 0.19
    },
    {
        salida: '7123c15d-f175-450e-89f9-002dcd613a45',
        llegada: '4a619c8b-0f12-4782-b06e-a53846c300c6',
        distancia: 1780,
        duracion: 997,
        precio: 0.21
    },
    {
        salida: '356bf613-b2ed-44c2-83ee-b766e02def29',
        llegada: '4a619c8b-0f12-4782-b06e-a53846c300c6',
        distancia: 2150,
        duracion: 989,
        precio: 0.2
    },
    {
        salida: '60cf6ac6-acfc-4345-880c-fb6d6ec68be3',
        llegada: '4a619c8b-0f12-4782-b06e-a53846c300c6',
        distancia: 2480,
        duracion: 1042,
        precio: 0.26
    },
    {
        salida: 'a3a60498-84b5-46f4-8c72-5ab42347b029',
        llegada: '4a619c8b-0f12-4782-b06e-a53846c300c6',
        distancia: 2340,
        duracion: 959,
        precio: 0.21
    }
];





// console.log(
//     rutas.filter(ruta => ruta.salida === rutas[0].salida)
//         .map(ruta => ({
//             salida: ciudades.find(ciudad => ciudad.codigo === ruta.salida).nombre,
//             llegada: ciudades.find(ciudad => ciudad.codigo === ruta.llegada).nombre,
//         }))
// );