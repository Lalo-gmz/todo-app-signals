import { Injectable, signal } from "@angular/core";
import { TodoInterface } from "../types/todo.interface";
import { FilterEnum } from "../types/filter.enum";

@Injectable({
	providedIn: 'root'
})

export class TodoService {
	todosSig = signal<TodoInterface[]>([]);
	filterSig = signal<FilterEnum>(FilterEnum.all)

	addTodo(text: string): void {
		const newTodo: TodoInterface = {
			text,
			isCompleted: false,
			id: Math.random().toString(16),
		};
		this.todosSig.update((todos) => [...todos, newTodo]);
	}
}