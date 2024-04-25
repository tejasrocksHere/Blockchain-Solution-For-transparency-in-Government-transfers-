import { ethers } from "ethers";
import './AnnualTransfer.css'
//import UrgentTransfer from "./UrgentTransfer";


const AnnualTransfer = ({ state }) => {
  const annualTransfer = async (event) => {
    event.preventDefault();
    const { contract } = state;
    const id = document.querySelector("#id").value;
    const source = document.querySelector("#source").value;
    const option1 = document.querySelector("#option1").value;
    const option2 = document.querySelector("#option2").value;
    const option3 = document.querySelector("#option3").value;
    const post = document.querySelector("#post").value;
    

 
    
    try {
        const transaction = await contract.annualTransfer(id, source, option1, option2, option3, "annual transfer", post);
        await transaction.wait();
        const messageElement = document.getElementById("console-output");
        alert("Transaction is done of Annual Transfer")
        messageElement.innerHTML = "Transaction is done";
       
    } catch (error) {
      console.log("Given options are invalid", error);
      alert("Given options are invalid")
    }
  };

  return (
    <>
       <div className = "udiv1">

          <div className = "h1title">
              <h1>Annual Transfer</h1>
            </div>
              
            <div className = "div1_1">
                <label id = "l1">ID :</label>
                <input cols="100" type="number" id="id" placeholder="Enter Your ID" list="locations"/>
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
                    <option value="Goregoan"/>
                    <option value="Kandivli"/>
                    <option value="Borivali"/>
                    </datalist>
            </div>
            
        
            <br/>

            <div className = "div1_1">
                <label id = "l1">Source : </label>
                <input type="text" id="source" placeholder="Enter the source" list="locations"/>
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
                    <option value="Goregoan"/>
                    <option value="Kandivli"/>
                    <option value="Borivali"/>
                    </datalist>
            </div>
            

            <br/>

            <div className = "div1_1">
                <label id = "l1">Option 1 : </label>
                <input type="text" id="option1" placeholder="Enter Your first Option" list="locations"/>
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
                    <option value="Goregoan"/>
                    <option value="Kandivli"/>
                    <option value="Borivali"/>
                    </datalist>
                </div>

            <br/>

            <div className = "div1_1">
                <label id = "l1">Option 2 : </label>
                <input type="text" id="option2" placeholder="Enter Your second Option" list="locations"/>
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

            <div className = "div1_1">
                <label id = "l1">Option 3 : </label>
                <input type="text" id="option3" placeholder="Enter Your third Option" list="locations"/>
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

            <div className = "div1_1">
                <label id = "l1">Post : </label>
                <input type="number" id="post" placeholder="Enter your Post" list="posts"/>
                <datalist id="posts">
                    <option value="1"/>
                    <option value="2"/>
                    <option value="3"/>
                    </datalist>
            </div>
            <div id="console-output"></div>
{/* <img src="https://img.freepik.com/premium-vector/happy-smiling-cartoon-face-design-element-isolated-white-background_385073-428.jpg"/> */}

            <button type="button" className="btna btn-outline-secondary" onClick={(event) => annualTransfer(event)}>Issue Transfer</button>
        </div>
        
        
     
    </>
  );
};

export default AnnualTransfer;

/*
import React from 'react';
import './annual.css';

function Annual(){
    return(
        <>
      
       
            

      
        </>
    );
}

export default Annual;
/*<button type="submit" onClick={(event) => annualTransfer(event)}>Issue Transfer</button>

*/