import { Component, OnInit } from '@angular/core';
import { TaskService } from '../services/task.service';

@Component({
  selector: 'app-view-task',
  templateUrl: './view-task.component.html',
  styleUrls: ['./view-task.component.css']
})
export class ViewTaskComponent implements OnInit {
  tasks: any;
  constructor(private service: TaskService) { }

  ngOnInit(): void {
    this.service.getTasks().subscribe(response => {
      this.tasks = response;
    });

  }

  addTask() {
    console.log(this.tasks.value);
  }

}
