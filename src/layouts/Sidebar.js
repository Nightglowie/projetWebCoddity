import React from "react";

class Sidebar extends React.Component{
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div
      style={{
        border: "2px solid #e6e6e6",
        maxWidth: 960,
        padding: "0.5rem",
        marginBottom: "25px"
      }}
      >
      <strong>{props.title}.</strong> {props.description}
      </div>
      );
  }
}

export default Sidebar;