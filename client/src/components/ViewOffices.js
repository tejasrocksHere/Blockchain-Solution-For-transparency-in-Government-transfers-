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

const ViewOffices = ({ state }) => {
  const [infoO, setInfoO] = useState([]);
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
      <p>Message</p>
      {/* Render table only if info is an array */}
      {Array.isArray(info) &&
        info.map((arr) => {
          return (
            <table key={arr.timestamp}>
              <tbody>
                <tr>
                  <td>{arr.id.toString()}</td>
                  <td>{arr.source.toString()}</td>
                  <td>{arr.destination.toString()}</td>
                  <td>{arr.post.toString()}</td>
                </tr>
              </tbody>
            </table>
          );
          
        })}
    </>
  );
};

export default ViewInfo;

