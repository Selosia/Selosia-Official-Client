





const WorkingProjectDevelopersViewModal = ({ projectContributors }) => {

    return (
      <div>
        <input
          type="checkbox"
          id="WorkingProjectDevelopersViewModal"
          className="modal-toggle"
        />
        <div className="modal">
          <div className="modal-box relative ">
            <label
              htmlFor="WorkingProjectDevelopersViewModal"
              className="btn btn-sm btn-circle absolute right-2 top-2"
            >
              ✕
            </label>


            <div>
              <h1 className="text-center">
                Project Name : {projectContributors?.projectName}
              </h1>
  
              <div className="text-gray-700 py-3">
                <div className="flex justify-center my-3">
                  <img
                    src={projectContributors?.imageUrl}
                    className="w-24 h-24 rounded-full"
                    alt=""
                  />
                </div>
                <h1 className="font-semibold">Developers -</h1>
                <p>First Member : {projectContributors?.firstMember}</p>
                <p>Second Member : {projectContributors?.secondMember}</p>
                <p>Third Member : {projectContributors?.thirdMember}</p>
                <p>Fourth Member : {projectContributors?.fourthMember}</p>
              </div>
            </div>



          </div>
        </div>
      </div>
    );
  };
  
  export default WorkingProjectDevelopersViewModal;
  