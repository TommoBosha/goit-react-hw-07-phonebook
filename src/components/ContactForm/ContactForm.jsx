import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { nanoid } from 'nanoid';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { addContact } from 'redux/contacts/contactsThunk';
import { getAllContacts } from 'redux/contacts/contactsSelectors';
import { Form, Label, Input, Button } from './ContactForm.styled';

export function ContactForm() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const dispatch = useDispatch();

  const handleChange = e => {
    const { name, value } = e.target;

    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default: return;
    }
  };

const contacts = useSelector(getAllContacts)

  const handleSubmit = e => {
    e.preventDefault();

    const newContact = {
      id: nanoid(),
      name,
      number,
    };

    const isNameinContacts = contacts.find(newContact => newContact.name.toLowerCase() === name.toLowerCase());
    isNameinContacts ? toast.success(`${newContact.name} is alredy in contacts`) : dispatch(addContact(newContact));
    reset();
  };
    const reset = () => {
      setName('');
      setNumber('');
    };
 

  return (
    <Form onSubmit={handleSubmit} autoComplete='off'>
      <Label htmlFor="contact_name">Name</Label>
      <Input
        type="text"
        name="name"
        value={name}
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
        onChange={handleChange}
      />
      <Label htmlFor="contact_number">Number</Label>
      <Input
        value={number}
        type="tel"
        name="number"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
        onChange={handleChange}
      />
      <Button type="submit"> Add contact</Button>
      <ToastContainer />
    </Form>
  );
}

