import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type UserId = string

export interface User {
    name: string;
    email: string;
    github: string;
}

export interface UserWithId extends User {
    id: UserId;
}

const DEFAULT_STATE = [
    {
        id: "1",
        name: "Peter Doe",
        email: "peterd98@gmail.com",
        github: "peter22",
    },
    {
        id: "2",
        name: "Susan Doyle",
        email: "susanitadev@gmail.com",
        github: "susandev",
    },
    {
        id: "3",
        name: "nano coca",
        email: "fernashe@hotmail.com",
        github: "fer pepoidev",
    }
];

const initialState: UserWithId[] = (() => {
    const persistanceState = localStorage.getItem("__redux__state__");
    if (persistanceState) {
        return JSON.parse(persistanceState).users;
    } return DEFAULT_STATE;
}) ();

export const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        addNewUser: (state, action: PayloadAction<User>) => {
            const id = crypto.randomUUID()
            return [...state, {id, ...action.payload}]
        },
        
        deleteUserById: (state, action: PayloadAction<UserId>) => {
            const id = action.payload;
            return state.filter((user) => user.id !== id) 
        }
    }
})

export default usersSlice.reducer

export const { addNewUser, deleteUserById } = usersSlice.actions
