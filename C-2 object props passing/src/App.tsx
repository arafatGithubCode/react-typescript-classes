import Product from "./components/Product";
import User from "./components/User";

const user1 = {
  name: "Arafat",
  age: 21,
  email: "arafat@gmail.com",
  isRegistered: false,
  lang: ["Bangla", "English"],
};

const user2 = {
  name: "Rimon",
  age: 22,
  email: "rimion@gmail.com",
  isRegistered: true,
  lang: ["Bangla", "English"],
};

const product1 = {
  title: "Apple",
  price: 30,
  desc: "Most expensive product",
  phones: ["sumsung", "apple", "Nokia"],
  fruits: [
    { id: 1, title: "Mango", price: 400 },
    { id: 2, title: "Banana", price: 500 },
    { id: 3, title: "Orange", price: 600 },
  ],
};

const App = () => {
  return (
    <div>
      <h1>User-Management</h1>
      <User user={user1} />
      <User user={user2} />
      <Product title="Mango" price={20} product={product1} />
    </div>
  );
};

export default App;
