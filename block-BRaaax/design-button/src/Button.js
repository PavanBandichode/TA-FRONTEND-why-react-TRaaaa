function Button(props) {
  return (
    <>
      <button>{props.label || "Button"}</button>
    </>
  );
}

export default Button;
