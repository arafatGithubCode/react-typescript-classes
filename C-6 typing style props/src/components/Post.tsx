import { CSSProperties } from "react";

type styleProps = {
  headingStyle: CSSProperties;
  btnStyle: CSSProperties;
};

const Post = (props: styleProps) => {
  const { headingStyle, btnStyle } = props;
  return (
    <div>
      <h2 style={headingStyle}>Style by props</h2>
      <button style={btnStyle}>Style</button>
    </div>
  );
};

export default Post;
