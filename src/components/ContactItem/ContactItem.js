import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import s from './ContactItem.module.css';

const ContactItem = ({ contactsList, onclickBtn }) => {
    return (
        <Fragment>
            {contactsList.map(item => (
                <div className={s.contactBox} key={item.id}>
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
                </div>
            ))}
        </Fragment>
    );
};

ContactItem.propTypes = {
    contactsList: PropTypes.arrayOf(
        PropTypes.shape({
            name: PropTypes.string,
            number: PropTypes.string,
        }),
    ),
};

export default ContactItem;
