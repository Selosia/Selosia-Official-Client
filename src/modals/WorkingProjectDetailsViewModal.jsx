



const WorkingProjectDetailsViewModal = ({ projectData }) => {

    return (
      <div>
        <input
          type="checkbox"
          id="WorkingProjectDetailsViewModal"
          className="modal-toggle"
        />

        <div className="modal">
          <div className="modal-box relative ">
            <label
              htmlFor="WorkingProjectDetailsViewModal"
              className="btn btn-sm btn-circle absolute right-2 top-2"
            >
              ✕
            </label>
            
  
            <div>
              <h1 className="text-center">Working Project Details View Modal</h1>
  
              <div className="text-gray-700 py-3">
                <div className="flex justify-center my-3">
                  <img
                    src={projectData?.imageUrl}
                    className="w-24 h-24 rounded-full"
                    alt=""
                  />
                </div>
                <p>Buyer Email : {projectData?.orderSenderEmail}</p>
                <p>Project Name : {projectData?.projectName}</p>
                <p>Custom Domain : {projectData?.domainName}</p>
                <p>Project Category : {projectData?.category}</p>
                <p>Project Description : {projectData?.description}</p>
                <p>Project Deadline : {projectData?.deliveryDate}</p>
              </div>
            </div>


          </div>
        </div>
      </div>
    );
  };
  
  export default WorkingProjectDetailsViewModal;
  