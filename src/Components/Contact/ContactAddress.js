import React from "react";
import { Link } from "react-router-dom";

const ContactAddress = () => {
  return (
    <div className="col-lg-4 col-md-4 col-sm-4">
      <div className="contact_address wow fadeInRight">
        <h3>Address</h3>
        <div className="address_group">
          <p>200 Lincoln Ave, Salinas, CA 93901</p>
          <p>Phone: 662-807-9585</p>
          <p>Email:contact@wpfdegree.com</p>
        </div>
        <div className="address_group">
          <ul className="footer_social">
            <li>
              <Link
                to="/"
                className="soc_tooltip"
                title=""
                data-placement="top"
                data-toggle="tooltip"
                data-original-title="Facebook"
              >
                <i className="fa fa-facebook" />
              </Link>
            </li>
            <li>
              <Link
                to="/"
                className="soc_tooltip"
                title=""
                data-placement="top"
                data-toggle="tooltip"
                data-original-title="Twitter"
              >
                <i className="fa fa-twitter" />
              </Link>
            </li>
            <li>
              <Link
                to="/"
                className="soc_tooltip"
                title=""
                data-placement="top"
                data-toggle="tooltip"
                data-original-title="Google+"
              >
                <i className="fa fa-google-plus" />
              </Link>
            </li>
            <li>
              <Link
                to="/"
                className="soc_tooltip"
                title=""
                data-placement="top"
                data-toggle="tooltip"
                data-original-title="Linkedin"
              >
                <i className="fa fa-linkedin" />
              </Link>
            </li>
            <li>
              <Link
                to="/"
                className="soc_tooltip"
                title=""
                data-placement="top"
                data-toggle="tooltip"
                data-original-title="Youtube"
              >
                <i className="fa fa-youtube" />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ContactAddress;
