import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})

export class TaskService {
    constructor(private http: HttpClient) { }

    private url = 'http://localhost:3001/todolist';


    getAllTasks(): Observable<any> {
        return this.http.get(`${this.url}/todolist`)
    }

    // addTask(task: any) {
    //     return this.http.post("http://localhost:3000/todolist", task);
    // }




    getTasks() {
        return this.http.get(this.url);
    }
    // submitTask(task: any) {
    //     return this.http.get("http://localhost:3000/todolist", task);
    // }


    // deleteTasks(taskId: String) {
    //     return this.http.delete("http://localhost:3000/tasks/" + taskId);
    // }

}