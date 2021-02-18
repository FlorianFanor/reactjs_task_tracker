import Button from "./Button";

const Header = ({ onClick, showText }) => {
  return (
    <header className="header">
      <h1>Task tracker</h1>
      <Button
        color={showText ? "red" : "green"}
        text={showText ? "Close" : "Add"}
        onClick={onClick}
      />
    </header>
  );
};

export default Header;
