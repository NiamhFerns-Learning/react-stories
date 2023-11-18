import { StoryData, StoryListData } from './Story';

export function Stories({
  stories,
  lists,
  removeItem,
}: {
  stories: StoryData[];
  lists: StoryListData[];
  onNewList: (item: StoryListData) => void;
  removeItem: (uuid: string) => void;
}) {
  return (
    <>
      {lists.map((list) => (
        // Name potentially can have clashes. Should use uuid.
        <div key={list.uuid}>
          <h1 className='list_heading'>{list.name}</h1>
          <p className='list_description'>{list.description}</p>
          <div className='list_content'>
            {stories
              .filter((story) => story.list === list.uuid)
              .map((story) => (
                <div className='story_container'>
                  <div className='story_content'>
                    <h2 className='story_heading'>{story.title}</h2>
                    <p className='story_description'>{story.description}</p>
                    <p className='story_due_date'>{story.dueDate}</p>
                    <p className='story_status'>{story.status}</p>
                  </div>
                  <div className='story_actions'>
                    <button
                      onClick={() => {
                        removeItem(story.title);
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
    </>
  );
}
