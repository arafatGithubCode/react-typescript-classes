type productProps = {
  title: string;
  price: number;
  product: {
    title: string;
    price: number;
    desc: string;
    phones: string[];
    fruits: { id: number; title: string; price: number }[];
  };
};
const Product = ({ title, price, product }: productProps) => {
  return (
    <>
      <h1>Product</h1>
      <p>Product' name: {title}</p>
      <p>Product's price: {price}</p>
      <strong>{product.title}</strong> <br />
      <strong>{product.price}</strong> <br />
      <strong>{product.desc}</strong>
      <h4>List of phones</h4>
      <div style={{ border: "1px solid black" }}>
        {product.phones.map((phone, index) => (
          <ul key={index}>
            <li>{phone}</li>
          </ul>
        ))}
      </div>
      <h4>List of fruits</h4>
      <div style={{ border: "1px solid black" }}>
        {product.fruits.map((fruit, id) => (
          <div key={id}>
            <p>Fruits: {fruit.title}</p>
            <p>Fruits: {fruit.price}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default Product;
