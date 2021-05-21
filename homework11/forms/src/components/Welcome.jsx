import React from "react";

const Welcome = ({ information }) => {
  console.log(information);
  return (
    <div className="welcome">{`عزیز به سایت ما خوش آمدید ${information}`}</div>
  );
};
export default Welcome;
