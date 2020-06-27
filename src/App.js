import React, { Component } from 'react';

import { v4 as uuidv4 } from 'uuid';

import s from './App.module.css';

import Form from './components/Form';
import ContactItem from './components/ContactItem';
import Filter from './components/Filter';
import Message from './components/Message';

export default class App extends Component {
    state = {
        contacts: [
            { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
            { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
            { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
            { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
        ],
        filter: '',
    };

    addContact = newContact => {
        const { contacts } = this.state;
        const contactItem = {
            id: uuidv4(),
            name: newContact.name,
            number: newContact.number,
        };
        const isCorrectImput =
            contactItem.name.length !== 0 && contactItem.name.number !== 0;
        const isNewContactDublicate = contacts.find(
            contact => contact.name === newContact.name.trim(),
        );
        console.log(isNewContactDublicate);

        if (isCorrectImput) {
            if (!isNewContactDublicate) {
                this.setState(({ contacts }) => ({
                    contacts: [contactItem, ...contacts],
                }));
            } else {
                alert(`${newContact.name.trim()} is alredy in contacts`);
            }
        } else {
            alert('One or more fields is full');
        }
    };

    changeFilter = e => {
        this.setState({ filter: e.currentTarget.value });
    };

    getVisibleTodos = () => {
        const { contacts, filter } = this.state;
        const normalizerFilter = filter.toLocaleLowerCase();
        return contacts.filter(contact =>
            contact.name.toLocaleLowerCase().includes(normalizerFilter),
        );
    };

    deledeContact = idForDel => {
        this.setState(prevState => ({
            contacts: prevState.contacts.filter(
                prevContact => prevContact.id !== idForDel,
            ),
        }));
    };

    render() {
        const visibleContacts = this.getVisibleTodos();
        return (
            <div className={s.page__wrapper}>
                <h1>Phonebook</h1>
                {this.state.contacts.length > 1 && (
                    <Filter
                        value={this.state.filter}
                        onChange={this.changeFilter}
                    />
                )}
                <Form propsOnSubmit={this.addContact} />
                <h2>Contacts</h2>
                {this.state.contacts.length > 0 ? (
                    <ContactItem
                        contactsList={visibleContacts}
                        onclickBtn={this.deledeContact}
                    />
                ) : (
                    <Message text={'Phonebook is empty'} />
                )}
            </div>
        );
    }
}
