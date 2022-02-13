import React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

class Project extends React.Component {
  render() {
    return (
      <div class="project-container">
        <div class="image-container">
          <img src="https://m.media-amazon.com/images/I/81wGn2TQJeL._SX425_.jpg" />
        </div>
        <div class="project-infos-container">
          <h1> Title </h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
            blanditiis tenetur unde suscipit, quam beatae rerum inventore
            consectetur, neque doloribus, cupiditate numquam dignissimos laborum
            fugiat deleniti? Eum quasi quidem quibusdam.
          </p>
          <Button variant="contained" href="#text-buttons">
            Contribuer
          </Button>
        </div>
      </div>
    );
  }
}

export default Project;
