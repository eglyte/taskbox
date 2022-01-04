import { AppComponent } from './app.component';
import { PureInboxScreenComponent } from './components/pure-inbox-screen.component';
import { TaskListComponent } from './components/task-list/task-list.component';
import { PureTaskListComponent } from './components/task-list/pure-task-list.component';
import { TaskComponent } from './components/task.component';
import { InboxScreenComponent } from './components/inbox-screen.component';
import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

describe('App', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent,
        PureInboxScreenComponent,
        InboxScreenComponent,
        PureTaskListComponent,
        TaskListComponent,
        TaskComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'storybook-app'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('taskbox');
  });

});
