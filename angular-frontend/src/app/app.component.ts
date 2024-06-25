import { Component } from '@angular/core';
import { Test, TestService } from './services/test.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-frontend';

  constructor(private testService:TestService){}

  valueFromBackend$: Observable<Test> = this.testService.getUserById(1)
}
