import { Component, Input, Output, EventEmitter } from '@angular/core';

import { TasksService } from './tasks.service';

@Component({
    selector: 'app-tasks',
    templateUrl: './tasks.component.html',
    styleUrl: './tasks.component.css',
})
export class TasksComponent {
    @Input({ required: true }) userId!: string;
    @Input({ required: true }) name?: string;

    isAddingTask: boolean = false;

    constructor(private taskService: TasksService) { }

    get selectedUserTasks() {
        return this.taskService.getUserTasks(this.userId);
    }


    onStartAddTask() {
        this.isAddingTask = true;
    }
    onCloseAddTask() {
        this.isAddingTask = false;
    }

}  