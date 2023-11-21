import { SyntheticEvent, useState } from 'react';
import { StoryData, StoryListData } from './Story';
import { v4 as uuid } from 'uuid';

const statusOptions = [
  'not_started',
  'blocked',
  'in_progress',
  'Awaiting_aproval',
  'completed',
];

export function StoryAdder({
  onNewStory,
  lists,
}: {
  onNewStory: (item: StoryData) => void;
  lists: StoryListData[];
}) {
  // Change this to be individual state vars.
  const [form, setForm] = useState({
    title: '',
    description: '',
    dueDate: '',
    status: '',
    list: '0',
  });

  const handleSubmit = (e: SyntheticEvent): void => {
    e.preventDefault();
    onNewStory(
      new StoryData(
        uuid(),
        form.title,
        form.description,
        form.dueDate,
        form.status,
        form.list,
      ),
    );
    setForm({
      title: '',
      description: '',
      dueDate: '',
      status: '',
      list: '0',
    });
  };

  return (
    <>
      <form onSubmit={handleSubmit} className='todo_form'>
        {/* TITLE/NAME */}
        <div>
          <label>
            <input
              type='text'
              placeholder='What to do?'
              value={form.title}
              onChange={(e) => {
                setForm({ ...form, title: e.target.value });
              }}
              className='input_full'
              required
            ></input>
          </label>
        </div>

        {/* DESCRIPTION */}
        <div>
          <label>
            <p>Description</p>
            <textarea
              placeholder='Describe your task...'
              value={form.description}
              onChange={(e) => {
                setForm({ ...form, description: e.target.value });
              }}
              className='input_multi'
              required
            ></textarea>
          </label>
        </div>

        {/* DUE DATE */}
        <div>
          <label>
            <p>Due Date</p>
            <input
              type='date'
              value={form.dueDate}
              onChange={(e) => {
                setForm({ ...form, dueDate: e.target.value });
              }}
              className='input_standard'
            ></input>
          </label>
        </div>

        {/* STATUS */}
        <div>
          <label>
            <p>Status</p>
            <select
              name='status'
              id='status'
              onChange={(e) => {
                setForm({ ...form, status: e.target.value });
              }}
              className='input_standard'
            >
              {statusOptions.map((option) => (
                <option key={option} value={option}>
                  {option
                    .split('_')
                    .map((str) => str.charAt(0).toUpperCase() + str.slice(1))
                    .join(' ')}
                </option>
              ))}
            </select>
          </label>
        </div>

        {/* LIST */}
        <div>
          <label>
            <p>List</p>
            <select
              name='list'
              id='list'
              onChange={(e) => {
                setForm({ ...form, list: e.target.value });
              }}
              className='input_standard'
            >
              {lists.map((option) => (
                <option key={option.uuid} value={option.uuid}>
                  {option.name}
                </option>
              ))}
            </select>
          </label>
        </div>

        {/* SUBMIT */}
        <div>
          <label>
            <input
              type='submit'
              value='Add Story'
              className='submit_button'
            ></input>
          </label>
        </div>
      </form>
    </>
  );
}
