import StarWarsService from "./StarWarsService.js";


const service = new StarWarsService();
service.retrievePeopleGroupByGender$().subscribe(console.log);