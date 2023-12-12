type UserProps = {
  user: {
    name: string;
    age: number;
    email: string;
    isRegistered: boolean;
    lang: string[];
  };
};

const User = ({ user }: UserProps) => {
  const { name, age, email, isRegistered, lang } = user;
  return (
    <div>
      <h2>{name}</h2>
      <p>Age: {age} years old</p>
      <p>{email}</p>
      {isRegistered ? <p>User is registered</p> : <p>User is not Registered</p>}

      {lang.map((language, index) => (
        <span key={index}>{language} </span>
      ))}
    </div>
  );
};

export default User;
