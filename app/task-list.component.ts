import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Task } from './task.model';

@Component({
  selector: 'task-list',
  template: `
    <div *ngFor="let currentTask of childTaskList">
      <h3>{{ currentTask.description }}</h3>
      <button (click)="editButtonHasBeenClicked(currentTask)">Edit</button>
    </div>
  `
})

export class TaskListComponent {
  @Input() childTaskList: Task[];
  @Output() clickSender = new EventEmitter();
  editButtonHasBeenClicked(taskToEdit: Task) {
    this.clickSender.emit(taskToEdit);
  }
}

// export class TaskListComponent {
//   public tasks: Task[] = [
//       new Task("Create To-Do List app.", 0),
//       new Task("Learn Kung Fu.", 1),
//       new Task("Rewatch all the Lord of the Rings movies.", 2),
//       new Task("Do the laundry.", 3)
//   ];
// }
