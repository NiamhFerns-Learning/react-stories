import { SyntheticEvent, useState } from 'react';
// import logo from './logo.svg';
import './App.css';
import { StoryData, StoryListData } from './Story';
import { Stories } from './Stories';
import { StoryAdder } from './StoryAdder';

function App() {
  const [stories, setStories] = useState<StoryData[]>([]);
  const [storyLists, setStoryLists] = useState<StoryListData[]>([
    new StoryListData('0', 'Unsorted', 'Default list for new items.', []),
  ]);

  const addStory = (story: StoryData) => {
    setStories([...stories, story]);
  };

  const addStoryList = (storyList: StoryListData) => {
    setStoryLists([...storyLists, storyList]);
  };

  return (
    <>
      <div className='todo_entry_adder'>
        <StoryAdder onNewStory={addStory} lists={storyLists} />
      </div>
      <div className='todo_entry_list'>
        <Stories
          stories={stories}
          lists={storyLists}
          removeItem={(uuid: string): void => console.log(uuid)}
          onNewList={addStoryList}
        />
      </div>
    </>
  );
}

export default App;
