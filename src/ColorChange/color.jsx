import css from "./color.module.css";

function ColorChange(x) {
  return (
    <>
      <div className={css.Body} style={{ backgroundColor: x.BodyColor }}></div>
      <div className={css.holder}>
        <div>
          <h1>Random Color Generator!</h1>
          <h3>Press the button below to change color of the page</h3>
          <button onClick={x.func}>Press!</button>
          <h2 style={{ color: x.BodyColor, backgroundColor: "black" }}>
            {x.BodyColor}
          </h2>
        </div>
      </div>
    </>
  );
}
export default ColorChange;
