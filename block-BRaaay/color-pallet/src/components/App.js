import Color from "./Colors";
import colors from "./data";

function App() {
  return Object.keys(colors).map((key) => (
    <Color name={key} allColors={colors[key]} />
  ));
}
export default App;
