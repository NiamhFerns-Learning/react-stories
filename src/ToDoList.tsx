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
      <div className='to_do_list'>
        {toDoItems.map((item) => (
          <div key={item.title}>
            <div>
              <h2>{item.title}</h2>
              <p>{item.description}</p>
              <p>
                <em>Added:</em> {item.added}
              </p>
              <p>
                <em>Completed:</em> {item.completed}
              </p>
              <p>
                <em>{item.status}</em>
              </p>
            </div>
            <button
              onClick={() => {
                removeItem(item.title);
              }}
            >X</button>
          </div>
        ))}
      </div>
    </>
  );
}
