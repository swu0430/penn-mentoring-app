import React, { useState } from 'react';
import {
  Button,
  Checkbox,
  Form,
  Input,
  Radio,
  Select,
  TextArea,
} from 'semantic-ui-react';

/* const options = [
  { key: 'm', text: 'Male', value: 'male' },
  { key: 'f', text: 'Female', value: 'female' },
  { key: 'o', text: 'Other', value: 'other' },
] */


function ProfileForm() {
  
  /* const EducationForm = () => {
    return (
      <div>
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
      </div>
    )
  } */

/*   const HobbiesForm = () => {
    return (
      <Form.Field
        control={TextArea}
        label='Hobbies'
        placeholder='List some hobbies so others can get to know you better!'
      />
    )
  } */

  var tempJob = [{org: "", job: ""}] 

  const JobForm = () => {

    const [jobForms, setJobForms] = useState([{org: "", job: ""}]);
    
    function SingleJob({org, job, index}) {
      const [newJob, setNewJob] = useState({org: org, job: job});

      return (
        <Form.Group widths="20">
          <Form.Field
            control={Input}
            label='Company/Org'
            placeholder='Company/Org'
            onChange={(e) => {
              tempJob[index]['org'] = e.target.value;
              return setNewJob({org: e.target.value})}}
            value={newJob['org']}
          />
          <Form.Field
            control={Input}
            label='Role/Function'
            placeholder='Role/Function'
            onChange={(e) => {
              tempJob[index]['job'] = e.target.value;
              setNewJob({job: e.target.value})}}
            value={newJob['job']}
          />
        </Form.Group>
      )  
    }

    const addJobForm = () => {
      tempJob.push({org: "", job: ""});
      setJobForms([...tempJob]);
    } 

/*     const displayJobs = () => {
      for (let i = 0; i < jobForms.length; i++) {
        console.log(jobForms[i]['org'] + ": " + jobForms[i]['job']);
      }
    }   */

    return (
      <div>
        <div>
          {jobForms.map(({org, job}, index) => (
            <SingleJob index={index} org={jobForms[index]['org']} job={jobForms[index]['job']} />
          ))} 
        </div>
        <button onClick={addJobForm}>+</button>
      </div>
    )
  } 

  return (
    <div>
      <Form>
        <JobForm />
      </Form>
    </div>
  );
}





//<EducationForm />
//<HobbiesForm />


/* class ProfileForm extends Component {
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
} */

export default ProfileForm;
