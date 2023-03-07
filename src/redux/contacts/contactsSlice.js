import { createSlice } from "@reduxjs/toolkit";
import { contactsInitialState } from "./contactsInitialState";
import { getContacts, addContact, deleteContact } from "./contactsThunk";

const contactsSlice = createSlice({
    name: 'contacts',
    initialState: contactsInitialState,
    reducers: {
        filterContacts: (state, action) => {
            state.filter = action.payload.toLowerCase();
        },
    },
    extraReducers: {
        [getContacts.pending]: state => {
            state.status = 'pending';
        },
        [getContacts.fulfilled]: (state, { payload }) => {
            state.status = 'fulfilled';
            state.contacts = payload;
        },
        [getContacts.rejected]: (state, { payload }) => {
            state.status = 'rejected';
            state.error = payload;
        },

        [addContact.pending]: state => {
            state.status = 'pending';
        },
        [addContact.fulfilled]: (state, { payload }) => {
            state.status = 'fulfilled';
            state.contacts.unshift(payload);
        },
        [addContact.rejected]: (state, { payload }) => {
            state.status = 'rejected';
            state.error = payload;
        },

        [deleteContact.pending]: state => {
            state.status = 'pending';
        },
        [deleteContact.fulfilled]: (state, { payload }) => {
            state.status = 'fulfilled';
            state.contacts = state.contacts.filter(contact =>
                contact.id !== payload);
        },
        [deleteContact.rejected]: (state, { payload }) => {
            state.status = 'rejected';
            state.error = payload;
        },
    },
});

export const { filterContacts } = contactsSlice.actions;

export const contactsReducer = contactsSlice.reducer;






