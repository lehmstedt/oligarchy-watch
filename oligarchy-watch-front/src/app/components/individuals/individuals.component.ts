import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { IndividualsFormComponent } from './individuals-form/individuals-form.component';
import { OWIndividual } from 'src/app/entities/OWIndividual';
import { IndividualService } from 'src/app/services/individual.service';

@Component({
  selector: 'ow-individuals',
  templateUrl: './individuals.component.html',
  styleUrls: ['./individuals.component.css']
})
export class IndividualsComponent implements OnInit {

  individuals : OWIndividual[];

  constructor(private dialog: MatDialog, private individualService: IndividualService) { }

  ngOnInit() {

    this.getIndividuals();
  
  }

  onAddIndividual(): void {
    let dialogRef = this.dialog.open(IndividualsFormComponent, {});

    dialogRef.afterClosed().subscribe(individual =>{

      if(individual){
        this.individuals.push(individual);
      }
      
    });
  }

  getIndividuals(): void {
    this.individualService.getAll().subscribe(individuals => {

      this.individuals = individuals;
    });
  }

}
