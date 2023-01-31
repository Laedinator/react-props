import React from "react";

function Card(props) {
    return (
      <div>
        <h2>{this.props.name}</h2>
        <img src={this.props.img} alt={this.props.alt} />
        <p>{this.props.tel} </p>
        <p>{this.props.email} </p>
      </div>
    );
  }

  export default Card;