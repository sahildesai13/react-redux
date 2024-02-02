import { createSlice } from '@reduxjs/toolkit'

export const counterSlice = createSlice({
    name: 'counter',
    initialState: {
        value: 0,
        name: 'sahil',
        email: 'emails@gmail.com',
        preValue: 1,
    },
    reducers: {
        increment: (state) => {
            state.value += state.preValue
        },
        decrement: (state) => {
            state.value -= state.preValue
        },
        demo: (state) => {
            state.value +=5
        },
        updateName:(state,action) => {
            state.name = action.payload
        },
        updateEmail:(state,action) => {
            state.email = action.payload
        },
        addValue: (state,action) => {
            state.preValue += parseInt(action.payload)
        }
    },
})

export const { increment, decrement, demo,updateName,updateEmail,addValue } = counterSlice.actions

export default counterSlice.reducer