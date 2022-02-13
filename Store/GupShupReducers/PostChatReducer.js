import {createSlice} from '@reduxjs/toolkit';

const slice = createSlice({
  name: 'postChat',
  initialState: {
    chat: [],
    users: new Object(),
  },
  reducers: {
    SaveChat: (chat, {payload}) => {
      const filterData = chat.chat.filter(
        (item, index) => Object.keys(item)[0] == payload.userData.user,
      );
      const filteredUserDetail = filterData[0];
      filteredUserDetail[Object.keys(filteredUserDetail)[0]]?.messages.push(
        payload.userData,
      );
    },
    AddUsers: (users, {payload}) => {
      users.chat.push(payload?.user);
    },
  },
});

export const {SaveChat, AddUsers} = slice.actions;

export default slice.reducer;

export const handleChats = userData => dispatch => {
  dispatch({type: SaveChat.type, payload: {userData}});
};

export const handleAddUser = user => dispatch => {
  dispatch({type: AddUsers.type, payload: {user}});
};
