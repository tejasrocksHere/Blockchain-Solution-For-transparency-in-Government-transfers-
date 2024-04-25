/*
import { useState, useEffect } from "react";

const ViewInfo = ({ state }) => {
  const [info, setInfo] = useState([]);
  const { contract } = state;

  useEffect(() => {
    const fetchInfo = async () => {
      const info = await contract.getInfo();
      setInfo(info);
    };
    contract && fetchInfo();
  }, [contract]);

  return (
    <>
  <p>Message</p>
  {info.map((arr)=>{return(
    <table key={arr.timestamp}>
      <tbody>
        <tr>
          <td>{arr.id}</td>
          <td>{arr.source}</td>
          <td>{arr.destination}</td>
          <td>{arr.post}</td>
          
        </tr>
      </tbody>
      
    </table>

  )})}


    </>
);

};


export default ViewInfo;*/
import React, { useState, useEffect } from "react";
import './ViewInfo.css';


const ViewInfo = ({ state }) => {
  const [info, setInfo] = useState([]);
  const { contract } = state;

  useEffect(() => {
    const fetchInfo = async () => {
      const info = await contract.getInfo();
      // Add a check to ensure info is an array before setting it to state
      if (Array.isArray(info)) {
        setInfo(info);
      }
    };
    contract && fetchInfo();
  }, [contract]);

  return (
    <>

    <div className = "data">
     {/* Render table only if info is an array */}
      <div>
      <p id = "op">Transfer Information</p>
     

      <table id = "table1">
          <thead >
            <tr className="heading">
              <th style={{marginRight : '50%'}}>Officer's ID</th>
              <th>Source</th>
              <th>Destination</th>
              <th>Post</th>
              
            </tr>
           </thead>
           <tbody>
      {Array.isArray(info) &&
        info.map((arr) => {
          return (
            
                <tr key={arr.timestamp} >
                  <td>{arr.id.toString()}</td>
                  <td>{arr.source.toString()}</td>
                  <td>{arr.destination.toString()}</td>
                  <td>{arr.post.toString()}</td>
                </tr>
              
          );
          
        })}
        </tbody>
        </table>
        </div>
    </div>
    </>
  );
};

export default ViewInfo;

