import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SubmitFormComponent } from './component/submit-form/submit-form.component';
import { AlertComponent } from './reusableComponent/alert/alert.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,SubmitFormComponent ,AlertComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'user-crud-app';
}
