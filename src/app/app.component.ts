import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { InfoComponent } from './MyComponents/info/info.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, InfoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'fyle-projrct';
 
}
