import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface listState {
    arr: string[]
}

const initialState : listState = {
    arr: []
}

export const listSlice = createSlice({
    name: 'list',
    initialState,
    reducers: {
        add_task: (state, action : PayloadAction<string>) => {
            if(!state.arr.includes(action.payload)){
                state.arr = [...state.arr, action.payload]
            }
        },
        remove_task: (state, action : PayloadAction<string | undefined>) => {
            state.arr = state.arr.filter((item) => item != action.payload)
        }
    }
})

export const { add_task, remove_task } = listSlice.actions
export const listReducer = listSlice.reducer