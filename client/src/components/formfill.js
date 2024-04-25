import React , { useState , useEffect } from "react";
//import ReactDOM from "react-dom/client";
//import Test from './Test';
import './formfill.css';
import { Link } from 'react-router-dom';
import {db} from "./firebase-config";
import { collection , getDocs ,addDoc , doc , updateDoc} from "firebase/firestore";


function Formfill(){

    const [newName, setNewName] = useState("");
    const [newBatch, setNewBatch] = useState(0);
    const [newSource, setNewSource] = useState("");
    const [newOption1, setNewOption1] = useState("");
    const [newOption2, setNewOption2] = useState("");
    const [newOption3, setNewOption3] = useState("");
    const [newMessage, setNewMessage] = useState("");

    const [status, newStatus] = useState("");
    const [stage, newStage] = useState("");
    const [Duration, setDuration] = useState(0);
    const [ID, setID] = useState(0);

    const [users, setUsers] = useState([]);
    const usersCollectionRef = collection(db , "user");

    const createUser = async (e) => {
        await addDoc(usersCollectionRef, {
          name: newName,
          batch: newBatch,
          source: newSource,
          option1: newOption1,
          option2: newOption2,
          option3: newOption3,
          ID: ID,
          duration: Duration,
          status:"Send for approval",
          message: newMessage,
        });
        e.preventDefault();
        alert("Data sent successfully!");
      };

      const [inputValue, setInputValue] = useState('');

      function handleInputChange(event) {
        setInputValue(event.target.value);
      }

     /* const approve = async (id, _status) => {
        const userDoc = doc(db, "user", id);
        const newFields = { status: "Approved" };
        await updateDoc(userDoc, newFields);
        alert("Updated info sucessfully");
      }*/

    useEffect(()=>{

        const getUsers = async ()=>{
            const data  = await getDocs(usersCollectionRef);
            setUsers(data.docs.map((doc) => ({...doc.data() , id:doc.id})))
        };

        getUsers();
    }, []);

    return(
        <>
            <div className = "fdiv">
                
                <div id = "div1">
                    <label id="lbf">Name</label>
                    <input id = "id" type="text" placeholder='Name' onChange={(event) => { setNewName(event.target.value) }} />
                </div>

                <div id = "div1">
                    <label id="lbf">ID</label>
                    <input id = "id" type="text" placeholder='ID' onChange={(event) => { setID(event.target.value) }} />
                </div>

                <div id = "div1">
                    <label id="lbf">Duration</label>
                    <input id = "id" type="number" placeholder='Duration' onChange={(event) => { setDuration(event.target.value) }} />
                </div>

                <div id = "div1">
                    <label id="lbf">Batch</label>
                    <input id = "id" type="number" placeholder='batch' onChange={(event) => { setNewBatch(event.target.value) }} />
                </div>

                <div id = "div1">
                    <label id="lbf">Source</label>
                    <input id = "id" type="text" placeholder='source' onChange={(event) => { setNewSource(event.target.value) }} />
                </div>

                <div id = "div1">
                    <label id="lbf">Option1</label>
                    <input id = "id" type="text" placeholder='option1' onChange={(event) => { setNewOption1(event.target.value) }} />
                </div>

                <div id = "div1">
                    <label id="lbf">Option2</label>
                    <input id = "id" type="text" placeholder='option2' onChange={(event) => { setNewOption2(event.target.value) }} />
                </div>

                <div id = "div1">
                    <label id="lbf">Option3</label>
                    <input id = "id" type="text" placeholder='option3' onChange={(event) => { setNewOption3(event.target.value) }} />
                </div>

                <div id = "div12">
                    <label id="lbf">Message</label>
                    <textarea  className = "msg" placeholder='message' rows="5"  // Set the number of rows to 5
                    cols="100" onChange={(event)=>{setNewMessage(event.target.value)}} />
                </div>

                <button id = "butc" onClick={createUser} >Create User</button>
                <Link to = "/formdata"><button>Show Forms</button></Link>

            

                
            
            </div>
        </>
    );

}

export default Formfill;

/*import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { collection, addDoc } from 'firebase/firestore';
import { db } from './firebase-config';

const formfill = () => {
    const [newName, setNewName] = useState("");
    const [newBatch, setNewBatch] = useState(0);
    const [newSource, setNewSource] = useState("");
    const [newOption1, setNewOption1] = useState("");
    const [newOption2, setNewOption2] = useState("");
    const [newOption3, setNewOption3] = useState("");
    const [newMessage, setNewMessage] = useState("");

    const [status, newStatus] = useState("");
    const [stage, newStage] = useState("");
    const [Duration, setDuration] = useState(0);
    const [ID, setID] = useState(0);

    const [users, setUsers] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const usersCollectionRef = collection(db, 'user');

    // Store data in Firebase
    const createUser = async (e) => {
    await addDoc(usersCollectionRef, {
        name: newName,
        batch: newBatch,
        source: newSource,
        option1: newOption1,
        option2: newOption2,
        option3: newOption3,
        id: ID,
        duration: Duration,
        status:"Send for approval",
        message: newMessage,
    });
    e.preventDefault();
        alert("Data sent successfully!");
   };

   
  };

  return (
    <div>
      <h1>Input Page</h1>
      <div className = "fdiv">
                
                <div id = "div1">
                    <label id="lbf">Name</label>
                    <input id = "id" type="text" placeholder='Name' onChange={(event) => { setNewName(event.target.value) }} />
                </div>

                <div id = "div1">
                    <label id="lbf">ID</label>
                    <input id = "id" type="text" placeholder='ID' onChange={(event) => { setID(event.target.value) }} />
                </div>

                <div id = "div1">
                    <label id="lbf">Duration</label>
                    <input id = "id" type="number" placeholder='Duration' onChange={(event) => { setDuration(event.target.value) }} />
                </div>

                <div id = "div1">
                    <label id="lbf">Batch</label>
                    <input id = "id" type="number" placeholder='batch' onChange={(event) => { setNewBatch(event.target.value) }} />
                </div>

                <div id = "div1">
                    <label id="lbf">Source</label>
                    <input id = "id" type="text" placeholder='source' onChange={(event) => { setNewSource(event.target.value) }} />
                </div>

                <div id = "div1">
                    <label id="lbf">Option1</label>
                    <input id = "id" type="text" placeholder='option1' onChange={(event) => { setNewOption1(event.target.value) }} />
                </div>

                <div id = "div1">
                    <label id="lbf">Option2</label>
                    <input id = "id" type="text" placeholder='option2' onChange={(event) => { setNewOption2(event.target.value) }} />
                </div>

                <div id = "div1">
                    <label id="lbf">Option3</label>
                    <input id = "id" type="text" placeholder='option3' onChange={(event) => { setNewOption3(event.target.value) }} />
                </div>

                <div id = "div12">
                    <label id="lbf">Message</label>
                    <textarea  className = "msg" placeholder='message' rows="5"  // Set the number of rows to 5
                    cols="100" onChange={(event)=>{setNewMessage(event.target.value)}} />
                </div>

                <button id = "butc" onClick={createUser} >Create User</button>
            </div>
      <Link to="/display">Go to Data Display Page</Link>
    </div>
  );
};

export default formfill;*/
/*{
                users.map((user)=>{
                return <div key={user.id} className = "container1">
                <div className = "container">
                <h1>Name: {user.name}</h1>
                <h1>ID: {user.ID}</h1>
                <h1>Duration: {user.duration}</h1>
                <h1>Batch: {user.batch}</h1>
                <h1>Source: {user.source}</h1>
                <h1>Option1: {user.option1}</h1>
                <h1>Option2: {user.option2}</h1>
                <h1>Option3: {user.option3}</h1>
                <h1>Message: {user.message}</h1>
                <h1>Status:{user.status}</h1>

                <button id = "butc"  onClick={() => approve(user.id, user.status)}>Approve</button>
                </div>
                <hr />
                
                </div>
            })
            } */