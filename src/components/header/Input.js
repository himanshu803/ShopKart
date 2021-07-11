import React from "react";

const user = {
    name: 'himanshu',
    designation: 'SE'
}

const Input = (props) => {
  console.log(props);
  return <div onClick={() => props.onTapMe(user)}>I am input</div>;
};

export default Input;
