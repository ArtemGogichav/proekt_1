import { Component } from '@angular/core';
import { mass} from "../massiv"
import { NgFor} from "@angular/common"
@Component({
  selector: 'app-to-do-list',
  standalone: true,
  imports: [NgFor,],
  templateUrl: './to-do-list.component.html',
  styleUrl: './to-do-list.component.css'
})
export class ToDoListComponent {
  arr = mass
}
