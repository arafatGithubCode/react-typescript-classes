type buttonProps = {
  children: React.ReactNode;
};
const Button = (props: buttonProps) => {
  return <div>{props.children}</div>;
};

export default Button;
