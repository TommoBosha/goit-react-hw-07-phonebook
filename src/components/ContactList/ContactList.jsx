import { ContactItem } from 'components/ContactItem/ContactItem';
import { List } from './ContactList.styled';
import { useSelector, useDispatch } from 'react-redux';
import { getFilteredContacts  } from 'redux/contacts/contactsSelectors'; 
import { getContacts } from 'redux/contacts/contactsThunk';
import { useEffect } from 'react';

export const ContactList = () => {
    const dispatch = useDispatch();
    const contacts = useSelector(getFilteredContacts );
    useEffect(() => {
        dispatch(getContacts());
    }, [dispatch])
    return (
       
        <List>
            {contacts.map(({ id, name, phone }) => (
                <ContactItem
                    key={id}
                    id={id}
                    name={name}
                    number={phone}
                />
            ))}
        </List>
    );
};

