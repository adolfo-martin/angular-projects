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
            uuid: 'MAD57BAR26',
            departureCity: 'MAD',
            arrivalCity: 'BAR',
            distance: 621,
            duration: 279,
            price: 0.19
        },
        {
            uuid: 'MAD77VAL07',
            departureCity: 'MAD',
            arrivalCity: 'VAL',
            distance: 357,
            duration: 143,
            price: 0.27
        },
        {
            uuid: 'MAD24SEL28',
            departureCity: 'MAD',
            arrivalCity: 'SEL',
            distance: 538,
            duration: 269,
            price: 0.25
        },
        {
            uuid: 'MAD10ZAR60',
            departureCity: 'MAD',
            arrivalCity: 'ZAR',
            distance: 325,
            duration: 133,
            price: 0.27
        },
        {
            uuid: 'MAD04MAL41',
            departureCity: 'MAD',
            arrivalCity: 'MAL',
            distance: 544,
            duration: 305,
            price: 0.25
        },
        {
            uuid: 'MAD00MUR75',
            departureCity: 'MAD',
            arrivalCity: 'MUR',
            distance: 401,
            duration: 225,
            price: 0.18
        },
        {
            uuid: 'MAD67PAL83',
            departureCity: 'MAD',
            arrivalCity: 'PAL',
            distance: 850,
            duration: 417,
            price: 0.25
        },
        {
            uuid: 'MAD85BIL56',
            departureCity: 'MAD',
            arrivalCity: 'BIL',
            distance: 395,
            duration: 198,
            price: 0.24
        },
        {
            uuid: 'MAD30ALI89',
            departureCity: 'MAD',
            arrivalCity: 'ALI',
            distance: 422,
            duration: 241,
            price: 0.26
        },
        {
            uuid: 'MAD54COR15',
            departureCity: 'MAD',
            arrivalCity: 'COR',
            distance: 394,
            duration: 232,
            price: 0.26
        },
        {
            uuid: 'BAR09VAL87',
            departureCity: 'BAR',
            arrivalCity: 'VAL',
            distance: 349,
            duration: 175,
            price: 0.22
        },
        {
            uuid: 'BAR65SEL36',
            departureCity: 'BAR',
            arrivalCity: 'SEL',
            distance: 997,
            duration: 568,
            price: 0.27
        },
        {
            uuid: 'BAR83ZAR94',
            departureCity: 'BAR',
            arrivalCity: 'ZAR',
            distance: 296,
            duration: 154,
            price: 0.26
        },
        {
            uuid: 'BAR16MAL73',
            departureCity: 'BAR',
            arrivalCity: 'MAL',
            distance: 867,
            duration: 442,
            price: 0.19
        },
        {
            uuid: 'BAR84MUR71',
            departureCity: 'BAR',
            arrivalCity: 'MUR',
            distance: 590,
            duration: 336,
            price: 0.23
        },
        {
            uuid: 'BAR93PAL29',
            departureCity: 'BAR',
            arrivalCity: 'PAL',
            distance: 208,
            duration: 119,
            price: 0.27
        },
        {
            uuid: 'BAR12BIL04',
            departureCity: 'BAR',
            arrivalCity: 'BIL',
            distance: 620,
            duration: 273,
            price: 0.27
        },
        {
            uuid: 'BAR20ALI63',
            departureCity: 'BAR',
            arrivalCity: 'ALI',
            distance: 515,
            duration: 283,
            price: 0.28
        },
        {
            uuid: 'BAR70COR35',
            departureCity: 'BAR',
            arrivalCity: 'COR',
            distance: 908,
            duration: 490,
            price: 0.21
        },
        {
            uuid: 'VAL74SEL37',
            departureCity: 'VAL',
            arrivalCity: 'SEL',
            distance: 697,
            duration: 307,
            price: 0.24
        },
        {
            uuid: 'VAL49ZAR12',
            departureCity: 'VAL',
            arrivalCity: 'ZAR',
            distance: 311,
            duration: 165,
            price: 0.22
        },
        {
            uuid: 'VAL92MAL72',
            departureCity: 'VAL',
            arrivalCity: 'MAL',
            distance: 498,
            duration: 269,
            price: 0.19
        },
        {
            uuid: 'VAL73MUR90',
            departureCity: 'VAL',
            arrivalCity: 'MUR',
            distance: 241,
            duration: 142,
            price: 0.2
        },
        {
            uuid: 'VAL86PAL63',
            departureCity: 'VAL',
            arrivalCity: 'PAL',
            distance: 276,
            duration: 130,
            price: 0.21
        },
        {
            uuid: 'VAL94BIL26',
            departureCity: 'VAL',
            arrivalCity: 'BIL',
            distance: 590,
            duration: 336,
            price: 0.24
        },
        {
            uuid: 'VAL65ALI52',
            departureCity: 'VAL',
            arrivalCity: 'ALI',
            distance: 166,
            duration: 70,
            price: 0.22
        },
        {
            uuid: 'VAL14COR90',
            departureCity: 'VAL',
            arrivalCity: 'COR',
            distance: 537,
            duration: 242,
            price: 0.22
        },
        {
            uuid: 'SEL89ZAR68',
            departureCity: 'SEL',
            arrivalCity: 'ZAR',
            distance: 849,
            duration: 492,
            price: 0.2
        },
        {
            uuid: 'SEL83MAL65',
            departureCity: 'SEL',
            arrivalCity: 'MAL',
            distance: 219,
            duration: 103,
            price: 0.24
        },
        {
            uuid: 'SEL34MUR99',
            departureCity: 'SEL',
            arrivalCity: 'MUR',
            distance: 571,
            duration: 234,
            price: 0.25
        },
        {
            uuid: 'SEL04PAL10',
            departureCity: 'SEL',
            arrivalCity: 'PAL',
            distance: 1056,
            duration: 581,
            price: 0.19
        },
        {
            uuid: 'SEL29BIL26',
            departureCity: 'SEL',
            arrivalCity: 'BIL',
            distance: 832,
            duration: 399,
            price: 0.22
        },
        {
            uuid: 'SEL15ALI22',
            departureCity: 'SEL',
            arrivalCity: 'ALI',
            distance: 654,
            duration: 353,
            price: 0.24
        },
        {
            uuid: 'SEL59COR08',
            departureCity: 'SEL',
            arrivalCity: 'COR',
            distance: 140,
            duration: 71,
            price: 0.19
        },
        {
            uuid: 'ZAR19MAL31',
            departureCity: 'ZAR',
            arrivalCity: 'MAL',
            distance: 799,
            duration: 344,
            price: 0.23
        },
        {
            uuid: 'ZAR23MUR46',
            departureCity: 'ZAR',
            arrivalCity: 'MUR',
            distance: 534,
            duration: 294,
            price: 0.24
        },
        {
            uuid: 'ZAR28PAL12',
            departureCity: 'ZAR',
            arrivalCity: 'PAL',
            distance: 476,
            duration: 262,
            price: 0.2
        },
        {
            uuid: 'ZAR08BIL48',
            departureCity: 'ZAR',
            arrivalCity: 'BIL',
            distance: 324,
            duration: 146,
            price: 0.23
        },
        {
            uuid: 'ZAR04ALI81',
            departureCity: 'ZAR',
            arrivalCity: 'ALI',
            distance: 497,
            duration: 249,
            price: 0.19
        },
        {
            uuid: 'ZAR19COR13',
            departureCity: 'ZAR',
            arrivalCity: 'COR',
            distance: 756,
            duration: 393,
            price: 0.24
        },
        {
            uuid: 'MAL69MUR97',
            departureCity: 'MAL',
            arrivalCity: 'MUR',
            distance: 412,
            duration: 218,
            price: 0.2
        },
        {
            uuid: 'MAL38PAL88',
            departureCity: 'MAL',
            arrivalCity: 'PAL',
            distance: 897,
            duration: 475,
            price: 0.2
        },
        {
            uuid: 'MAL20BIL86',
            departureCity: 'MAL',
            arrivalCity: 'BIL',
            distance: 932,
            duration: 475,
            price: 0.28
        },
        {
            uuid: 'MAL16ALI03',
            departureCity: 'MAL',
            arrivalCity: 'ALI',
            distance: 467,
            duration: 262,
            price: 0.19
        },
        {
            uuid: 'MAL96COR88',
            departureCity: 'MAL',
            arrivalCity: 'COR',
            distance: 187,
            duration: 105,
            price: 0.24
        },
        {
            uuid: 'MUR57PAL05',
            departureCity: 'MUR',
            arrivalCity: 'PAL',
            distance: 432,
            duration: 220,
            price: 0.24
        },
        {
            uuid: 'MUR06BIL78',
            departureCity: 'MUR',
            arrivalCity: 'BIL',
            distance: 789,
            duration: 426,
            price: 0.26
        },
        {
            uuid: 'MUR78ALI98',
            departureCity: 'MUR',
            arrivalCity: 'ALI',
            distance: 82,
            duration: 33,
            price: 0.27
        },
        {
            uuid: 'MUR17COR15',
            departureCity: 'MUR',
            arrivalCity: 'COR',
            distance: 456,
            duration: 201,
            price: 0.19
        },
        {
            uuid: 'PAL52BIL37',
            departureCity: 'PAL',
            arrivalCity: 'BIL',
            distance: 897,
            duration: 413,
            price: 0.23
        },
        {
            uuid: 'PAL03ALI17',
            departureCity: 'PAL',
            arrivalCity: 'ALI',
            distance: 432,
            duration: 238,
            price: 0.2
        },
        {
            uuid: 'PAL92COR85',
            departureCity: 'PAL',
            arrivalCity: 'COR',
            distance: 987,
            duration: 553,
            price: 0.25
        },
        {
            uuid: 'BIL01ALI14',
            departureCity: 'BIL',
            arrivalCity: 'ALI',
            distance: 689,
            duration: 331,
            price: 0.26
        },
        {
            uuid: 'BIL83COR74',
            departureCity: 'BIL',
            arrivalCity: 'COR',
            distance: 789,
            duration: 402,
            price: 0.2
        },
        {
            uuid: 'ALI65COR53',
            departureCity: 'ALI',
            arrivalCity: 'COR',
            distance: 498,
            duration: 274,
            price: 0.27
        },
        {
            uuid: 'MAD64VLL57',
            departureCity: 'MAD',
            arrivalCity: 'VLL',
            distance: 213,
            duration: 92,
            price: 0.22
        },
        {
            uuid: 'MAD67VIG49',
            departureCity: 'MAD',
            arrivalCity: 'VIG',
            distance: 592,
            duration: 290,
            price: 0.22
        },
        {
            uuid: 'MAD00GIJ85',
            departureCity: 'MAD',
            arrivalCity: 'GIJ',
            distance: 451,
            duration: 216,
            price: 0.24
        },
        {
            uuid: 'BAR06VLL98',
            departureCity: 'BAR',
            arrivalCity: 'VLL',
            distance: 789,
            duration: 473,
            price: 0.19
        },
        {
            uuid: 'BAR12VIG35',
            departureCity: 'BAR',
            arrivalCity: 'VIG',
            distance: 1098,
            duration: 494,
            price: 0.24
        },
        {
            uuid: 'BAR15GIJ15',
            departureCity: 'BAR',
            arrivalCity: 'GIJ',
            distance: 897,
            duration: 386,
            price: 0.27
        },
        {
            uuid: 'VAL89VLL33',
            departureCity: 'VAL',
            arrivalCity: 'VLL',
            distance: 567,
            duration: 238,
            price: 0.21
        },
        {
            uuid: 'VAL20VIG28',
            departureCity: 'VAL',
            arrivalCity: 'VIG',
            distance: 876,
            duration: 464,
            price: 0.19
        },
        {
            uuid: 'VAL69GIJ37',
            departureCity: 'VAL',
            arrivalCity: 'GIJ',
            distance: 789,
            duration: 402,
            price: 0.19
        },
        {
            uuid: 'SEL83VLL34',
            departureCity: 'SEL',
            arrivalCity: 'VLL',
            distance: 654,
            duration: 281,
            price: 0.28
        },
        {
            uuid: 'SEL38VIG81',
            departureCity: 'SEL',
            arrivalCity: 'VIG',
            distance: 789,
            duration: 434,
            price: 0.24
        },
        {
            uuid: 'SEL45GIJ62',
            departureCity: 'SEL',
            arrivalCity: 'GIJ',
            distance: 876,
            duration: 491,
            price: 0.27
        },
        {
            uuid: 'ZAR65VLL29',
            departureCity: 'ZAR',
            arrivalCity: 'VLL',
            distance: 432,
            duration: 203,
            price: 0.22
        },
        {
            uuid: 'ZAR75VIG76',
            departureCity: 'ZAR',
            arrivalCity: 'VIG',
            distance: 789,
            duration: 450,
            price: 0.28
        },
        {
            uuid: 'ZAR04GIJ80',
            departureCity: 'ZAR',
            arrivalCity: 'GIJ',
            distance: 654,
            duration: 281,
            price: 0.27
        },
        {
            uuid: 'MAL60VLL36',
            departureCity: 'MAL',
            arrivalCity: 'VLL',
            distance: 765,
            duration: 428,
            price: 0.25
        },
        {
            uuid: 'MAL41VIG98',
            departureCity: 'MAL',
            arrivalCity: 'VIG',
            distance: 987,
            duration: 523,
            price: 0.21
        },
        {
            uuid: 'MAL01GIJ80',
            departureCity: 'MAL',
            arrivalCity: 'GIJ',
            distance: 876,
            duration: 420,
            price: 0.27
        },
        {
            uuid: 'MUR37VLL76',
            departureCity: 'MUR',
            arrivalCity: 'VLL',
            distance: 654,
            duration: 327,
            price: 0.27
        },
        {
            uuid: 'MUR13VIG36',
            departureCity: 'MUR',
            arrivalCity: 'VIG',
            distance: 987,
            duration: 484,
            price: 0.26
        },
        {
            uuid: 'MUR61GIJ32',
            departureCity: 'MUR',
            arrivalCity: 'GIJ',
            distance: 876,
            duration: 456,
            price: 0.21
        },
        {
            uuid: 'PAL83VLL65',
            departureCity: 'PAL',
            arrivalCity: 'VLL',
            distance: 897,
            duration: 386,
            price: 0.21
        },
        {
            uuid: 'PAL41VIG92',
            departureCity: 'PAL',
            arrivalCity: 'VIG',
            distance: 1234,
            duration: 580,
            price: 0.25
        },
        {
            uuid: 'PAL25GIJ79',
            departureCity: 'PAL',
            arrivalCity: 'GIJ',
            distance: 1123,
            duration: 606,
            price: 0.25
        },
        {
            uuid: 'BIL24VLL22',
            departureCity: 'BIL',
            arrivalCity: 'VLL',
            distance: 280,
            duration: 151,
            price: 0.25
        },
        {
            uuid: 'BIL48VIG69',
            departureCity: 'BIL',
            arrivalCity: 'VIG',
            distance: 567,
            duration: 255,
            price: 0.22
        },
        {
            uuid: 'BIL75GIJ75',
            departureCity: 'BIL',
            arrivalCity: 'GIJ',
            distance: 304,
            duration: 161,
            price: 0.2
        },
        {
            uuid: 'ALI93VLL88',
            departureCity: 'ALI',
            arrivalCity: 'VLL',
            distance: 654,
            duration: 314,
            price: 0.25
        },
        {
            uuid: 'ALI50VIG06',
            departureCity: 'ALI',
            arrivalCity: 'VIG',
            distance: 987,
            duration: 523,
            price: 0.28
        },
        {
            uuid: 'ALI94GIJ81',
            departureCity: 'ALI',
            arrivalCity: 'GIJ',
            distance: 876,
            duration: 438,
            price: 0.19
        },
        {
            uuid: 'COR15VLL33',
            departureCity: 'COR',
            arrivalCity: 'VLL',
            distance: 567,
            duration: 323,
            price: 0.2
        },
        {
            uuid: 'COR42VIG13',
            departureCity: 'COR',
            arrivalCity: 'VIG',
            distance: 876,
            duration: 420,
            price: 0.24
        },
        {
            uuid: 'COR57GIJ48',
            departureCity: 'COR',
            arrivalCity: 'GIJ',
            distance: 789,
            duration: 434,
            price: 0.25
        },
        {
            uuid: 'VLL81VIG95',
            departureCity: 'VLL',
            arrivalCity: 'VIG',
            distance: 456,
            duration: 242,
            price: 0.24
        },
        {
            uuid: 'VLL31GIJ67',
            departureCity: 'VLL',
            arrivalCity: 'GIJ',
            distance: 287,
            duration: 152,
            price: 0.27
        },
        {
            uuid: 'VIG17GIJ30',
            departureCity: 'VIG',
            arrivalCity: 'GIJ',
            distance: 382,
            duration: 222,
            price: 0.22
        }
    ];


    async retrieveCities() {
        if (TravelsRepositoryMock._isThereTechnicalProblem()) {
            throw 'Cannot retrieve cities';
        }

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

// const getRandomDigit = () => Math.floor(Math.random() * 10).toString();
// console.log((await (new TravelsRepositoryMock).retrieveRoutes())
//     .map(route => ({ ...route, uuid: route.departureCity + getRandomDigit() + getRandomDigit() + route.arrivalCity + getRandomDigit() + getRandomDigit() }))
// );

// console.log(await (new TravelsRepositoryMock).retrieveRouteByUuid('318d0d78-29cb-4107-80ec-ae9e1c930d92'));

// console.log(await (new TravelsRepositoryMock).retrieveRoutesByDepartureCity('MAD'));
// console.log(await (new TravelsRepositoryMock).retrieveRoutesByDepartureCityAndArrivalCity('MAD', 'GIJ'));


// const routes = await (new TravelsRepositoryMock).retrieveRoutes();
// const routesAux = routes.map(route => ({ uuid: crypto.randomUUID(), ...route }));
// console.log(routesAux);

