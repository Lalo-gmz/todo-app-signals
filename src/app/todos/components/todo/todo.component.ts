import { Component, Input } from "@angular/core";
import { TodoInterface } from "../../types/todo.interface";
import { CommonModule } from "@angular/common";

@Component({
    selector: 'app-todos-todo',
    templateUrl: './todo.component.html',
    standalone: true,
    imports: [CommonModule],
})

export class TodoComponent {
    @Input({required: true}) todo!: TodoInterface;
}