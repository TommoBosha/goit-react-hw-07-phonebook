import { Item, Button } from './ContactItem.styled';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contacts/contactsThunk';

export const ContactItem = ({ id, name, number }) => {
    
    const dispatch = useDispatch();
    const onDeleteContact = (id) => {
        dispatch(deleteContact(id));
    };

    return (
        <Item key={id}>
            <p>
                {name}:{number}
            </p>
            <Button type="button" onClick={() => onDeleteContact(id)}>
                Delete
            </Button>
        </Item>
    );
};


ContactItem.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
   onDeleteContact: PropTypes.func,
};