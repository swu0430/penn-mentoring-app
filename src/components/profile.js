import React, { useState } from 'react';
import {
  Form,
  Input,
  Radio,
} from 'semantic-ui-react';
import '../profile.css';
import { preloadFirestore, useFirebaseApp, useFirestore, useFirestoreCollectionData, useFirestoreDocData, useFirestoreDocDataOnce, useUser } from 'reactfire';

function ProfileForm() {
  
  //Variable initialization for Firebase backend sync
  const firestore = useFirestore();
  const userCollection = firestore.collection('users');

  var educationGroupStatus = [true, false, false];
  var tempJobs = [{org: "", job: ""}] 
  var tempJobInterests = [{org: "", job: ""}] 

  // PENN EDUCATION GROUP

  const EducationForm = () => {

    const [educationGroup, setEducationGroup] = useState('Undergraduate Student');

    return (
      <div>
        <Form.Group inline>
          <Form.Field
            control={Radio}
            label='Undergraduate Student'
            value='Undergraduate Student'
            checked={educationGroup === 'Undergraduate Student'}
            onChange={() => {
              educationGroupStatus[0] = true;
              educationGroupStatus[1] = false;
              educationGroupStatus[2] = false;
              return setEducationGroup('Undergraduate Student')}
            }
          />
          <Form.Field
            control={Radio}
            label='Graduate Student'
            value='Graduate Student'
            checked={educationGroup === 'Graduate Student'}
            onChange={() => {
              educationGroupStatus[0] = false;
              educationGroupStatus[1] = true;
              educationGroupStatus[2] = false;
              return setEducationGroup('Graduate Student')}
            }
          />
          <Form.Field
            control={Radio}
            label='Alumni'
            value='Alumni'
            checked={educationGroup === 'Alumni'}
            onChange={() => {
              educationGroupStatus[0] = false;
              educationGroupStatus[1] = false;
              educationGroupStatus[2] = true;
              return setEducationGroup('Alumni')}
            }
          />
        </Form.Group>
      </div>
    )
  }

  // PREVIOUS JOBS

  const JobForm = () => {

    const [jobForms, setJobForms] = useState([{org: "", job: ""}]);
    
    function SingleJob({org, job, index}) {
      const [newJob, setNewJob] = useState({org: org, job: job});

      const deleteJobForm = () => {
        tempJobs.splice(index, 1);
        setJobForms([...tempJobs]);
      } 

      return (
        <>
          <Form.Group widths="20">
            <Form.Field
              control={Input}
              placeholder='Company/Organization'
              onChange={(e) => {
                tempJobs[index]['org'] = e.target.value;
                return setNewJob({org: e.target.value})}}
              value={newJob['org']}
            />
            <Form.Field
              control={Input}
              placeholder='Role/Function'
              onChange={(e) => {
                tempJobs[index]['job'] = e.target.value;
                setNewJob({job: e.target.value})}}
              value={newJob['job']}
            /> 
            <div class="divider"/>
            <button class="delete-job" onClick={deleteJobForm}>-</button>
          </Form.Group>
        </>
      )  
    }

    const addJobForm = () => {
      tempJobs.push({org: "", job: ""});
      setJobForms([...tempJobs]);
    } 

/*     const displayJobs = () => {
      for (let i = 0; i < jobForms.length; i++) {
        console.log(jobForms[i]['org'] + ": " + jobForms[i]['job']);
      }
    }   */


    return (
      <div>
        <div>
          {jobForms.map((job, index) => (
            <SingleJob index={index} org={jobForms[index]['org']} job={jobForms[index]['job']} />
          ))} 
        </div>
        <button class="add-job" onClick={addJobForm}>+</button>
      </div>
    )
  } 

  // JOB INTERESTS

  const JobInterestForm = () => {

    const [jobInterestForms, setJobInterestForms] = useState([{org: "", job: ""}]);
    
    function SingleJobInterest({org, job, index}) {
      const [newJobInterest, setNewJobInterest] = useState({org: org, job: job});

      const deleteJobInterestForm = () => {
        tempJobInterests.splice(index, 1);
        setJobInterestForms([...tempJobInterests]);
      } 

      return (
        <>
          <Form.Group widths="20">
            <Form.Field
              control={Input}
              placeholder='Company/Organization'
              onChange={(e) => {
                tempJobInterests[index]['org'] = e.target.value;
                return setNewJobInterest({org: e.target.value})}}
              value={newJobInterest['org']}
            />
            <Form.Field
              control={Input}
              placeholder='Role/Function'
              onChange={(e) => {
                tempJobInterests[index]['job'] = e.target.value;
                setNewJobInterest({job: e.target.value})}}
              value={newJobInterest['job']}
            /> 
            <div class="divider"/>
            <button class="delete-job-interest" onClick={deleteJobInterestForm}>-</button>
          </Form.Group>
        </>
      )  
    }

    const addJobInterestForm = () => {
      tempJobInterests.push({org: "", job: ""});
      setJobInterestForms([...tempJobInterests]);
    } 

/*     const displayJobs = () => {
      for (let i = 0; i < jobForms.length; i++) {
        console.log(jobForms[i]['org'] + ": " + jobForms[i]['job']);
      }
    }   */

    return (
      <div>
        <div>
          {jobInterestForms.map((job, index) => (
            <SingleJobInterest index={index} org={jobInterestForms[index]['org']} job={jobInterestForms[index]['job']} />
          ))} 
        </div>
        <button class="add-job-interest" onClick={addJobInterestForm}>+</button>
      </div>
    )
  } 

  const submitForm = () => {
    
    let jobBlanks = false;

    for (let i = 0; i < tempJobs.length; i++) {
      if ((tempJobs[i]['org'] === "") || (tempJobs[i]['job'] === "")) {
        jobBlanks = true;
        alert('Please fill out all the entry boxes (or delete unused ones)!')
        break;
      }
    }

    if (!jobBlanks) {
      for (let i = 0; i < tempJobInterests.length; i++) {
        if ((tempJobInterests[i]['org'] === "") || (tempJobInterests[i]['job'] ===   "")) {
          alert('Please fill out all the entry boxes (or delete unused ones)!')
          break;
        }
      }
    } 
    
    // Sync tempJobs and tempJobInterests with Firebase backend database here
    userCollection.doc("TestDoc2").set({
      jobs: tempJobs,
      jobInterests: tempJobInterests,
    });  
    
    //const userData = useFirestoreCollectionData(userQuery, {idField: 'TestId'});
  } 

  return (
    <div class="profile-border">
      <h3></h3>
      <h3>Penn Group</h3>
      <Form>
        <EducationForm />
      </Form>
      <br />
      <h3>Where You've Worked</h3>
      <Form>
        <JobForm />
      </Form>
      <br />
      <h3>Where You're Interested in Working</h3>
      <Form>
        <JobInterestForm />
      </Form>
      <br />
      <br />
      <br />
      <button class="submit" onClick={submitForm}>Submit</button>
    </div>
  );
}


export default ProfileForm;
