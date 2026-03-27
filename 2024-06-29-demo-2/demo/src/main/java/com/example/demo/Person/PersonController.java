package com.example.demo.Person;

import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class PersonController {
    
    @GetMapping("api/v1.0/people")
	public List<Person> getPeople() {
		return List.of(
			new Person("Adolfo", "Martin", 51),
			new Person("María", "Cánovas", 42)
		);
	}
	
}
