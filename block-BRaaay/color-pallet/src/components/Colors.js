function Color(props) {
  return (
    <div className="flex">
      <div className="flex-15">{props.name}</div>
      <ul>
        {props.allColors.map((color, i) => (
          <li>
            <div className="box" style={{ backgroundColor: color }}></div>
            <span className="flex">
              <p className="code">{i === 0 ? 50 : i * 100}</p>
              <p className="color">{color}</p>
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Color;
