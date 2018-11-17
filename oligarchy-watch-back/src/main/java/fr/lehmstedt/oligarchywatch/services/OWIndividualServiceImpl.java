package fr.lehmstedt.oligarchywatch.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import fr.lehmstedt.oligarchywatch.entities.OWIndividual;
import fr.lehmstedt.oligarchywatch.repositories.OWIndividualRepository;

@Service
public class OWIndividualServiceImpl implements OWIndividualService {
	
	@Autowired
	OWIndividualRepository individualRepository;

	public List<OWIndividual> getAll() {
		
		return individualRepository.findAll();
	}

}
