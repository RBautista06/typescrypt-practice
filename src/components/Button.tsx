interface Props {
  children: string;
  color?: string; // ? indicates that this color is optional
  onClick: () => void;
}
const Button = ({ children, color = "primary", onClick }: Props) => {
  return (
    <>
      <div className={"btn btn-" + color} onClick={onClick}>
        {children}
      </div>
    </>
  );
};

export default Button;
