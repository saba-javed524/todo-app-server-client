import { Component, OnInit } from '@angular/core';
import { TaskService } from './services/task.service';
import { response } from 'express';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css',
  ]
})
export class AppComponent {



  title = 'AngularNewApp';
}
