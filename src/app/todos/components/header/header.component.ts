import { Component, inject } from "@angular/core";
import { TodoService } from "../../services/todo.service";

@Component({
    selector: 'app-todos-header',
    templateUrl: './header.component.html',
    standalone: true
})

export class HeaderComponent {
    todoService = inject(TodoService)
    text: string = '';

    changeText(event: Event): void {
        const targer = event.target as HTMLInputElement
        this.text = targer.value;
    }

    addTodo(): void {
        this.todoService.addTodo(this.text)
        this.text = ''
    }
}