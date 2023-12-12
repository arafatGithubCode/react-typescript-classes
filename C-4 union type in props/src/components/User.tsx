// type demo1 = {
//   status: "loading";
// };
// type demo2 = {
//   status: "error";
// };
// type demo3 = {
//   status: "success";
// };
// type demo = demo1 | demo2 | demo3;

// type demo1 = {
//   status: number;
// }
// type demo2 = {
//   status: boolean;
// }
// type demo = demo1 | demo2;

type dataFetch = {
  status: "loading" | "error" | "success";
};
const User = ({ status }: dataFetch) => {
  if (status === "loading") {
    return <h3>Loading....</h3>;
  } else if (status === "error") {
    return <h3>Error: data couldn't fetch</h3>;
  }

  return (
    <>
      <h3>data fetching is successful</h3>
    </>
  );
};

export default User;
