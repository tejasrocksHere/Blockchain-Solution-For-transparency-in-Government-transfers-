import React, { useState } from 'react';
import './optionform.css'

function TransferRequestPage() {
  const [name, setName] = useState('');
  const [id, setId] = useState('');
  const [presentPoliceStation, setPresentPoliceStation] = useState('');
  const [reasonForTransfer, setReasonForTransfer] = useState('');
  //const [targetPoliceStation, setTargetPoliceStation] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Add your submit logic here
    console.log(`Name: ${name}, ID: ${id}, Present Police Station: ${presentPoliceStation}, Reason for Transfer: ${reasonForTransfer}`);
  };
  //Target Police Station: ${targetPoliceStation}
  
  return (
    <div className="transfer-request">
        
            <h1 className='h1b'>Transfer Request Form</h1>
                
            <br/>
        
      
      <div className  = "form1" onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Enter your name"
          required
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
        <label htmlFor="id">ID:</label>
        <input
          type="text"
          id="id0"
          name="id"
          placeholder="Enter your ID"
          required
          value={id}
          onChange={(event) => setId(event.target.value)}
        />
        <label htmlFor="presentPoliceStation">Present Police Station:</label>
        <input
          type="text"
          id="presentPoliceStation"
          name="presentPoliceStation"
          placeholder="Enter your present police station"
          required
          value={presentPoliceStation}
          onChange={(event) => setPresentPoliceStation(event.target.value)}
          list="locations"
        />
        <datalist id="locations">
                    <option value="Mulund"/>
                    <option value="Chembeur"/>
                    <option value="Ghatkopar"/>
                    <option value="Kurla"/>
                    <option value="Parel"/>
                    <option value="Dadar"/>
                    <option value="Byculla"/>
                    <option value="Malabar"/>
                    <option value="Bandra"/>
                    <option value="Mahim"/>
                    <option value="Ville Parle"/>
                    <option value="Andheri"/>
                    <option value="Goregaon"/>
                    <option value="Kandivli"/>
                    <option value="Borivali"/>
                    </datalist>
        <label htmlFor="reasonForTransfer">Reason for Transfer:</label>
        <input
          type="text"
          id="reasonForTransfer"
          name="reasonForTransfer"
          placeholder="Enter reason for transfer"
          required
          value={reasonForTransfer}
          onChange={(event) => setReasonForTransfer(event.target.value)}
          
        />
        

        <label htmlFor="targetPoliceStation">Target Police Station:</label>
        
          
            <br/>

            <div className = "div1_10">
                <label id = "l1o">Option 1 : </label>
                <input type="text" id="option10" placeholder="Enter first Option" list="locations"/>
                <datalist id="locations">
                    <option value="Mulund"/>
                    <option value="Chembeur"/>
                    <option value="Ghatkopar"/>
                    <option value="Kurla"/>
                    <option value="Parel"/>
                    <option value="Dadar"/>
                    <option value="Byculla"/>
                    <option value="Malabar"/>
                    <option value="Bandra"/>
                    <option value="Mahim"/>
                    <option value="Ville Parle"/>
                    <option value="Andheri"/>
                    <option value="Goregaon"/>
                    <option value="Kandivli"/>
                    <option value="Borivali"/>
                    </datalist>
                </div>

            <br/>

            <div className = "div1_10">
                <label id = "l1">Option 2 : </label>
                <input type="text" id="option20" placeholder="Enter second Option" list="locations"/>
                <datalist id="locations">
                    <option value="Mulund"/>
                    <option value="Chembeur"/>
                    <option value="Ghatkopar"/>
                    <option value="Kurla"/>
                    <option value="Parel"/>
                    <option value="Dadar"/>
                    <option value="Byculla"/>
                    <option value="Malabar"/>
                    <option value="Bandra"/>
                    <option value="Mahim"/>
                    <option value="Ville Parle"/>
                    <option value="Andheri"/>
                    <option value="Goregaon"/>
                    <option value="Kandivli"/>
                    <option value="Borivali"/>
                    </datalist>

            </div>
            
            <br/>

            <div className = "div1_10">
                <label id = "l10">Option 3 : </label>
                <input type="text" id="option30" placeholder="Enter third Option" list="locations"/>
                <datalist id="locations">
                    <option value="Mulund"/>
                    <option value="Chembeur"/>
                    <option value="Ghatkopar"/>
                    <option value="Kurla"/>
                    <option value="Parel"/>
                    <option value="Dadar"/>
                    <option value="Byculla"/>
                    <option value="Malabar"/>
                    <option value="Bandra"/>
                    <option value="Mahim"/>
                    <option value="Ville Parle"/>
                    <option value="Andheri"/>
                    <option value="Goregaon"/>
                    <option value="Kandivli"/>
                    <option value="Borivali"/>
                    </datalist>
            </div>

            <br/>

            <div className = "div1_10">
                <label id = "l10">Post : </label>
                <input type="number" id="post0" placeholder="Enter your Post" list="posts"/>
                <datalist id="posts">
                    <option value="1"/>
                    <option value="2"/>
                    <option value="3"/>
                    </datalist>
            </div>
           
        </div>
        
        <button type="submit">Submit</button>
      
    </div>
  );
}

export default TransferRequestPage;
