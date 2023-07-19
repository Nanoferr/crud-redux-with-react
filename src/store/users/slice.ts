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

const initialState: UserWithId[] = [
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

export const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        deleteUserById: (state, action: PayloadAction<UserId>) => {
            const id = action.payload;
            return state.filter((user) => user.id !== id) 
        }
    }
})

export default usersSlice.reducer

export const { deleteUserById } = usersSlice.actions