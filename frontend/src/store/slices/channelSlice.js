/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  activeChannelId: '1',
  activeChannelName: 'general',
};

const channelSlice = createSlice({
  name: 'channel',
  initialState,
  reducers: {
    setActiveChannel(state, { payload }) {
      const { activeChannelId, activeChannelName } = payload;
      state.activeChannelId = activeChannelId;
      state.activeChannelName = activeChannelName;
    },
    setDefaultChannel() {
      return initialState;
    },
  },
});

export const { setActiveChannel, setDefaultChannel } = channelSlice.actions;
export default channelSlice.reducer;
