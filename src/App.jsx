import { useState } from "react";
import ColorChange from "./ColorChange/color";
function App() {
  let [color, SetColor] = useState("#fff");

  let nums = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  let alphabets = ["a", "b", "c", "d", "e", "f"];
  const ChangeCl = () => {
    let str = "#";
    for (let i = 0; i <= 5; i++) {
      let x = Math.floor(Math.random() * 10);
      if (x > 5) {
        str += nums[x - 1];
      } else {
        str += alphabets[x];
      }
    }
    SetColor(str);
  };

  return (
    <>
      <ColorChange func={ChangeCl} BodyColor={color} />
    </>
  );
}

export default App;
