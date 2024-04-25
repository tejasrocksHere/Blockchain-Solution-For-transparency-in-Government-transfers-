import { ethers } from "ethers";
import "./UpdateVacancies.css";

const UpdateVacancies = ({ state }) => {
  const updateVacancies = async (event) => {
    event.preventDefault();
    const { contract } = state;
    const name = document.querySelector("#officeName").value;
    const post = document.querySelector("#post2").value;
    const vac = document.querySelector("#newVacancies").value;

    // Input validation
    if (!name || !post || !vac) {
      console.error("Please fill in all fields.");
      return;
    }

    // Convert input values to appropriate types if necessary
    const postInt = parseInt(post);
    const vacInt = parseInt(vac);

    // Check for valid numbers
    if (isNaN(postInt) || isNaN(vacInt)) {
      console.error("Post and Vacancies must be numbers.");
      return;
    }

    // Call the updateVacancies function on the contract
    try {
      const transaction = await contract.updateVacancies(name, postInt, vacInt);
      await transaction.wait();
      console.log("Vacancies updated successfully.");
      alert("Vacancies updated successfully.");
    } catch (error) {
      console.error("Failed to update vacancies:", error);
      alert("Failed to update vacancies:", error);
    }
  };

  return (
    <div className="uvdiv-container5">
      <div className="udiv1-container5">
        <div className="h1title5">
          <h1>Update Vacancies</h1>
        </div>

        <div className="div1_15">
          <label className = "labeluv" htmlFor="officeName">Office Name</label>
          <input
            type="text"
            id="officeName"
            placeholder="Enter office name"
            required
          />
        </div>

        <br />

        <div className="div1_15">
          <label className = "labeluv" htmlFor="post2">Post</label>
          <input
            type="text"
            id="post2"
            placeholder="Enter post"
            required
          />
        </div>

        <br />

        <div className="div1_15">
          <label className = "labeluv" htmlFor="newVacancies">New Vacancies</label>
          <input
            type="number"
            id="newVacancies"
            placeholder="Enter new vacancies"
            required
          />
        </div>

        <br />
        <form onSubmit={updateVacancies}>
          <button className="btnup5 btn-outline-secondary" type="submit">
            Update
          </button>
        </form>
      </div>
    </div>
  );
};

export default UpdateVacancies;
