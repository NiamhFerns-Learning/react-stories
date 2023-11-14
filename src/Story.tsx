export class Story {
  constructor(
    readonly title: string,
    readonly description: string,
    readonly dueDate: string,
    readonly status: string,
  ) { }

  format() {
    return `{${this.title}\n${this.description}\n${this.dueDate}}}`;
  }
}

export class StoryList {
  constructor(
    readonly title: string,
    readonly description: string,
    readonly stories: Story[],
  ) { }

  format() {
    return `{${this.title}\n${this.description}\n${this.stories}}}`;
  }
}
