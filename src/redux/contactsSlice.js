import { createSlice } from '@reduxjs/toolkit';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    contactsData: [
      {
        id: 'id-1',
        name: 'Rosie Simpson',
        number: '459-12-56',
      },
      {
        id: 'id-2',
        name: 'Hermione Kline',
        number: '443-89-1',
      },
      {
        id: 'id-3',
        name: 'Eden Clements',
        number: '645-17-79',
      },
      {
        id: 'id-4',
        name: 'Annie Copeland',
        number: '227-91-26',
      },
    ],
  },
  reducers: {
    addContact: (state, action) => {
      console.log('addContact-> ', state.contactsData);
      console.log('action-> ', action.payload);
      state.contactsData.push(action.payload);
    },
    deleteContact: (state, action) => {
      console.log('deleteContact', state.contactsData);
      state.contactsData = state.contactsData.filter(
        (contact) => contact.id !== action.payload,
      );
    },
  },
});
export const { addContact, deleteContact } = contactsSlice.actions;

export default contactsSlice.reducer;
