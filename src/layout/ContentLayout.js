import React from "react";
import Movienavbar from "../components/navbar/Movienavbar";

const ContentLayout = ({ children }) => {
  return (
    <div>
      <Movienavbar />
      {children}
    </div>
  );
};

export default ContentLayout;
