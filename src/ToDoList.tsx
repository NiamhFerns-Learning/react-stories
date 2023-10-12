import { ToDoItem } from './ToDoItem';

export function ToDoList({
  toDoItems,
  removeItem,
}: {
  toDoItems: ToDoItem[];
  removeItem: (uuid: string) => void;
}) {
  return (
    <>
      <ul>
        {toDoItems.map((item) => (
          <li key={item.title}>{item.title}</li>
        ))}
      </ul>
    </>
  );
}
