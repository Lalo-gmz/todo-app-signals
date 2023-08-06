import { Component, computed, inject } from "@angular/core";
import { TodoService } from "../../services/todo.service";
import { CommonModule } from "@angular/common";
import { FilterEnum } from "../../types/filter.enum";
import { TodoComponent } from "../todo/todo.component";

@Component({
    selector: 'app-todos-main',
    templateUrl: './main.component.html',
    standalone: true,
    imports: [CommonModule, TodoComponent]
})

export class MainComponent {
    todosService = inject(TodoService)

    visibleTodos = computed(()=> {
        const todos = this.todosService.todosSig()
        const filter = this.todosService.filterSig()

        if (filter === FilterEnum.active){
            return todos.filter((todo)=> !todo.isCompleted)
        } else if(filter === FilterEnum.completed){
            return todos.filter((todo) => todo.isCompleted);
        }
        return todos;

    })
}