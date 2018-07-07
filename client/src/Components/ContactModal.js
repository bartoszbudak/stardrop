//===========//
// Header.js //
//===========//
import React from 'react'
import axios from 'axios'

class ContactModal extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
          emailDetails: {
            name: '',
            email: '',
            subject: '',
            message: ''
          },
          name: true,
          email: true, 
          subject: true,
          message: true,
          validEmail: false,
          emailSending: false,
          emailSent: false,
        }
    }

  updateEmailDetails = (propertyName) => (event) => {
      const { emailDetails } = this.state;
      const newEmailDetails = {
        ...emailDetails,
        [propertyName]: event.target.value
      };

      this.setState({ emailDetails : newEmailDetails})
  }

  sendEmail = () => {
      axios.post('/sendmail', this.state.emailDetails)
      .then(res => {
        this.setState(prevState => ({emailSent: true}));
        this.closeModal();
      })
  }

  closeModal = () =>{
    this.setState({emailDetails: {name: '', email: '', subject: '', message: ''}})
    this.props.toggleModal();
  }

  submitEmailForm = () => {
      this.state.emailDetails.name ? this.setState({name : true}) : this.setState({name: false})
      this.state.emailDetails.email ? this.setState({email : true}) : this.setState({email: false})
      this.state.emailDetails.subject ? this.setState({subject : true}) : this.setState({subject: false})
      this.state.emailDetails.message ? this.setState({message : true}) : this.setState({message: false})

      if(this.state.emailDetails.name && this.state.emailDetails.email && this.state.emailDetails.subject && this.state.emailDetails.message){
        this.sendEmail();
      }
  }


  render() {

    let name, email, subject, message, cancel, submit;
    let error = {};


    switch(this.props.lang){
      case 'eng':
        name = 'Name'
        email = 'Email'
        subject = 'Subject'
        message = 'Message'
        error = {
          name: 'Name is required',
          email: 'Email is required',
          subject: 'Subject is required',
          message: 'Message is required'
        }
        cancel = 'Cancel'
        submit = 'Send'
        break;
      case 'jp':
        name = '名前'
        email = 'EMAIL'
        subject = '件名'
        message = '本文'
        error = {
          name: '名前を入力してください',
          email: 'EMAILを入力してください',
          subject: '件名を入力してください',
          message: '本文を入力してください'
        }
        cancel = 'キャンセル'
        submit = 'メッセージを送る'
        break;
      case 'pl':
        name = 'Imie'
        email = 'Email'
        subject = 'Temat'
        message = 'Wiadomośc'
        error = {
          name: 'Wprowadź imie ',
          email: 'Wprowadź poprawny email',
          subject: 'Wprowadź temat ',
          message: 'Wprowadź wiadomośc '
        }
        cancel = 'Anuluj'
        submit = 'Wyślij'
        break;
      default:
    }

    return (
        <div className={this.props.showModal ? 'modal is-active is-radiusless' : 'modal is-radiusless'}>
            <div className="modal-background"></div>
              <div className="modal-content">
              <div className="box">
                  <div className="field">
                    <label className="label">{email}</label>
                    <div className="control has-icons-left">
                      <input onChange={this.updateEmailDetails('email')} className={!this.state.email ? 'input is-danger' : "input is-primary"} value={this.state.emailDetails.email} type="text" placeholder={email}/>
                      <span className="icon is-small is-left">
                        <i className="fas fa-envelope"></i>
                      </span>
                    </div>
                    {!this.state.email ? <p className="help is-danger">{error.email}</p> : null}
                  </div>
                  <div className="field">
                  <label className="label">{name}</label>
                    <div className="control has-icons-left">
                      <input onChange={this.updateEmailDetails('name')} className={!this.state.email ? 'input is-danger' : "input is-primary"} value={this.state.emailDetails.name} type="text" placeholder={name}/>
                      <span className="icon is-small is-left">
                        <i className="fas fa-user"></i>
                      </span>
                    </div>
                    {!this.state.name ? <p className="help is-danger">{error.name}</p> : null}
                  </div>
                  <div className="field">
                  <label className="label">{subject}</label>
                    <div className="control has-icons-left">
                      <input onChange={this.updateEmailDetails('subject')} className={!this.state.subject ? 'input is-danger' : "input is-primary"} value={this.state.emailDetails.subject} type="text" placeholder={subject}/>
                      <span className="icon is-small is-left">
                        <i className="fas fa-info-circle"></i>
                      </span>
                    </div>
                    {!this.state.subject ? <p className="help is-danger">{error.subject}</p> : null}
                  </div>
                  <div className="field">
                  <label className="label">{message}</label>
                    <div className="control has-icons-left">
                      <input onChange={this.updateEmailDetails('message')} className={!this.state.message ? 'input is-danger' : "input is-primary"} value={this.state.emailDetails.message} type="text" placeholder={message}/>
                      <span className="icon is-small is-left">
                        <i className="fas fa-edit"></i>
                      </span>
                    </div>
                    {!this.state.message ? <p className="help is-danger">{error.message}</p> : null}
                  </div>
                  <div className="field is-grouped is-grouped-right">
                    <p className="control">
                      <button onClick={this.closeModal} className="button is-small is-radiusless is-light">
                        {cancel}
                      </button>
                    </p>
                    <p className="control">
                      <button onClick={this.submitEmailForm} className="button is-small is-radiusless is-dark">
                        {submit}
                      </button>
                    </p>
                  </div>
                </div>
            </div>
            <button onClick={this.props.toggleModal} className="modal-close is-large" aria-label="close"></button>
        </div>

    )
  }
}

export default ContactModal