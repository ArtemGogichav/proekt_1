import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {NewCompComponent} from './new-comp/new-component.component'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NewCompComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'artem';
}
