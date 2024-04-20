import { createSlice } from '@reduxjs/toolkit'
export const tabSlice = createSlice({
    name: 'tab',
    initialState: {
        currentTab: 0,
    },
    reducers: {
        setTab: (state, action) => {
            state.currentTab = action.payload;
        }
    }

})
export const { setTab } = tabSlice.actions;
export default tabSlice.reducer;