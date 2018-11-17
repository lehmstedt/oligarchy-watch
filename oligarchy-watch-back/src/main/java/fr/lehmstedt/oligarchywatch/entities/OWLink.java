package fr.lehmstedt.oligarchywatch.entities;

import java.util.List;

import javax.persistence.Entity;
import javax.persistence.OneToMany;

@Entity
public class OWLink extends OWEntity {
	
	@OneToMany
	private List<OWNode> involvedNodes;

	public List<OWNode> getInvolvedNodes() {
		return involvedNodes;
	}

	public void setInvolvedNodes(List<OWNode> involvedNodes) {
		this.involvedNodes = involvedNodes;
	}
	
	

}
