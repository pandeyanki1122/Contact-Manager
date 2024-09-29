import React from "react";
import { Link } from "react-router-dom";
import { useLocation } from 'react-router-dom';
import user from "../images/user.png";

const ContactDetail = (props) => {
    const location = useLocation();  // Get the location object
  const { contact } = location.state || {};  // Extract the contact from state
    // const { name, email } = props.contact;
  
  return (
    <div className="main">
      <div className="ui card centered">
        <div className="image">
            <img src={user} alt="user" />
        </div>
        <div className="content">
            <div className="header">
                {contact.name}
            </div>
            <div className="description">
                {contact.email}
            </div>
        </div>

      </div>
      <div className="center-div">
      <Link to="/" >
      <button className="ui button blue center">Back to Contact List</button>
        </Link>
      </div>
    </div>
  );
};

export default ContactDetail;
