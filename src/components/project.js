import React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Chip from "@mui/material/Chip";
class Project extends React.Component {
  constructor(props) {
    super();
  }
  render() {
    return (
      <div class="project-holder">
        <div class="project-container" key={this.props.id}>
          <div class="image-container">
            <img class="preview-image" src={this.props.image} />
          </div>
          <div class="project-infos-container">
            <h1> {this.props.title} </h1>
            <div><Chip label={this.props.owner}  /></div>
            
            <p>{this.props.desc}</p>

            <Button
              variant="contained"
              href="#text-buttons"
              className="flex-end"
            >
              Contribuer
            </Button>
          </div>
        </div>
      </div>
    );
  }
}

export default Project;
