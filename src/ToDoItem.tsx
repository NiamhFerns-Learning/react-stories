export class ToDoItem {
  constructor(
    readonly title: string,
    readonly description: string,
    readonly added: string,
    readonly completed: string,
    readonly status: string,
  ) { }

  format() {
    return `{${this.title}\n${this.description}\n${this.added}\n${this.completed}\n${this.completed}}`;
  }
}

