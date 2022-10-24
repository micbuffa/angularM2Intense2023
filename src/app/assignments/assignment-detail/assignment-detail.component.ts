import { Component, Input, OnInit } from '@angular/core';
import { AssignmentsService } from 'src/app/shared/assignments.service';
import { Assignment } from '../assignment.model';

@Component({
  selector: 'app-assignment-detail',
  templateUrl: './assignment-detail.component.html',
  styleUrls: ['./assignment-detail.component.css'],
})
export class AssignmentDetailComponent implements OnInit {
  @Input() assignmentTransmis!: Assignment|undefined ;

  constructor(private assignmentsService: AssignmentsService) {}

  ngOnInit(): void {}

  onAssignmentRendu() {
    if (!this.assignmentTransmis) return;
    this.assignmentTransmis.rendu = true;
    this.assignmentsService
      .updateAssignment(this.assignmentTransmis)
      .subscribe((message) => console.log(message));
  }

  onDeleteAssignment() {
    if (!this.assignmentTransmis) return;
    this.assignmentsService
      .deleteAssignment(this.assignmentTransmis)
      .subscribe((message) => {
        console.log(message);
        this.assignmentTransmis = undefined;
      });
  }
}
