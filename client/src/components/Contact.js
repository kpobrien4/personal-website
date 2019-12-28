import React, { Component } from 'react'
import '../contact.css'
import * as emailjs from 'emailjs-com'
import { Form, FormGroup, Label, Input } from 'reactstrap'
import USER_ID from '../USER_ID.js'
import TEMPLATE_ID from '../TEMPLATE_ID.js'


class Contact extends Component {
  state = {
    name: '',
    email: '',
    subject: '',
    message: '',
  }

handleSubmit(e) {
    e.preventDefault()
    const { name, email, subject, message } = this.state
    let templateParams = {
      from_name: email,
      to_name: 'kpobrien@buffalo.edu',
      subject: subject,
      message_html: message,
     }
     emailjs.send(
        'gmail',
         TEMPLATE_ID,
         templateParams,
         USER_ID
     )
     this.resetForm()
 }
resetForm() {
    this.setState({
      name: '',
      email: '',
      subject: '',
      message: '',
    })
  }
handleChange = (param, e) => {
    this.setState({ [param]: e.target.value })
  }
render() {
    return (
      <>
          <h3 className="p-heading1" class="thin">Get in Touch</h3>
          <Form onSubmit={this.handleSubmit.bind(this)}>
            <FormGroup controlId="formBasicEmail">
              <Label className="text-muted">Email address</Label>
              <Input
                type="email"
                name="email"
                value={this.state.email}
                className="text-primary"
                onChange={this.handleChange.bind(this, 'email')}
                placeholder="Email"
                required
              />
            </FormGroup>
<FormGroup controlId="formBasicName">
              <Label className="text-muted">Name</Label>
              <Input
                type="text"
                name="name"
                value={this.state.name}
                className="text-primary"
                onChange={this.handleChange.bind(this, 'name')}
                placeholder="Name"
                required
              />
            </FormGroup>
<FormGroup controlId="formBasicSubject">
              <Label className="text-muted">Subject</Label>
              <Input
                type="text"
                name="subject"
                className="text-primary"
                value={this.state.subject}
                onChange={this.handleChange.bind(this, 'subject')}
                placeholder="Subject"
                required
              />
            </FormGroup>
<FormGroup controlId="formBasicMessage">
              <Label className="text-muted">Message</Label>
              <Input
              class="textarea"
                type="textarea"
                name="message"
                value={this.state.message}
                onChange={this.handleChange.bind(this, 'message')}
              />
            </FormGroup>
<button type="submit" class="waves-effect waves-light btn black">
              Submit
            </button>
          </Form>
      </>
    )
  }
}
export default Contact