import { SyntheticEvent, useState } from 'react';
// import logo from './logo.svg';
import './App.css';
import { StoryData, StoryListData } from './Story';
import { StoryAdder } from './StoryAdder';

function App() {
  const [stories, setStories] = useState<StoryData[]>([]);
  const [storyLists, setStoryLists] = useState<StoryListData[]>([]);

  const addToDo = (story: StoryData) => {
    setStories([...stories, story]);
  };

  return (
    <>
      <div className='todo_entry_adder'>
        <StoryAdder onAdd={addToDo} />
      </div>
      <div className='todo_entry_list'>
      </div>
    </>
  );
}

export default App;
