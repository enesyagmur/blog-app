import React from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import UpdateUser from "./UpdateUser";
import "./account.scss";

const Account = () => {
  return (
    <div className="account">
      <UpdateUser />
      <Sidebar />
    </div>
  );
};

export default Account;
