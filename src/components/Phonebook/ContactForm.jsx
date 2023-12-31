import { Component } from 'react';
import css from './ContactForm.module.css';

class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };
  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };
  handleSubmit = e => {
    e.preventDefault();
    if (!this.props.onSubmit({ ...this.state })) return;
    this.reset();
  };
  reset() {
    this.setState({ name: '', number: '' });
  }
  render() {
    const { name, number } = this.state;
    return (
      <form onSubmit={this.handleSubmit} className={css.phonebook_container}>
        <label className={css.label}>
          Name
          <input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яіїєА-ЯІЇЄ]+(([' \-][a-zA-Zа-яіїєА-ЯІЇЄ ])?[a-zA-Zа-яіїєА-ЯІЇЄ]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            value={name}
            onChange={this.handleChange}
          />
        </label>
        <label className={css.label}>
          Number
          <input
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[\-.\s]?\(?\d{1,3}?\)?[\-.\s]?\d{1,4}[\-.\s]?\d{1,4}[\-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            value={number}
            onChange={this.handleChange}
          />
        </label>
        <button
          type="submit"
          className={css.phonebook_button}
          disabled={!name || !Number(number)}
        >
          Add contact
        </button>
      </form>
    );
  }
}

export default ContactForm;

// import React, { Component } from 'react';
// import css from '../Phonebook/Phonebook.module.css';
// export class Phonebook extends Component {
//   state = {
//     name: '',
//     number: [],
//   };
//   handleChangeName = ({ target: { value } }) => {
//     this.setState({ name: value });
//   };
//   handleChangeContacts = ({ target: { value } }) => {
//     this.setState({ number: value });
//   };
//   handleSubmit = e => {
//     e.preventDefault();
//     if (!this.props.onSubmit({ ...this.state })) return;
//     this.reset();
//   };
//   reset() {
//     this.setState({ name: '', number: '' });
//   }
//   render() {
//     const { name, number } = this.state;
//     return (
//       <div className={css.phonebook}>
//         <h2>Phonebook</h2>
//         <form className={css.phonebook_container}>
//           <label htmlFor="" className={css.label}>
//             Name
//           </label>
//           <input
//             type="text"
//             name="name"
//             pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
//             title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
//             required
//             value={name}
//             onChange={this.handleChangeName}
//           />
//           <label htmlFor="" className={css.label}>
//             Number
//           </label>
//           <input
//             type="tel"
//             name="name"
//             pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
//             title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
//             required
//             value={number}
//             onChange={this.handleChangeContacts}
//           />
//           <button
//             type="submit"
//             className={css.phonebook_button}
//             disabled={!name || !Number(number)}
//           >
//             Add to contacs
//           </button>
//         </form>
//       </div>
//     );
//   }
// }
