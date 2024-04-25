import { ethers } from "ethers";
import "./UrgentTransfer.css";

const UrgentTransfer = ({ state }) => {
  const urgentTransfer = async (event) => {
    event.preventDefault();
    const { contract } = state;
    const id = document.querySelector("#id3").value;
    const source = document.querySelector("#source3").value;
    const option1 = document.querySelector("#option3").value;
    const reason = document.querySelector("#reason3").value;

    const post = document.querySelector("#post3").value;

    try {
      const transaction = await contract.UrgentTransfer(
        id,
        source,
        option1,
        reason,
        post
      );
      await transaction.wait();
      alert("Transaction is done of Urgent Transfer");
      console.log("Transaction is done of Urgent Transfer");
     
    } catch (error) {
    console.log("Given Option does not have vacancy", error);
    alert("Given Option does not have vacancy")
  }


    
  };

  return (
    <>
    <div className = "uvdiv1">
      <div className="udiv1">

      <div className = "h1title">
          <h1 >Urgent Transfer</h1>
        </div>

        <div className="div1_1">
          <label id="l1">ID :</label>
          <input type="number" id="id3" placeholder="Enter Your ID" />
        </div>

        <br />

        <div className="div1_1">
          <label id="l1">Source : </label>
          <input
            type="text"
            id="source3"
            placeholder="Enter the source"
            list="locations"
          />
          <datalist id="locations">
            <option value="Mulund" />
            <option value="Chembeur" />
            <option value="Ghatkopar" />
            <option value="Kurla" />
            <option value="Parel" />
            <option value="Dadar" />
            <option value="Byculla" />
            <option value="Malabar" />
            <option value="Bandra" />
            <option value="Mahim" />
            <option value="Ville Parle" />
            <option value="Andheri" />
            <option value="Goregoan" />
            <option value="Kandivli" />
            <option value="Borivali" />
          </datalist>
        </div>

        <br />

        <div className="div1_1">
          <label id="l1">Option 3 : </label>
          <input
            type="text"
            id="option3"
            placeholder="Enter Your third Option"
            list="locations"
          />
          <datalist id="locations">
            <option value="Mulund" />
            <option value="Chembeur" />
            <option value="Ghatkopar" />
            <option value="Kurla" />
            <option value="Parel" />
            <option value="Dadar" />
            <option value="Byculla" />
            <option value="Malabar" />
            <option value="Bandra" />
            <option value="Mahim" />
            <option value="Ville Parle" />
            <option value="Andheri" />
            <option value="Goregoan" />
            <option value="Kandivli" />
            <option value="Borivali" />
          </datalist>
        </div>

        <br />

        <div className="div1_1">
          <label id="l1">Reason : </label>
          <input
            type="text"
            id="reason3"
            placeholder="Enter the reason"
          />
          <datalist id="reason3"></datalist>
        </div>

        <br />

        <div className="div1_1">
          <label id="l1">Post : </label>
          <input
            type="number"
            id="post3"
            placeholder="Enter your Post"
            list="posts"
          />
          <datalist id="posts">
            <option value="1" />
            <option value="2" />
            <option value="3" />
          </datalist>
        </div>
      </div>

      <button  type="button" onClick={(event) => urgentTransfer(event)} className="btnu btn-outline-secondary">
        Issue Transfer
      </button>
      </div>
    </>
  );
};

export default UrgentTransfer;
