import React from 'react';
import PropTypes from 'prop-types';

import s from './ContactsList.module.css';

import ContactItem from '../ContactIItem';

const ContactsList = ({ contacts, onclickBtn }) => {
    console.log();
    return (
        <ul>
            {contacts.map(contact => (
                <li className={s.contactBox} key={contact.id}>
                    <ContactItem contactItem={contact} onClick={onclickBtn} />
                </li>
            ))}
        </ul>
    );
};

ContactsList.propTypes = {
    contacts: PropTypes.arrayOf(
        PropTypes.shape({
            name: PropTypes.string,
            number: PropTypes.string,
        }),
    ),
    onclickBtn: PropTypes.func,
};

export default ContactsList;
