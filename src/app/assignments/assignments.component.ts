import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-assignments',
  templateUrl: './assignments.component.html',
  styleUrls: ['./assignments.component.css']
})
export class AssignmentsComponent implements OnInit {
  titre="Liste des devoirs";
  assignments = [
    {
      nom: 'Devoir Angular de Mr Buffa',
      dateDeRendu: '2022-11-30',
      rendu:false
    },
    {
      nom: 'Devoir WebComponents de Mr Buffa',
      dateDeRendu: '2022-1O-20',
      rendu:false
    },
    {
      nom: 'Devoir BD de Mr Mopolo',
      dateDeRendu: '2022-09-30',
      rendu:true
    }
  ]

  constructor() { }

  ngOnInit(): void {
    console.log("appelé à l'initialisation du composant");
  }

}
