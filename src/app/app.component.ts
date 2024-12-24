import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FormsModule,NgFor,NgIf],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'forms';
  students: Array<any> = [];
  formSubmit(event:any){
    this.students.push({ ...event.value });
    event.resetForm();
    console.log("form submitted");
    console.log(event.value);
  }
  getValue(fullName:any){
    console.log(fullName);
  }
}
