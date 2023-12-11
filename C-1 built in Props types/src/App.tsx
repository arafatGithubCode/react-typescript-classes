import User from "./components/User";

const App = () => {
  return (
    <div>
      <h1>User-Management</h1>
      <User
        name="Arafat"
        age={21}
        email="arafat@gmail.com"
        isRegistered={false}
      />
      <User name="Rimon" age={22} email="mon@gmail.com" isRegistered={true} />
    </div>
  );
};

export default App;
