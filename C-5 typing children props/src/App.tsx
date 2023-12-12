import Button from "./components/Button";
import Post from "./components/Post";

import "./app.css";

const App = () => {
  return (
    <div>
      <h3>Children props</h3>
      <Button>Click me</Button>
      <Post />
    </div>
  );
};

export default App;
