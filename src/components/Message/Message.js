import React, { Fragment } from 'react';

import s from './Message.module.css';

const Message = ({ text }) => {
    return (
        <Fragment>
            <div className={s.message}>{text}</div>
        </Fragment>
    );
};

export default Message;
