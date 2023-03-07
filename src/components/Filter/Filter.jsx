import { Label, Input } from './Filter.styled';
import { useDispatch,useSelector } from 'react-redux';
import { filterContacts } from 'redux/contacts/contactsSlice';
import { getFilterContact } from 'redux/contacts/contactsSelectors';


export const Filter = () => {
      const filter = useSelector(getFilterContact);
    const dispatch = useDispatch();

    const onChangeFilter = (filter) => { 
        dispatch(filterContacts(filter));
    }
    return (
        <Label>
            Find contacts by name
            <Input 
                type="text"
                name="filter"
                value={filter}
                onChange={(e) => onChangeFilter(e.target.value)}
                placeholder="Enter search name" />
        </Label>
    );
}
