import React, { useState, useEffect } from 'react';
import {
  Form,
  Input,
  Radio,
} from 'semantic-ui-react';
import '../profile.css';
import { useFirebaseApp, useFirestore, useFirestoreCollectionData } from 'reactfire';

function ProfileForm() {
  
  // Boolean variable to determine whether to show the profile or not
  //var showProfile = false;

  // Variable initialization for Firebase backend sync
  const firestore = useFirestore();
  const userCollection = firestore.collection('users');
  const firebase = useFirebaseApp();
  var currentUser = firebase.auth().currentUser;

  //Initial profile information for a new user
  var finalPennGroup = '';
  var finalJobs = [{org: "", job: ""}] 
  var finalJobInterests = [{org: "", job: ""}] 

  // PENN EDUCATION GROUP

  const EducationForm = () => {

    const [educationGroup, setEducationGroup] = useState(finalPennGroup);

    useEffect(() => {
      let isMounted = true; // let this flag denote mount status
      userCollection.doc(currentUser.uid).get().then(function(doc) {
        if (isMounted) {
          if (doc.exists) {
            finalPennGroup = doc.data()['pennGroup'];
            setEducationGroup(finalPennGroup);
          } else {
            finalPennGroup = 'Undergraduate Student';
            setEducationGroup(finalPennGroup);
          }
        }
      })
      return () => { isMounted = false }; // use effect cleanup to set flag false, if unmounted
    });

    return (
      <div>
        <p>{finalPennGroup}</p>
        <Form.Group inline>
          <Form.Field
            control={Radio}
            label='Undergraduate Student'
            value='Undergraduate Student'
            checked={educationGroup === 'Undergraduate Student'}
            onChange={() => {
              finalPennGroup = 'Undergraduate Student';
              return setEducationGroup('Undergraduate Student')}
            }
          />
          <Form.Field
            control={Radio}
            label="Graduate Student"
            value="Graduate Student"
            checked={educationGroup === "Graduate Student"}
            onChange={() => {
              finalPennGroup = "Graduate Student";
              return setEducationGroup("Graduate Student")}
            }
          />
          <Form.Field
            control={Radio}
            label='Alumni'
            value='Alumni'
            checked={educationGroup === 'Alumni'}
            onChange={() => {
              finalPennGroup = 'Alumni';
              return setEducationGroup('Alumni')}
            }
          />
        </Form.Group>
      </div>
    )
  }
  
  // PREVIOUS JOBS

  const JobForm = () => {

    const [jobForms, setJobForms] = useState(finalJobs);

/*     useEffect(() => {
      prevent
      let isMounted = true; // let this flag denote mount status
      userCollection.doc(currentUser.uid).get().then(function(doc) {
        if (isMounted) {
          if (doc.exists) {
            finalJobs = doc.data()['jobs'];
            setJobForms(finalJobs);
          }
        }
      })
      return () => { isMounted = false }; // use effect cleanup to set flag false, if unmounted
    });  */
  
    
    function SingleJob({org, job, index}) {
      const [newJob, setNewJob] = useState({org: org, job: job});

      const deleteJobForm = () => {
        finalJobs.splice(index, 1);
        setJobForms([...finalJobs]);
      } 

      return (
        <>
          <Form.Group widths="20">
            <Form.Field
              control={Input}
              placeholder='Company/Organization'
              onChange={(e) => {
                finalJobs[index]['org'] = e.target.value;
                return setNewJob({org: e.target.value})}}
              value={newJob['org']}
            />
            <Form.Field
              control={Input}
              placeholder='Role/Function'
              onChange={(e) => {
                finalJobs[index]['job'] = e.target.value;
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
      finalJobs.push({org: "", job: ""});
      setJobForms([...finalJobs]);
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
        finalJobInterests.splice(index, 1);
        setJobInterestForms([...finalJobInterests]);
      } 

      return (
        <>
          <Form.Group widths="20">
            <Form.Field
              control={Input}
              placeholder='Company/Organization'
              onChange={(e) => {
                finalJobInterests[index]['org'] = e.target.value;
                return setNewJobInterest({org: e.target.value})}}
              value={newJobInterest['org']}
            />
            <Form.Field
              control={Input}
              placeholder='Role/Function'
              onChange={(e) => {
                finalJobInterests[index]['job'] = e.target.value;
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
      finalJobInterests.push({org: "", job: ""});
      setJobInterestForms([...finalJobInterests]);
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

    for (let i = 0; i < finalJobs.length; i++) {
      if ((finalJobs[i]['org'] === "") || (finalJobs[i]['job'] === "")) {
        jobBlanks = true;
        alert('Please fill out all the entry boxes (or delete unused ones)!')
        break;
      }
    }

    if (!jobBlanks) {
      for (let i = 0; i < finalJobInterests.length; i++) {
        if ((finalJobInterests[i]['org'] === "") || (finalJobInterests[i]['job'] ===   "")) {
          alert('Please fill out all the entry boxes (or delete unused ones)!')
          break;
        } else {
          
          // Sync user input with Firebase backend database
          userCollection.doc(currentUser.uid).set({
            pennGroup: finalPennGroup,
            jobs: finalJobs,
            jobInterests: finalJobInterests,

          });  
        }
      }
    } 
  } 

  if (currentUser == null) {
    return (
      <div></div>
    );
  } else {
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
}

export default ProfileForm;
