import { Container, Section, TitleH1, TitleH2 } from './App.styled';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';

export function App() {
  return (
    <Container>
      <Section>
        <TitleH1>Phonebook</TitleH1>
        <ContactForm />

        <TitleH2>Contacts</TitleH2>
        <Filter />
        <ContactList />
      </Section>
    </Container>
  );
}
