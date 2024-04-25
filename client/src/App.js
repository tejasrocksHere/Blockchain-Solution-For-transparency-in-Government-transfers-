import abi from "./contract/Transfer.json";
import {useState, useEffect} from 'react';
import {ethers} from "ethers";
import './App.css';
import AnnualTransfer from "./components/AnnualTransfer";

import { Route, Routes } from "react-router-dom"
import Home from "./components/Home"
import Navbar from "./components/Navbar";
import ViewInfo from "./components/ViewInfo";

import UpdateVacancies from "./components/UpdateVacancies";
import UrgentTransfer from "./components/UrgentTransfer";
//import LoginOption from "./components/LoginOption";
import Login from "./components/Login";
//import LoginOfficer from "./components/LoginOfficer";
import FormFill from "./components/formfill";
import Offices from "./components/Offices";
import FormData from "./components/formdata"
function App() {
  const [state, setState] = useState({
    provider: null,
    signer: null,
    contract: null
  });

  useEffect(() => {
    const connectWallet = async () => {
      const contractAddress = "0xC074b70904Cf4260AEb1ba2bdBff2BCD7648c7a9";
      const contractAbi = abi.abi;
      try {
        const {ethereum} = window;

        if (ethereum) {
          const account = await ethereum.request({
            method: "eth_requestAccounts"
          }); 
          console.log(account);
        }

        const provider = new ethers.providers.Web3Provider(ethereum);
        const signer = provider.getSigner();
        const contract = new ethers.Contract(
          contractAddress,
          contractAbi,
          signer
        );

        setState({provider, signer, contract});
      } catch (error) {
        console.log(error);
      }
    };
    connectWallet();
  }, []);

  console.log(state);

  return <div className="App">
    <Navbar/>
    

    <Routes>
    <Route path = "/" index element={<Home />} />
    <Route path = "/AnnualTransfer" element={<AnnualTransfer state={state}></AnnualTransfer>}/>
    <Route path = "/ViewInfo" element={<ViewInfo state={state}></ViewInfo>}/>
    <Route path="/UpdateVacancies" element={<UpdateVacancies state={state}></UpdateVacancies>}/>
    <Route path="/UrgentTransfer" element={<UrgentTransfer state={state}></UrgentTransfer>}/>
    <Route path="/Offices" element={<Offices state={state}></Offices>}/>
    <Route path="/Login" element={<Login state={state}/>}></Route>
    <Route path="/formfill" element={<FormFill state={state}/>}></Route>
    <Route path="/formdata" element={<FormData state={state}/>}></Route>
 
    </Routes>
   
   

  </div>;
}

export default App;

/*
  <AnnualTransfer state={state}></AnnualTransfer>
   <ViewInfo state={state}></ViewInfo>
   <UpdateVacancies state={state}></UpdateVacancies>


*/