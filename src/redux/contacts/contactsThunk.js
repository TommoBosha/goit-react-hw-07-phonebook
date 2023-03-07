import { createAsyncThunk } from "@reduxjs/toolkit";
import { fetchContacts, createContact, removeContact } from "services/api";

export const getContacts = createAsyncThunk(
    'contacts/getContacts',
    async (_, { rejectWithValue }) => {
        try {
            return await fetchContacts();
        } catch (e) {
            return rejectWithValue(e);
        }
    },
);

export const addContact = createAsyncThunk(
    'contacts/addContact',
    async (contact, { rejectWithValue }) => {
        try {
            return await createContact(contact);
        } catch (e) {
            return rejectWithValue(e);
        }
    },
);

export const deleteContact = createAsyncThunk(
    'contacts/deleteContact',
    async (id, { rejectWithValue }) => {
        try {
            await removeContact(id);
            return id;
        } catch (e) {
            return rejectWithValue(e);
        }
    },
);