import Post from "./components/Post";

import "./app.css";

const btnStyle = {
  backgroundColor: "yellow",
  border: "2px solid red",
  padding: "1rem",
};

const App = () => {
  return (
    <div>
      <h3>React typescript</h3>
      <Post
        headingStyle={{ backgroundColor: "red", color: "white" }}
        btnStyle={btnStyle}
      />
    </div>
  );
};

export default App;
