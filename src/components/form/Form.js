import React, { Component } from 'react';

import { v4 as uuidv4 } from 'uuid';

import s from './Form.module.css';

class Form extends Component {
    state = {
        name: '',
        number: '',
    };

    createId = uuidv4();

    saveContact = e => {
        const { name, value } = e.currentTarget;
        this.setState({
            [name]: value,
        });
    };

    submitContact = e => {
        e.preventDefault();

        this.props.propsOnSubmit(this.state);
        this.reset();
    };

    reset = () => {
        this.setState({
            name: '',
            number: '',
        });
    };

    render() {
        return (
            <form onSubmit={this.submitContact}>
                <label className={s.label} htmlFor={this.createId}>
                    <div className={s.head__field}>Name</div>
                    <input
                        type="text"
                        name="name"
                        className={s.input}
                        value={this.state.name}
                        onChange={this.saveContact}
                        id={this.createId}
                    ></input>
                </label>

                <label className={s.label} htmlFor={this.createId}>
                    <div className={s.head__field}>Number</div>
                    <input
                        type="tel"
                        name="number"
                        className={s.input}
                        value={this.state.number}
                        onChange={this.saveContact}
                        id={this.createId}
                    ></input>
                </label>
                <button className={s.btn} type="submit">
                    Add contact
                </button>
            </form>
        );
    }
}

export default Form;
