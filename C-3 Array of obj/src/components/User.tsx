type userProps = {
  users: {
    id: number;
    name: string;
    age: number;
    lang: string[];
  }[];
};

const User = ({ users }: userProps) => {
  return (
    <div>
      {users.map((user, id) => {
        const { name, age, lang } = user;
        return (
          <div key={id} style={{ border: "1px solid red", margin: "5px" }}>
            <h4>Name: {name}</h4>
            <h4>Age: {age}</h4>
            <h3>Languages: </h3>
            {lang.map((language, index) => (
              <ul key={index}>
                <li>{language}</li>
              </ul>
            ))}
          </div>
        );
      })}
    </div>
  );
};

export default User;
