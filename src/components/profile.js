import React, { Component } from 'react'
import {
  Button,
  Checkbox,
  Form,
  Input,
  Radio,
  Select,
  TextArea,
} from 'semantic-ui-react';
import Navigation from './navigation';

const options = [
  { key: 'm', text: 'Male', value: 'male' },
  { key: 'f', text: 'Female', value: 'female' },
  { key: 'o', text: 'Other', value: 'other' },
]

class ProfileForm extends Component {
  state = {}

  handleChange = (e, { value }) => this.setState({ value })

  render() {
    const { value } = this.state
    return (
      <div>
      <Navigation/>
      <Form>
        <Form.Group inline>
          <label>Group</label>
          <Form.Field
            control={Radio}
            label='Undergraduate Student'
            value='1'
            checked={value === '1'}
            onChange={this.handleChange}
          />
          <Form.Field
            control={Radio}
            label='Graduate Student'
            value='2'
            checked={value === '2'}
            onChange={this.handleChange}
          />
          <Form.Field
            control={Radio}
            label='Alumni'
            value='3'
            checked={value === '3'}
            onChange={this.handleChange}
          />
        </Form.Group>
        <Form.Group widths="20">
          <Form.Field
            control={Input}
            label='Major'
            placeholder='Major'
          />
        </Form.Group>
        <Form.Group widths="20">
          <Form.Field
            control={Input}
            label='Company/Organization'
            placeholder='Company/Organization'
          />
          <Form.Field
            control={Input}
            label='Role/Function'
            placeholder='Role/Function'
          />
        </Form.Group>
        <Form.Field
          control={TextArea}
          label='Hobbies'
          placeholder='List some hobbies so others can get to know you better!'
        />
        <Form.Field control={Button}>Submit</Form.Field>
      </Form>
      </div>
    )
  }
}

export default ProfileForm;
