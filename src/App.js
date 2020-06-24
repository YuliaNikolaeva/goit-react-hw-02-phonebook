import React, { Component } from 'react';

import { v4 as uuidv4 } from 'uuid';

import s from './App.module.css';

import Form from './components/form/Form';

export default class App extends Component {
    state = {
        contacts: [],
    };

    addContact = newContact => {
        const contactItem = {
            id: uuidv4(),
            name: newContact.name,
            number: newContact.number,
        };

        this.setState(prevSt => {});
    };

    render() {
        return (
            <div className={s.page__wrapper}>
                <Form propsOnSubmit={this.addContact} />
                <ul></ul>
            </div>
        );
    }
}
