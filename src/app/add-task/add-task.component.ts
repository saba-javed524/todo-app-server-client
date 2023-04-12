import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TaskService } from '../services/task.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {
  tasks: any;
  constructor(private fb: FormBuilder, routes: Router, private service: TaskService, private http: HttpClient) {
    this.tasks = fb.group({
      taskName: ['', Validators.required],
      taskDescription: ['', Validators.required],

    })
  }


  ngOnInit(): void {
    this.service.getTasks()
      .subscribe(tasks => {
        console.log(tasks);
      });
    this.submitTask();
  }

  submitTask() {

    console.log(this.tasks.value);
    // this.service.addTask(this.addTask.value).subscribe((data: any) => {
    //   console.log(data);
    // })
  }
}
