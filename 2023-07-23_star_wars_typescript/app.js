import StarWarsService from './StarWarsService.js'


const service = new StarWarsService();
service.groupByGender$(service.retrievePeople$()).subscribe(console.log)
// service.retrievePerson$('https://swapi.dev/api/people/1/').subscribe(console.log)
// service.retrievePeople$().subscribe(console.log)
// service.retrievePlanets$().subscribe(console.log)
