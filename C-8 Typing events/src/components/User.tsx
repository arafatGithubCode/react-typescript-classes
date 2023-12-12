import { useState } from "react";

const User = () => {
  const [userName, setUserName] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserName(e.target.value);
  };

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    console.log(userName);
  };

  return (
    <div>
      <h2>Create New User</h2>
      <input
        type="text"
        placeholder="Enter name"
        onChange={handleChange}
        value={userName}
      />
      <p>{userName}</p>
      <button onClick={handleClick}>Show clg</button>
    </div>
  );
};

export default User;
