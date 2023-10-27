import Swal from "sweetalert2";
import instance from "../axios";

//* .......... Save a new order ..........

export const orderNewProject = async (orderInfo) => {
  try {
    const response = await instance.post(
      "api/v1/project/create-orderedProject",
      orderInfo
    );
    const data = await response;
    console.log(data);
    if (data?.status === "success") {
      Swal.fire("Wow😲", "Order Successfully Submitted", "success");
    }
    return data;
  } catch (error) {
    Swal.fire({
      icon: "error",
      title: "Oops👎",
      text: "Something went wrong!",
    });
    console.log(error.message);
  }
};

//* .......... Get all pending orders ..........

export const getAllPendingOrders = async () => {
  try {
    const response = await instance.get("api/v1/project/all-pendingOrders");
    const data = await response;
    console.log(data);
    return data?.data;
  } catch (error) {
    console.log(error.message);
  }
};

//* .......... handle order request approve ..........

export const approveOrder = async (orderId, updateOrder) => {
  try {
    const response = await instance.put(
      `api/v1/project/update-orderStatus/${orderId}`,
      updateOrder
    );
    console.log(response);
    return response;
  } catch (error) {
    console.log(error.message);
  }
};

//* .......... Update user role by clicking approve button ..........

export const orderSenderRoleUpdate = async (
  orderSenderEmail,
  updateBuyerRole
) => {
  try {
    const response = await instance.put(
      `api/v1/user/role-update?email=${orderSenderEmail}`,
      updateBuyerRole
    );
    console.log(response);
    return response;
  } catch (error) {
    console.log(error.message);
  }
};

//* .......... Get all approve orders ..........

export const getAllApproveProjects = async () => {
  try {
    const response = await instance.get("api/v1/project/all-approvedOrders");
    const data = await response;
    console.log(data);
    return data?.data;
  } catch (error) {
    console.log(error.message);
  }
};

//* .......... Get all working orders ..........

export const getAllWorkingProjects = async () => {
  try {
    const response = await instance.get("api/v1/project/all-workingOrders");
    const data = await response;
    console.log(data);
    return data?.data;
  } catch (error) {
    console.log(error.message);
  }
};

//* .......... Update project Contributors by clicking set Contributors button ..........

export const projectContributorsUpdate = async (id, addedDevContributors) => {
  try {
    const response = await instance.put(
      `api/v1/project/update-contributors/${id}`,
      addedDevContributors
    );
    console.log(response);
    return response;
  } catch (error) {
    console.log(error.message);
  }
};

//* .......... send email a to all selected project developers  ..........

export const sendSelectedProjectDevelopers = async (mailInfo) => {
  try {
    const response = await instance.post(
      "api/v1/sendMail/mailToContributor",
      mailInfo
    );
    const data = await response;
    console.log(data);
    return data?.data;
  } catch (error) {
    console.log(error.message);
  }
};
