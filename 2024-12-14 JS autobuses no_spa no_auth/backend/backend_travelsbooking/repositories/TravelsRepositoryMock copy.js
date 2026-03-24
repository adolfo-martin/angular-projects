export default class TravelsRepositoryMock {

    static #cities = [
        {
            uuid: 'MAD',
            name: 'Madrid',
            review: "Capital española y centro cultural con el Museo del Prado, Retiro y Plaza Mayor. Ciudad vibrante con arquitectura histórica.",
        },
        {
            uuid: 'BAR',
            name: 'Barcelona',
            review: "Ciudad costera catalana famosa por la Sagrada Familia, obras de Gaudí y playas mediterráneas. Centro artístico importante.",
        },
        {
            uuid: 'VAL',
            name: 'Valencia',
            review: "Ciudad mediterránea conocida por las Fallas, Ciudad de las Artes y Ciencias y la auténtica paella valenciana.",
        },
        {
            uuid: 'SEL',
            name: 'Sevilla',
            review: "Capital andaluza con la Giralda, Real Alcázar y barrio Santa Cruz. Cuna del flamenco y arte mudéjar.",
        },
        {
            uuid: 'ZAR',
            name: 'Zaragoza',
            review: "Ciudad aragonesa con la Basílica del Pilar, arte mudéjar y romano. Centro histórico del Valle del Ebro.",
        },
        {
            uuid: 'MAL',
            name: 'Málaga',
            review: "Puerto mediterráneo con playas, Alcazaba y museo Picasso. Ciudad natal del famoso pintor malagueño.",
        },
        {
            uuid: 'MUR',
            name: 'Murcia',
            review: "Capital huertana con Catedral barroca, plaza Cardinal Belluga y gastronomía mediterránea destacada.",
        },
        {
            uuid: 'PAL',
            name: 'Palma',
            review: "Capital balear con catedral gótica, castillo Bellver y calas cristalinas. Destino turístico mediterráneo.",
        },
        {
            uuid: 'BIL',
            name: 'Bilbao',
            review: "Ciudad vasca moderna con Museo Guggenheim, gastronomía pintxos y casco antiguo medieval.",
        },
        {
            uuid: 'ALI',
            name: 'Alicante',
            review: "Ciudad costera con Castillo Santa Bárbara, playas mediterráneas y rica gastronomía marinera.",
        },
        {
            uuid: 'COR',
            name: 'Córdoba',
            review: "Ciudad andaluza con Mezquita-Catedral, patios floridos y barrio judío. Patrimonio histórico UNESCO.",
        },
        {
            uuid: 'VLL',
            name: 'Valladolid',
            review: "Capital castellana con Plaza Mayor renacentista, Catedral y museo Nacional de Escultura.",
        },
        {
            uuid: 'VIG',
            name: 'Vigo',
            review: "Puerto atlántico gallego con industria pesquera, Islas Cíes y gastronomía marítima excepcional.",
        },
        {
            uuid: 'GIJ',
            name: 'Gijón',
            review: "Ciudad asturiana costera con playas, termas romanas y barrio pescador de Cimadevilla."
        },
    ];

    static #routes = [
        {
            uuid: '318d0d78-29cb-4107-80ec-ae9e1c930d92',
            departureCity: 'MAD',
            arrivalCity: 'BAR',
            distance: 621,
            duration: 279,
            price: 0.19
        },
        {
            uuid: '435d1a14-be27-4485-a50e-e583e694c51e',
            departureCity: 'MAD',
            arrivalCity: 'VAL',
            distance: 357,
            duration: 143,
            price: 0.27
        },
        {
            uuid: '80a7e085-5b5c-45f4-9556-bbcd43eca6ae',
            departureCity: 'MAD',
            arrivalCity: 'SEL',
            distance: 538,
            duration: 269,
            price: 0.25
        },
        {
            uuid: '6542dc7c-2dc0-43cd-8dfc-d6ed4d5cb818',
            departureCity: 'MAD',
            arrivalCity: 'ZAR',
            distance: 325,
            duration: 133,
            price: 0.27
        },
        {
            uuid: '4d6a9b55-5d23-4a99-8053-5fc5234b3cc9',
            departureCity: 'MAD',
            arrivalCity: 'MAL',
            distance: 544,
            duration: 305,
            price: 0.25
        },
        {
            uuid: '77e22e4b-8a77-4285-a924-b259b66fce5b',
            departureCity: 'MAD',
            arrivalCity: 'MUR',
            distance: 401,
            duration: 225,
            price: 0.18
        },
        {
            uuid: 'd8d8fd8c-56b3-4eaf-ab14-0fbc7feb1163',
            departureCity: 'MAD',
            arrivalCity: 'PAL',
            distance: 850,
            duration: 417,
            price: 0.25
        },
        {
            uuid: '6112d1c8-7fe6-4210-b76b-efa70838446f',
            departureCity: 'MAD',
            arrivalCity: 'BIL',
            distance: 395,
            duration: 198,
            price: 0.24
        },
        {
            uuid: '10babe8a-5358-407a-a3bc-d26fed8c567c',
            departureCity: 'MAD',
            arrivalCity: 'ALI',
            distance: 422,
            duration: 241,
            price: 0.26
        },
        {
            uuid: '598c7cff-55f8-4240-a078-40a6227c2174',
            departureCity: 'MAD',
            arrivalCity: 'COR',
            distance: 394,
            duration: 232,
            price: 0.26
        },
        {
            uuid: '134280fe-e8e7-41d5-8147-46052481558f',
            departureCity: 'BAR',
            arrivalCity: 'VAL',
            distance: 349,
            duration: 175,
            price: 0.22
        },
        {
            uuid: '0bd640d8-022a-4f12-848d-3bd5a61ae4c4',
            departureCity: 'BAR',
            arrivalCity: 'SEL',
            distance: 997,
            duration: 568,
            price: 0.27
        },
        {
            uuid: 'e6228ee8-4bd7-409a-9fc0-95e8d6a235db',
            departureCity: 'BAR',
            arrivalCity: 'ZAR',
            distance: 296,
            duration: 154,
            price: 0.26
        },
        {
            uuid: 'bcb9a760-fdd7-406e-8fa0-2fb681ad2f06',
            departureCity: 'BAR',
            arrivalCity: 'MAL',
            distance: 867,
            duration: 442,
            price: 0.19
        },
        {
            uuid: 'aae03023-ba07-4cdd-8bc9-ff912df98a61',
            departureCity: 'BAR',
            arrivalCity: 'MUR',
            distance: 590,
            duration: 336,
            price: 0.23
        },
        {
            uuid: '7a66bebf-c28a-49ff-9057-e0e2eeebb7ca',
            departureCity: 'BAR',
            arrivalCity: 'PAL',
            distance: 208,
            duration: 119,
            price: 0.27
        },
        {
            uuid: '276f1395-c263-427e-90aa-dd44591942b0',
            departureCity: 'BAR',
            arrivalCity: 'BIL',
            distance: 620,
            duration: 273,
            price: 0.27
        },
        {
            uuid: 'a9a41e88-24cf-4e8c-adbb-0e04407aab6e',
            departureCity: 'BAR',
            arrivalCity: 'ALI',
            distance: 515,
            duration: 283,
            price: 0.28
        },
        {
            uuid: 'dd14e782-4481-478f-ab4f-024edd610c08',
            departureCity: 'BAR',
            arrivalCity: 'COR',
            distance: 908,
            duration: 490,
            price: 0.21
        },
        {
            uuid: 'f64f8fb3-84c9-4063-985d-6d1ca1fa6be3',
            departureCity: 'VAL',
            arrivalCity: 'SEL',
            distance: 697,
            duration: 307,
            price: 0.24
        },
        {
            uuid: 'b8bec94e-bc86-465c-926a-97b8c51384c6',
            departureCity: 'VAL',
            arrivalCity: 'ZAR',
            distance: 311,
            duration: 165,
            price: 0.22
        },
        {
            uuid: 'd5f26502-e47f-46ba-b3f2-8bac64be9280',
            departureCity: 'VAL',
            arrivalCity: 'MAL',
            distance: 498,
            duration: 269,
            price: 0.19
        },
        {
            uuid: '59f530a5-3792-4a57-aab0-22eee51a9acd',
            departureCity: 'VAL',
            arrivalCity: 'MUR',
            distance: 241,
            duration: 142,
            price: 0.2
        },
        {
            uuid: 'd97ca6fb-42ad-479a-856d-411c4096f4ff',
            departureCity: 'VAL',
            arrivalCity: 'PAL',
            distance: 276,
            duration: 130,
            price: 0.21
        },
        {
            uuid: 'a5928b7d-cad5-455d-b86c-c4351190b299',
            departureCity: 'VAL',
            arrivalCity: 'BIL',
            distance: 590,
            duration: 336,
            price: 0.24
        },
        {
            uuid: '57bf4246-813e-4fb0-97d5-c49b15c2aa02',
            departureCity: 'VAL',
            arrivalCity: 'ALI',
            distance: 166,
            duration: 70,
            price: 0.22
        },
        {
            uuid: 'ee65881b-2a2b-4089-b9c1-3f9874521d66',
            departureCity: 'VAL',
            arrivalCity: 'COR',
            distance: 537,
            duration: 242,
            price: 0.22
        },
        {
            uuid: '948e3e43-c690-4b7c-8157-b90a6b5db2b0',
            departureCity: 'SEL',
            arrivalCity: 'ZAR',
            distance: 849,
            duration: 492,
            price: 0.2
        },
        {
            uuid: '91503359-b14e-49c2-89a5-dd1571be6831',
            departureCity: 'SEL',
            arrivalCity: 'MAL',
            distance: 219,
            duration: 103,
            price: 0.24
        },
        {
            uuid: '58ac7e17-9ee4-48a9-9fbc-14623b5ebe59',
            departureCity: 'SEL',
            arrivalCity: 'MUR',
            distance: 571,
            duration: 234,
            price: 0.25
        },
        {
            uuid: '26d8d43d-81b7-44e0-81ea-4502e5c0431d',
            departureCity: 'SEL',
            arrivalCity: 'PAL',
            distance: 1056,
            duration: 581,
            price: 0.19
        },
        {
            uuid: '958f6508-e220-4aed-9669-06ad54ff1f3b',
            departureCity: 'SEL',
            arrivalCity: 'BIL',
            distance: 832,
            duration: 399,
            price: 0.22
        },
        {
            uuid: '53600f99-117d-4818-8be1-1416cdce37b2',
            departureCity: 'SEL',
            arrivalCity: 'ALI',
            distance: 654,
            duration: 353,
            price: 0.24
        },
        {
            uuid: '8ff1d8ff-b0ee-4590-879d-1373cd629fd9',
            departureCity: 'SEL',
            arrivalCity: 'COR',
            distance: 140,
            duration: 71,
            price: 0.19
        },
        {
            uuid: '667837cc-6eea-4f41-bb19-c6e2ab333176',
            departureCity: 'ZAR',
            arrivalCity: 'MAL',
            distance: 799,
            duration: 344,
            price: 0.23
        },
        {
            uuid: '40d13b07-a531-4390-94e4-9c968568078c',
            departureCity: 'ZAR',
            arrivalCity: 'MUR',
            distance: 534,
            duration: 294,
            price: 0.24
        },
        {
            uuid: '4423a10a-430d-4115-9e1d-3fb5b40118df',
            departureCity: 'ZAR',
            arrivalCity: 'PAL',
            distance: 476,
            duration: 262,
            price: 0.2
        },
        {
            uuid: '5ab46b36-9d01-49f5-8261-3f82cb23aef3',
            departureCity: 'ZAR',
            arrivalCity: 'BIL',
            distance: 324,
            duration: 146,
            price: 0.23
        },
        {
            uuid: '39d450db-e2ff-495d-9d8a-846563932ebb',
            departureCity: 'ZAR',
            arrivalCity: 'ALI',
            distance: 497,
            duration: 249,
            price: 0.19
        },
        {
            uuid: '99c07e5c-4ee1-48b7-ada9-d03d60f058fd',
            departureCity: 'ZAR',
            arrivalCity: 'COR',
            distance: 756,
            duration: 393,
            price: 0.24
        },
        {
            uuid: 'cee10f6f-5022-4ae4-9f69-eb51ea05ed2d',
            departureCity: 'MAL',
            arrivalCity: 'MUR',
            distance: 412,
            duration: 218,
            price: 0.2
        },
        {
            uuid: '8ae41299-291d-4078-9f5b-fd41f30242e8',
            departureCity: 'MAL',
            arrivalCity: 'PAL',
            distance: 897,
            duration: 475,
            price: 0.2
        },
        {
            uuid: '27d2e0d0-c50e-4133-9f43-634bdb585998',
            departureCity: 'MAL',
            arrivalCity: 'BIL',
            distance: 932,
            duration: 475,
            price: 0.28
        },
        {
            uuid: 'c9626714-031c-4ba1-b145-f946cce4aabf',
            departureCity: 'MAL',
            arrivalCity: 'ALI',
            distance: 467,
            duration: 262,
            price: 0.19
        },
        {
            uuid: '9a2a3f82-706f-4e5b-b526-8d40fba7e177',
            departureCity: 'MAL',
            arrivalCity: 'COR',
            distance: 187,
            duration: 105,
            price: 0.24
        },
        {
            uuid: 'c8141a37-71a5-45ab-a354-0ab273fa8f4e',
            departureCity: 'MUR',
            arrivalCity: 'PAL',
            distance: 432,
            duration: 220,
            price: 0.24
        },
        {
            uuid: '715ff3b4-63b5-47cd-8681-511cf866b8ae',
            departureCity: 'MUR',
            arrivalCity: 'BIL',
            distance: 789,
            duration: 426,
            price: 0.26
        },
        {
            uuid: 'e54fda98-39f8-4abc-8157-39e183bd2470',
            departureCity: 'MUR',
            arrivalCity: 'ALI',
            distance: 82,
            duration: 33,
            price: 0.27
        },
        {
            uuid: '908d609c-caf5-46c4-a5e2-4e28e24e1a19',
            departureCity: 'MUR',
            arrivalCity: 'COR',
            distance: 456,
            duration: 201,
            price: 0.19
        },
        {
            uuid: '2472f542-750c-4591-b11e-a75272c1168e',
            departureCity: 'PAL',
            arrivalCity: 'BIL',
            distance: 897,
            duration: 413,
            price: 0.23
        },
        {
            uuid: '327448ec-7e3c-4848-a2be-4036f525822a',
            departureCity: 'PAL',
            arrivalCity: 'ALI',
            distance: 432,
            duration: 238,
            price: 0.2
        },
        {
            uuid: '5e7a4585-3d91-4a08-aedb-b66d66ce9a34',
            departureCity: 'PAL',
            arrivalCity: 'COR',
            distance: 987,
            duration: 553,
            price: 0.25
        },
        {
            uuid: 'b24dc68c-6b7a-4391-a690-d27c3734bc51',
            departureCity: 'BIL',
            arrivalCity: 'ALI',
            distance: 689,
            duration: 331,
            price: 0.26
        },
        {
            uuid: '94ba1202-1ec4-4aac-b588-a816476f9e26',
            departureCity: 'BIL',
            arrivalCity: 'COR',
            distance: 789,
            duration: 402,
            price: 0.2
        },
        {
            uuid: '71e6036e-6a13-48c1-bc18-9da02816d34e',
            departureCity: 'ALI',
            arrivalCity: 'COR',
            distance: 498,
            duration: 274,
            price: 0.27
        },
        {
            uuid: '0ca740e1-c9d8-4427-8b79-d8f1db51a5f2',
            departureCity: 'MAD',
            arrivalCity: 'VLL',
            distance: 213,
            duration: 92,
            price: 0.22
        },
        {
            uuid: 'b8d612c8-6956-4401-bec0-7f506f1a4b72',
            departureCity: 'MAD',
            arrivalCity: 'VIG',
            distance: 592,
            duration: 290,
            price: 0.22
        },
        {
            uuid: '006a42f2-0584-4a12-9c61-d9d484ddd81f',
            departureCity: 'MAD',
            arrivalCity: 'GIJ',
            distance: 451,
            duration: 216,
            price: 0.24
        },
        {
            uuid: 'c87168d7-b5f5-45b1-a311-54280d8cdbd1',
            departureCity: 'BAR',
            arrivalCity: 'VLL',
            distance: 789,
            duration: 473,
            price: 0.19
        },
        {
            uuid: '4f4d0bf2-add6-4983-a729-ba1a2c738d4d',
            departureCity: 'BAR',
            arrivalCity: 'VIG',
            distance: 1098,
            duration: 494,
            price: 0.24
        },
        {
            uuid: '06327515-9832-418a-8a55-1fea7669bf7e',
            departureCity: 'BAR',
            arrivalCity: 'GIJ',
            distance: 897,
            duration: 386,
            price: 0.27
        },
        {
            uuid: '2c29e376-96c8-4d56-97cf-fa7e13db1a46',
            departureCity: 'VAL',
            arrivalCity: 'VLL',
            distance: 567,
            duration: 238,
            price: 0.21
        },
        {
            uuid: 'e5914238-d2a1-4fa5-857f-fd768becada4',
            departureCity: 'VAL',
            arrivalCity: 'VIG',
            distance: 876,
            duration: 464,
            price: 0.19
        },
        {
            uuid: 'f454d2ac-ff74-4dd9-8ecb-e1b2358b938b',
            departureCity: 'VAL',
            arrivalCity: 'GIJ',
            distance: 789,
            duration: 402,
            price: 0.19
        },
        {
            uuid: '7b87d26b-7c1d-442e-95d4-433d8ed79fe4',
            departureCity: 'SEL',
            arrivalCity: 'VLL',
            distance: 654,
            duration: 281,
            price: 0.28
        },
        {
            uuid: 'ee6fa12e-4acb-4fae-b22f-f22c74269ee8',
            departureCity: 'SEL',
            arrivalCity: 'VIG',
            distance: 789,
            duration: 434,
            price: 0.24
        },
        {
            uuid: '12696ea4-9c28-459c-b3d3-fe00ddd7acf3',
            departureCity: 'SEL',
            arrivalCity: 'GIJ',
            distance: 876,
            duration: 491,
            price: 0.27
        },
        {
            uuid: '956e9cec-acab-45cc-bc1f-96cb9d000ef9',
            departureCity: 'ZAR',
            arrivalCity: 'VLL',
            distance: 432,
            duration: 203,
            price: 0.22
        },
        {
            uuid: '0b3a974f-2800-4bc7-9c97-48a7b3d9ec78',
            departureCity: 'ZAR',
            arrivalCity: 'VIG',
            distance: 789,
            duration: 450,
            price: 0.28
        },
        {
            uuid: '1770a1a6-bcc0-412c-a33b-465ce5b4f193',
            departureCity: 'ZAR',
            arrivalCity: 'GIJ',
            distance: 654,
            duration: 281,
            price: 0.27
        },
        {
            uuid: '9a805f74-ceb4-4059-abb7-83b7bbb5aaca',
            departureCity: 'MAL',
            arrivalCity: 'VLL',
            distance: 765,
            duration: 428,
            price: 0.25
        },
        {
            uuid: '2462c904-2b77-4e42-a341-25b26953487f',
            departureCity: 'MAL',
            arrivalCity: 'VIG',
            distance: 987,
            duration: 523,
            price: 0.21
        },
        {
            uuid: 'f6f7c113-1a64-41ad-a5df-cf06e997b7ef',
            departureCity: 'MAL',
            arrivalCity: 'GIJ',
            distance: 876,
            duration: 420,
            price: 0.27
        },
        {
            uuid: '55c81848-1c58-47a5-943d-c77dd7143eab',
            departureCity: 'MUR',
            arrivalCity: 'VLL',
            distance: 654,
            duration: 327,
            price: 0.27
        },
        {
            uuid: '566c2cb8-f6f2-4c8f-8f5d-f6beac0d791f',
            departureCity: 'MUR',
            arrivalCity: 'VIG',
            distance: 987,
            duration: 484,
            price: 0.26
        },
        {
            uuid: '20556c02-6bf5-4c69-91aa-c586124528d2',
            departureCity: 'MUR',
            arrivalCity: 'GIJ',
            distance: 876,
            duration: 456,
            price: 0.21
        },
        {
            uuid: '0399fbfd-ac30-4cda-bf08-1038950113cb',
            departureCity: 'PAL',
            arrivalCity: 'VLL',
            distance: 897,
            duration: 386,
            price: 0.21
        },
        {
            uuid: '09655279-7846-473e-b1be-a15766d36548',
            departureCity: 'PAL',
            arrivalCity: 'VIG',
            distance: 1234,
            duration: 580,
            price: 0.25
        },
        {
            uuid: '078bd8eb-dccb-4abc-b5e3-34544eade007',
            departureCity: 'PAL',
            arrivalCity: 'GIJ',
            distance: 1123,
            duration: 606,
            price: 0.25
        },
        {
            uuid: '63f06d1f-11c0-4bca-837e-8fff6f13c8ca',
            departureCity: 'BIL',
            arrivalCity: 'VLL',
            distance: 280,
            duration: 151,
            price: 0.25
        },
        {
            uuid: 'b24e6697-c1e5-484c-8803-948d74aba852',
            departureCity: 'BIL',
            arrivalCity: 'VIG',
            distance: 567,
            duration: 255,
            price: 0.22
        },
        {
            uuid: 'b762282a-23fa-4b9d-bd4f-50de873fe458',
            departureCity: 'BIL',
            arrivalCity: 'GIJ',
            distance: 304,
            duration: 161,
            price: 0.2
        },
        {
            uuid: 'e1f034d0-d407-47d6-ac10-6f89dd70c6a7',
            departureCity: 'ALI',
            arrivalCity: 'VLL',
            distance: 654,
            duration: 314,
            price: 0.25
        },
        {
            uuid: '43acab2c-4524-4b93-843f-7bd62fbccd38',
            departureCity: 'ALI',
            arrivalCity: 'VIG',
            distance: 987,
            duration: 523,
            price: 0.28
        },
        {
            uuid: '9c8cbf41-58b9-419f-82f8-725cf9cffe17',
            departureCity: 'ALI',
            arrivalCity: 'GIJ',
            distance: 876,
            duration: 438,
            price: 0.19
        },
        {
            uuid: '615c8149-b444-4dcd-85fc-c7b9569920d6',
            departureCity: 'COR',
            arrivalCity: 'VLL',
            distance: 567,
            duration: 323,
            price: 0.2
        },
        {
            uuid: 'df2f9b05-eba8-462a-a590-e1798928b26b',
            departureCity: 'COR',
            arrivalCity: 'VIG',
            distance: 876,
            duration: 420,
            price: 0.24
        },
        {
            uuid: '83c35eae-9089-43f0-adac-e3789afc1c68',
            departureCity: 'COR',
            arrivalCity: 'GIJ',
            distance: 789,
            duration: 434,
            price: 0.25
        },
        {
            uuid: '0849dea2-8566-4ad2-835a-92174d2ea148',
            departureCity: 'VLL',
            arrivalCity: 'VIG',
            distance: 456,
            duration: 242,
            price: 0.24
        },
        {
            uuid: '4c95e04d-2174-417c-86cf-44d1b73567b8',
            departureCity: 'VLL',
            arrivalCity: 'GIJ',
            distance: 287,
            duration: 152,
            price: 0.27
        },
        {
            uuid: '8949a067-3860-47e2-a3ff-0a1b7d236be4',
            departureCity: 'VIG',
            arrivalCity: 'GIJ',
            distance: 382,
            duration: 222,
            price: 0.22
        },
    ];


    async retrieveCities() {
        // if (TravelsRepositoryMock._isThereTechnicalProblem()) {
        //     throw 'Cannot retrieve cities';
        // }

        return TravelsRepositoryMock.#cities.map(({ uuid, name }) => ({ uuid, name }));
    }


    async retrieveCityByUuid(uuid) {
        return TravelsRepositoryMock.#cities.find(city => city.uuid === uuid)
    }


    static _isThereTechnicalProblem() {
        return Math.random() < 0.5 ? true : false;
    }


    async retrieveRoutes() {
        return TravelsRepositoryMock.#routes;
    }


    async retrieveRouteByUuid(uuid) {
        return TravelsRepositoryMock.#routes.find(route => route.uuid === uuid)
    }


    async retrieveRoutesByDepartureCity(cityUuid) {
        return TravelsRepositoryMock.#routes.filter(route => route.departureCity === cityUuid)
    }


    async retrieveArrivalCitiesByDepartureCity(cityUuid) {
        // const routes = await this.retrieveRoutesByDepartureCity(cityUuid);
        // const arrivalCities = routes
        const arrivalCities = TravelsRepositoryMock.#routes
            .filter(route => route.departureCity === cityUuid)
            .map(route => route.arrivalCity)
            .reduce(
                (result, route) => {
                    if (!result.includes(route))
                        result.push(route);
                    return result;
                },
                []
            );
        return arrivalCities;

        // function createRouteNumber(route) {
        //     return route.departureCity 
        //         + route.distance.toString().charAt(1) 
        //         + route.price.toString().charAt(2) 
        //         + route.duration.toString().charAt(1) 
        //         + route.arrivalCity;
        // }
    }


    async retrieveTravelByDepartureCityAndArrivalCity(departureCityUuid, arrivalCityUuid) {
        const isDepartureCity = route => route.departureCity === departureCityUuid;
        const isArrivalCity = route => route.arrivalCity === arrivalCityUuid;

        return (TravelsRepositoryMock.#routes
            .filter(isDepartureCity)
            .filter(isArrivalCity))[0];
    }
}


// console.log(await (new TravelsRepositoryMock).retrieveCities());
// console.log(await (new TravelsRepositoryMock).retrieveCityByUuid('COR'));

console.log(await (new TravelsRepositoryMock).retrieveRoutes());
// console.log(await (new TravelsRepositoryMock).retrieveRouteByUuid('318d0d78-29cb-4107-80ec-ae9e1c930d92'));

// console.log(await (new TravelsRepositoryMock).retrieveRoutesByDepartureCity('MAD'));
// console.log(await (new TravelsRepositoryMock).retrieveRoutesByDepartureCityAndArrivalCity('MAD', 'GIJ'));


// const routes = await (new TravelsRepositoryMock).retrieveRoutes();
// const routesAux = routes.map(route => ({ uuid: crypto.randomUUID(), ...route }));
// console.log(routesAux);

