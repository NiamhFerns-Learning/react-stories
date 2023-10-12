import { SyntheticEvent, useState } from 'react';
// import logo from './logo.svg';
import './App.css';
import { ToDoItem } from './ToDoItem';
import { ItemAdder } from './ItemAdder';
import { ToDoList } from './ToDoList';

function App() {
  const [toDoItems, setToDoItems] = useState<ToDoItem[]>([]);

  const addToDo = (item: ToDoItem) => {
    setToDoItems([...toDoItems, item]);
  };

  return (
    <>
      <h1 className='main_header'>Add An Item</h1>
      <ItemAdder onAdd={addToDo} />
      <h1 className='to_do_list_header'>To Do</h1>
      <ToDoList
        toDoItems={toDoItems}
        removeItem={(uuid: string) => {
          console.log(`Removing ${uuid}`);
        }}
      />
    </>
  );
}

export default App;
