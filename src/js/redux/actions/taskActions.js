import { POST_TASK, PUT_TASK, GET_TASK } from 'redux/actions/types';

// dispatch comes from redux and is used to handle async calls in state
// export const getTasks = () => dispatch => {
// fetch('https://jsonplaceholder.typicode.com/posts')
//   .then(res => res.json())
//   .then(posts =>
//     dispatch({
//       type: GET_TASKS,
//       payload: posts
//     })
//   );
// };

export const getTask = id => {
  console.log('getTask', id);
  return {
    type: GET_TASK,
    payload: false,
    id
  };
};

export const putTask = task => {
  console.log('putTask', task);
  return {
    type: PUT_TASK,
    payload: task,
    id: task.id
  };
};

export const postTask = task => {
  console.log('postTask', task);
  return {
    type: POST_TASK,
    payload: task
  };

  // => dispatch => {}
  // fetch('https://jsonplaceholder.typicode.com/posts', {
  //   method: 'POST',
  //   headers: { 'content-type': 'application/json' },
  //   body: {}
  // })
  //   .then(res => res.json())
  //   .then(task =>
  //     dispatch({
  //       type: POST_TASK,
  //       payload: task
  //     })
  //   );
};
