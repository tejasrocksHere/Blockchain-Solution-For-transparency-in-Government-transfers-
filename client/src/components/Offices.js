import React, { useState, useEffect } from "react";
import './Offices.css';

const Offices = ({ state }) => {
  const [info, setInfo] = useState([]);
  const { contract } = state;

  useEffect(() => {
    const fetchInfo = async () => {
      const info = await contract.getOffices();
      // Add a check to ensure info is an array before setting it to state
      if (Array.isArray(info)) {
        setInfo(info);
      }
    };
    contract && fetchInfo();
  }, [contract]);

  return (
    <>
    <div className="data">
        {/* Render table only if info is an array */}
        <div>
        <p id = "op">Available Vacancies</p>
          <table style={{ position: 'sticky', top: 0, zIndex: 1 }}>
          <thead>
            <tr>
              <th>Office Name</th>
              <th>Post 1</th>
              <th>Post 2</th>
              <th>Post 3</th>
              
            </tr>
           </thead>
           <tbody>
            {Array.isArray(info) &&
              info.map((arr) => {
                return (
                  
                    
                      <tr className="data1" key={arr.timestamp}>
                        <td>{arr.name.toString()}</td>
                        <td className={arr.p1 == 0 ? "zero" : ""}>{arr.p1.toString()}</td>
                        <td className={arr.p2 == 0 ? "zero" : ""}>{arr.p2.toString()}</td>
                        <td className={arr.p3 == 0 ? "zero" : ""}>{arr.p3.toString()}</td>
                        
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

export default Offices;