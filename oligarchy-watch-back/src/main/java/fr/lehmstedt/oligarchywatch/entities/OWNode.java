package fr.lehmstedt.oligarchywatch.entities;

import javax.persistence.Entity;
import javax.persistence.ManyToOne;

@Entity
public abstract class OWNode extends OWEntity {
	
	@ManyToOne
	private OWLink owningLink;

	public OWLink getOwningLink() {
		return owningLink;
	}

	public void setOwningLink(OWLink owningLink) {
		this.owningLink = owningLink;
	}
	
	

}
