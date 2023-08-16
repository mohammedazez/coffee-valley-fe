import React from "react";

const footer = () => {
  const currentDate = new Date();
  const formattedDate = currentDate.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <>
      <div className="container-fluid ftr-container fixed-bottom">
        Today's Date: <strong> {formattedDate}</strong>
      </div>
    </>
  );
};

export default footer;
