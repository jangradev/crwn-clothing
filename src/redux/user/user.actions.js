import { UserActionTypes } from './user.types';

export const setCurrentUser = (user) => {
  return {
    type: UserActionTypes.type,
    payload: user,
  };
};
