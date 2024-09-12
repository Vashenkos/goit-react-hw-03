// import { useEffect, useState } from "react";   
import SearchBox from './components/SearchBox/SearchBox';  
import ContactList from './components/ContactList/ContactList';   
import ContactForm from './components/ContactForm/ContactForm';    
import "./App.css";   
import { useState } from 'react';

const App = () => { 
    const initialContacts = [  
        { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },  
        { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },  
        { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },  
        { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },  
      ];  
    const [contacts, setContacts] = useState(initialContacts);  
 
    return (  
        <div>  
            <h1>Phonebook</h1>  
            <ContactForm />  
            <SearchBox />  
            <ContactList contacts={contacts} />  
        </div>  
    );  
}  

export default App;