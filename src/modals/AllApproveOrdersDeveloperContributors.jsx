import { useContext } from "react";
import { AuthContext } from "../context/AuthProvider";
import axios from "axios";
import { getAllWorkingProjects, projectContributorsUpdate } from "../apis/orderOperation";


const AllApproveOrdersDeveloperContributors = ({ devContributors }) => {
    const { user } = useContext(AuthContext);
    

    
        const handleSentMailer = (addedDevContributors) =>{
        
        const {firstMember, secondMember, thirdMember, fourthMember, admin} = addedDevContributors;
        
        const mailInfo = {firstMember, secondMember, thirdMember, fourthMember, admin};
        console.log(mailInfo);
    
        getAllWorkingProjects(mailInfo)
        .then((res) =>{
            console.log(res);
        })
    }

    const handleDevContributorForm = (e) => {
      e.preventDefault();
  
      const target = e.target;


      const id = devContributors?._id
  
      const addedDevContributors = {
        firstMember: target.firstMemberEmail.value,
        secondMember: target.secondMemberEmail.value,
        thirdMember: target.thirdMemberEmail.value,
        fourthMember: target.fourthMemberEmail.value,
        description: target.description.value,
        admin: user?.email,
        status: "Working",
      };




      projectContributorsUpdate(id,addedDevContributors)
        .then((result) => {
          console.log(result);
          // if(result.acknowledged === true) {
          alert(` Developer selected for ${devContributors?.projectName}!`);
          handleSentMailer(addedDevContributors)
          // refetch()
          // }
        });
    };
  
    return (
      <div>
        <input
          type="checkbox"
          id="OrderListDevContributorsModal"
          className="modal-toggle"
        />
        <div className="modal">
          <div className="modal-box relative ">
            <label
              htmlFor="OrderListDevContributorsModal"
              className="btn btn-sm btn-circle absolute right-2 top-2"
            >
              ✕
            </label>
  
            <div>
              <form onSubmit={handleDevContributorForm}>
                <div>
                  <input
                    className="w-full my-2 border border-[#1DE8B1] rounded-lg  p-3 text-sm focus:outline-none"
                    type="text"
                    name="name"
                    placeholder="Project Name"
                    defaultValue={devContributors?.projectName}
                    readOnly
                  />
                </div>
  
                <div>
                  <input
                    className="w-full my-2 border border-[#1DE8B1] rounded-lg  p-3 text-sm focus:outline-none"
                    type="email"
                    name="firstMemberEmail"
                    placeholder="1st member email address"
                    required
                  />
                </div>
  
                <div>
                  <input
                    className="w-full my-2 border border-[#1DE8B1] rounded-lg  p-3 text-sm focus:outline-none"
                    type="email"
                    name="secondMemberEmail"
                    placeholder="2nd member email address"
                  />
                </div>
  
                <div>
                  <input
                    className="w-full my-2 border border-[#1DE8B1] rounded-lg  p-3 text-sm focus:outline-none"
                    type="email"
                    name="thirdMemberEmail"
                    placeholder="3rd member email address"
                  />
                </div>
  
                <div>
                  <input
                    className="w-full my-2 border border-[#1DE8B1] rounded-lg  p-3 text-sm focus:outline-none"
                    type="email"
                    name="fourthMemberEmail"
                    placeholder="4th member email address"
                  />
                </div>
  
                <div>
                  <textarea
                    className="w-full my-2 border border-[#1DE8B1] rounded-lg  p-3 text-sm focus:outline-none"
                    name="description"
                    placeholder="Enter Description"
                    rows="5"
                  />
                </div>
                <div>
                  <button className="py-2 px-8 border rounded-lg bg-[#1DE8B1] text-white">
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
};

export default AllApproveOrdersDeveloperContributors;