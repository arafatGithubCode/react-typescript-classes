import { useState, ChangeEvent, FormEvent } from "react";

interface User {
  userName: string;
  userEmail: string;
}

const User = () => {
  const [user, setUser] = useState<User>({ userName: "", userEmail: "" });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUser((prevUser) => ({ ...prevUser, [name]: value }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newUser = { user };
    console.log(newUser);
  };

  return (
    <div>
      <h2>Create user</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name: </label>
          <input
            type="text"
            name="userName"
            value={user.userName}
            onChange={handleChange}
          />
        </div>
        <br />
        <div>
          <label htmlFor="email">Email: </label>
          <input
            type="email"
            name="userEmail"
            value={user.userEmail}
            onChange={handleChange}
          />
        </div>
        <br />
        <button type="submit">Create user</button>
      </form>
    </div>
  );
};

export default User;
