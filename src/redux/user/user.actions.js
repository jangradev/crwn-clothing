import { UserActionTypes } from './user.types';
export const setCurrentUser = (user) => {
  console.log(UserActionTypes);
  return {
    type: UserActionTypes.type,
    payload: user,
  };
};
