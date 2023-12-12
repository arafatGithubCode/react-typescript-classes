import User from "./components/User";

const userInfo = [
  {
    id: 1,
    name: "Arafat",
    age: 21,
    lang: ["Bangla", "English"],
  },
  {
    id: 2,
    name: "Rimon",
    age: 21,
    lang: ["Bangla", "English"],
  },
  {
    id: 3,
    name: "MOn",
    age: 21,
    lang: ["Bangla", "English"],
  },
];

const App = () => {
  return (
    <div>
      <User users={userInfo} />
    </div>
  );
};

export default App;
