import { SyntheticEvent, useState } from 'react';
import { StoryData, StoryListData } from './Story';
import { v4 as uuid } from 'uuid';

export function Stories({
  stories,
  lists,
  onNewList,
  removeItem,
}: {
  stories: StoryData[];
  lists: StoryListData[];
  onNewList: (item: StoryListData) => void;
  removeItem: (uuid: string) => void;
}) {
  const [form, setForm] = useState({
    name: '',
    description: '',
  });

  const handleSubmit = (e: SyntheticEvent): void => {
    e.preventDefault();
    onNewList(new StoryListData(uuid(), form.name, form.description, []));
    setForm({
      name: '',
      description: '',
    });
  };

  return (
    <div id='story_lists'>
      {lists.map((list) => (
        // Name potentially can have clashes. Should use uuid.
        <div key={list.uuid} className='list_container'>
          <h2 className='list_heading'>{list.name}</h2>
          <p className='list_description'>{list.description}</p>
          <div className='list_content'>
            {stories
              .filter((story) => story.list === list.uuid)
              .map((story) => (
                <div className='story_container'>
                  <div className='story_content'>
                    <h3 className='story_heading'>{story.title}</h3>
                    <p className='story_description'>{story.description}</p>
                    <p className='story_due_date'>{story.dueDate}</p>
                    <p className='story_status'>{story.status}</p>
                  </div>
                  <div className='story_actions'>
                    <button
                      onClick={() => {
                        removeItem(story.uuid);
                      }}
                    >
                      X
                    </button>
                  </div>
                </div>
              ))}
          </div>
        </div>
      ))}
      <div className='list_container list_adder'>
        <form onSubmit={handleSubmit} className='new_list'>
          <div>
            <label>
              <input
                type='text'
                placeholder='List Name'
                value={form.name}
                onChange={(e) => {
                  setForm({ ...form, name: e.target.value });
                }}
              ></input>
            </label>
          </div>
          <div>
            <label>
              <input
                type='text'
                placeholder='What is this list for...'
                value={form.description}
                onChange={(e) => {
                  setForm({ ...form, description: e.target.value });
                }}
              ></input>
            </label>
          </div>
          <button type='submit' value='Add List' className='list_submit'>
            Add List
          </button>
        </form>
      </div>
    </div>
  );
}
