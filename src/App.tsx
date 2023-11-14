import { SyntheticEvent, useState } from 'react';
// import logo from './logo.svg';
import './App.css';
import { Story } from './Story';
import { ItemAdder } from './ItemAdder';

function App() {
  const [toDoItems, setToDoItems] = useState<Story[]>([]);

  const addToDo = (story: Story) => {
    setToDoItems([...toDoItems, story]);
  };

  return (
    <>
      <div className='todo_entry_adder'>
        <ItemAdder onAdd={addToDo} />
      </div>
      <div className='todo_entry_list'>
      </div>
    </>
  );
}

export default App;
