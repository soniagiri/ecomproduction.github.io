import React from "react";
import "./signup.css";
import { Input, PrimaryBtn } from "../../constant/index";

const SignUp = () => {
  return (
    <section className="container | section_form | section'">
      <div className="form_container">
        <Input type="text" label="full name: " data-type="name" />
        <Input type="text" label="username: " />
        <Input type="email" label="email: " />
        <Input type="number" label="phone: " />
        <Input type="password" label="password: " />
        <Input type="password" label="confirm password: " />
        
        <div>
          <PrimaryBtn type="submit" >Sign up</PrimaryBtn>
        </div>
      </div>
    </section>
  );
};

export default SignUp;
