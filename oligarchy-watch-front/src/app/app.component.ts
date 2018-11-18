import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  navLinks = [
    {path: 'individuals', label: "Individus"},
    {path: 'organizations', label: "Organisations"},
    {path: 'links', label: "Liens"}
  ]


}
