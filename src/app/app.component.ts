import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CaseNameComponent} from './case-name/case-name.component'
import { ToDoListComponent} from "./to-do-list/to-do-list.component"

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CaseNameComponent, ToDoListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {}
