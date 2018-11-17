package fr.lehmstedt.oligarchywatch.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import fr.lehmstedt.oligarchywatch.entities.OWIndividual;

public interface OWIndividualRepository extends JpaRepository<OWIndividual, Long> {

}
