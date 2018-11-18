package fr.lehmstedt.oligarchywatch.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import fr.lehmstedt.oligarchywatch.entities.OWIndividual;
import fr.lehmstedt.oligarchywatch.services.OWIndividualService;

@RestController
@RequestMapping("/individuals")
public class OWIndividualController {
	
	@Autowired
	OWIndividualService individualService;
	
	@GetMapping("")
	public List<OWIndividual> getAll(){
		return individualService.getAll();
	}
	
	@PostMapping("")
	public OWIndividual add(@RequestBody OWIndividual individual) {
		return individualService.add(individual);
	}

}
