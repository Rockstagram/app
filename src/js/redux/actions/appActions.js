import { APP_INIT } from 'redux/actions/types';

export const appInit = init => {
  console.log('appInit', init);
  return {
    type: APP_INIT,
    payload: init
  };
};
