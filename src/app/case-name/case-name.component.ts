import { Component, ElementRef, ViewChild,} from '@angular/core';
import { mass } from '../massiv';


@Component({
  selector: 'app-case-name',
  standalone: true,
  imports: [],
  templateUrl: './case-name.component.html',
  styleUrl: './case-name.component.css'
})
export class CaseNameComponent {
  
  @ViewChild("pole") todoInputValue: ElementRef<HTMLInputElement> = null!;
  constructor(){}
  arr = mass
  // addToDo(x:string):void{
  //   const date = new Date() 
  //   const ms = date.getTime()
  //   let el = {id: ms, name: x, stage: false}
  //   this.arr.push(el) 
  //   console.log(this.arr)
  //   this.todoInputValue.nativeElement.value = ""
  // }
  addToDo(x:string):void{
    this.arr.push({id: 5, name: x, stage: false})
    this.todoInputValue.nativeElement.value = ""
  }
}


