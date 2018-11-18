package fr.lehmstedt.oligarchywatch.services;

import java.util.List;

import org.springframework.stereotype.Service;

import fr.lehmstedt.oligarchywatch.entities.OWIndividual;

@Service
public interface OWIndividualService {
	
	public List<OWIndividual> getAll();
	public OWIndividual add(OWIndividual individual);

}
