import React, { Component } from "react";



function Previousarrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, backgroundColor: "blue",borderRadius:"50%",display:"flex",justifyContent:"center",alignItems:"center",padding:"4px" }}
      onClick={onClick}
    />
  );
}

export default Previousarrow ;