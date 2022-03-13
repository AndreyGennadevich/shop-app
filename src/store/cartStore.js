import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    counter: 0,
    items: [],
}

export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment: (state, action) => {
            const idx = state.items.findIndex(p => p.id === action.payload);
            if (state.items[idx].count < 100) {
                state.items[idx].count++;
                state.counter++;
            }
        },
        decrement: (state, action) => {
            const idx = state.items.findIndex(p => p.id === action.payload);
            state.items[idx].count--;
            state.counter--;
            if (state.items[idx].count === 0) {
                state.items.splice(idx, 1);
            }
        },
        addToCart: (state, action) => {
            state.items.push({
                ...action.payload,
                count: 1,
            });
            state.counter++;
        },
        removeFromCart: (state, action) => {
            const idx = state.items.findIndex(p => p.id === action.payload);
            state.counter -= state.items[idx].count;
            state.items.splice(idx, 1);

        },
        changeAmount: (state, action) => {
            const idx = state.items.findIndex(p => p.id === action.payload.id);
            if (action.payload.inputValue > 100) {
                state.counter += (100 - state.items[idx].count);
                state.items[idx].count = 100;
            } else {
                state.counter += (action.payload.inputValue - state.items[idx].count);
                state.items[idx].count = action.payload.inputValue;
                if (state.items[idx].count <= 0) {
                    state.items.splice(idx, 1);
                }
            }
        },
    },
})

export const { increment, decrement, addToCart, removeFromCart, changeAmount } = counterSlice.actions

export const cartReducer = counterSlice.reducer