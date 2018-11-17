package fr.lehmstedt.oligarchywatch.entities;

import javax.persistence.Entity;

@Entity
public class OWIndividual extends OWNode {
	
	private String surname;

	public String getSurname() {
		return surname;
	}

	public void setSurname(String surname) {
		this.surname = surname;
	}
	
	

}
