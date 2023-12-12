import { useState } from "react";

type User = {
  id: number;
  name: string;
};

const User = () => {
  //   const [user, setUser] = useState<null | User>(null);

  const [user, setUser] = useState<User>({} as User);

  const handle = () => {
    setUser({ id: 1, name: "Arafat" });
  };

  return (
    <div>
      <button onClick={handle}>Add user</button>
      {/* <p>{user?.name}</p> */}

      <p>{user.name}</p>
    </div>
  );
};

export default User;
