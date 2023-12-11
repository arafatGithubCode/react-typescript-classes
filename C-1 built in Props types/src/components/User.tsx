type UserProps = {
  name: string;
  age: number;
  email: string;
  isRegistered: boolean;
};

const User = ({ name, age, email, isRegistered }: UserProps) => {
  return (
    <div>
      <h2>{name}</h2>
      <p>Age: {age} years old</p>
      <p>{email}</p>
      {isRegistered ? <p>User is registered</p> : <p>User is not Registered</p>}
    </div>
  );
};

export default User;
