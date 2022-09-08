import { createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';


export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    filter:'',
  },
  reducers: {
    addItem(state, action) {
      state.items.push(action.payload);
    },
    removeItem(state, action) {
      state.items = state.items.filter(contact => contact.id !== action.payload);
    },
    filterItems(state, action) {
      state.filter = action.payload;
    }
  }
})


const persistConfig = {
  key: 'contacts',
  storage,
  whitelist: ['items'],
};

export const contactsReducer = persistReducer(persistConfig, contactsSlice.reducer);

export const { addItem, removeItem, filterItems } = contactsSlice.actions;

// Selectors
export const getItems = state => state.contacts.items;
export const getFilter = state => state.contacts.filter;