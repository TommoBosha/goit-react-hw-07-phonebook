export const getFilterContact = state => state.contacts.filter;

export const getFilteredContacts = state => {
    return state.contacts.contacts.filter(contacts =>
        contacts.name.toLowerCase().includes(state.contacts.filter)
    );

};

export const getAllContacts = state => state.contacts.contacts;


