import React from "react";

const ContactForm = () => {
  return (
    <div className="col-lg-8 col-md-8 col-sm-8">
      <div className="contact_form wow fadeInLeft">
        <form className="submitphoto_form">
          <input
            type="text"
            className="wp-form-control wpcf7-text"
            placeholder="Your name"
          />
          <input
            type="mail"
            className="wp-form-control wpcf7-email"
            placeholder="Email address"
          />
          <input
            type="text"
            className="wp-form-control wpcf7-text"
            placeholder="Subject"
          />
          <textarea
            className="wp-form-control wpcf7-textarea"
            cols="30"
            rows="10"
            placeholder="What would you like to tell us"
          />
          <input type="submit" value="Submit" className="wpcf7-submit" />
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
