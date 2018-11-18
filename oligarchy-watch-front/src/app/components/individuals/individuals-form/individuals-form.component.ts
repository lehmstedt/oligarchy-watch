import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { OWIndividual } from 'src/app/entities/OWIndividual';
import { IndividualService } from 'src/app/services/individual.service';
import { MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'ow-individuals-form',
  templateUrl: './individuals-form.component.html',
  styleUrls: ['./individuals-form.component.css']
})
export class IndividualsFormComponent implements OnInit {

  constructor(private fb: FormBuilder, 
  private individualService: IndividualService,
  private dialogRef: MatDialogRef<IndividualsFormComponent>,
  private snackBar: MatSnackBar) { }

  individualsForm: FormGroup;
  individual: OWIndividual;
  

  ngOnInit() {

    this.individualsForm = this.fb.group({
      name: ['', Validators.required],
      surname: ['', Validators.required],
      startDate: ['', Validators.required],
      endDate: ['']
    });

    this.individual = new OWIndividual();
    this.onChanges();
  }

  onChanges(): void {
    this.individualsForm.valueChanges.subscribe(val =>{
      this.individual.name = val.name;
      this.individual.surname = val.surname;
      this.individual.startDate = val.startDate;
      this.individual.stopDate = val.stopDate;
    });
  }

  onSubmit(): void {

    this.individualService.add(this.individual).subscribe(individual => {

      let snackBarRef = this.snackBar.open(`L'individu ${individual.surname} ${individual.name} a bien été ajouté`,
      '',
      {duration: 3000});

      this.dialogRef.close(individual);
    });

  }

}
