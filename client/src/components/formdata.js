import React, { useState, useEffect } from "react";
//import { getUsers } from "./formfill";
//import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { collection , getDocs ,addDoc ,updateDoc,doc } from 'firebase/firestore';
import { db } from './firebase-config';
//import { getDoc } from "firebase/firestore";
import './formdata.css'


function FormData (){
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const getUsers = async () => {
      const usersCollectionRef = collection(db, 'user');
      const data = await getDocs(usersCollectionRef);
      setUsers(data.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
    };

    getUsers();
  }, []);

  

  /*const approve = async (id, _status) => {
    const userDoc = doc(db, "user", id);
    const newFields = { status: "Approved" };
    await updateDoc(userDoc, newFields);
    alert("Updated info sucessfully");
  }*/

  const approve = async (id) => {
    const userDoc = doc(db, "user", id);
    const newFields = { status: "Approved" };
    try {
        await updateDoc(userDoc, newFields);
        alert("Updated info successfully");
       
    } catch (error) {
      console.log("Error fetching document:", error);
    }
  };

  return (
    <div>
      <h1 style={{marginTop : '0px' , color : 'black'}}>Data Display Page</h1>
      <Link to="/formfill" style = {{color : 'black'}}>Go back to Input Page</Link>
     
      {
                users.map((user)=>{
                return (<div key={user.id} className = "container1">
                <div className = "container">
                <div id='odata'>
                  <h4 style ={{color : 'red' , marginRight : '10px'}}>Name:</h4><h4> {user.name}</h4>
                </div>
                <div id='odata'>
                  <h4 style ={{color : 'red' , marginRight : '10px'}}>ID:</h4><h4> {user.ID}</h4>
                </div>
                <div id='odata'>
                  <h4 style ={{color : 'red' , marginRight : '10px'}}>Duration:</h4><h4> {user.duration}</h4>
                </div>
                <div id='odata'>
                  <h4 style ={{color : 'red' , marginRight : '10px'}}>Batch:</h4><h4> {user.batch}</h4>
                </div>
                <div id='odata'>
                  <h4 style ={{color : 'red' , marginRight : '10px'}}>Source: </h4><h4>{user.source}</h4>
                </div>
                <div id='odata'>
                  <h4 style ={{color : 'red' , marginRight : '10px'}}>Option1:</h4><h4> {user.option1}</h4>
                </div>
                <div id='odata'>
                  <h4 style ={{color : 'red' , marginRight : '10px'}}>Option2:</h4><h4> {user.option2}</h4>
                </div>
                <div id='odata'>
                  <h4 style ={{color : 'red' , marginRight : '10px'}}>Option3:</h4><h4> {user.option3}</h4>
                </div>
                <div id='odata'>
                  <h4 style ={{color : 'red', marginRight : '10px'}}>Message:</h4><h4> {user.message}</h4>
                </div>
                <div id='odata'>
                  <h4 style ={{color : 'red' , marginRight : '10px'}}>Status:</h4><h4>{user.status}</h4>
                </div>
  
                <button id = "butc"  onClick={() => approve(user.id, user.status)}>Approve</button>
                </div>
                <hr />
                
                </div>
                )
            })
            }
    </div>
  );
};


export default FormData;
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
            } 
            <Link to="/formfill">Go back to Input Page</Link>
            
            
            */