export class StoryData {
  constructor(
    readonly uuid: string,
    readonly title: string,
    readonly description: string,
    readonly dueDate: string,
    readonly status: string,
    readonly list: string, // The uuid for a StoryList
  ) { }

  format() {
    return `{${this.title}\n${this.description}\n${this.dueDate}}}`;
  }
}

export class StoryListData {
  constructor(
    readonly uuid: string,
    readonly name: string,
    readonly description: string,
    readonly stories: StoryData[],
  ) { }

  format() {
    return `{${this.name}\n${this.description}\n${this.stories}}}`;
  }
}
