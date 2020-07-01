import React from 'react';
import PropTypes from 'prop-types';

import s from './ContactsList.module.css';

const ContactsList = ({ contacts, onclickBtn }) => {
    return (
        <>
            {contacts.map(item => (
                <li className={s.contactBox} key={item.id}>
                    <div className={s.name}>{item.name}</div>
                    <div className={s.number}>{item.number}</div>
                    <div className={s.btnBox}>
                        <button
                            className={s.btn}
                            type="button"
                            onClick={() => onclickBtn(item.id)}
                        >
                            Delete
                        </button>
                    </div>
                </li>
            ))}
        </>
    );
};

ContactsList.propTypes = {
    contactsList: PropTypes.arrayOf(
        PropTypes.shape({
            name: PropTypes.string,
            number: PropTypes.string,
        }),
    ),
};

export default ContactsList;
