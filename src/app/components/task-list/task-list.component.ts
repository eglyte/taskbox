import { Component } from '@angular/core';
import { Select, Store } from '@ngxs/store';

import { Observable } from 'rxjs';

import { TasksState, ArchiveTask, PinTask } from '../../state/task.state';
import { Task } from '../../models/task.model';

@Component({
  selector: 'app-task-list',
  template: `
    <app-pure-task-list
      [tasks]="tasks$ | async"
      (onArchiveTask)="archiveTask($event)"
      (onPinTask)="pinTask($event)"
    ></app-pure-task-list>
  `
})
export class TaskListComponent {
  @Select(TasksState.getAllTasks) tasks$: Observable<Task[]>;

  constructor(private store: Store) {}

  /**
   * Component method to trigger the archiveTask event
   */
  // tslint:disable-next-line:typedef
  archiveTask(id: any) {
    this.store.dispatch(new ArchiveTask(id));
  }

  /**
   * Component method to trigger the pinTask event
   */
  // tslint:disable-next-line:typedef
  pinTask(id: any) {
    this.store.dispatch(new PinTask(id));
  }
}
