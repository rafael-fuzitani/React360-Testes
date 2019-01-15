import React from "react";
import sunSvg from "./imgs/sun.svg";

const Regua = ({ index, currentImage, someFunction }) => {
  let reguaSunPosition = (100 / 180) * currentImage;

  return (
    <div>
      <button
        style={{ position: "absolute", top: "50%", left: "50%" }}
        onClick={someFunction}
      >
        Child {index}
      </button>
      <div className="sun-slider">
        <div className="sun-time-arrow-line">
          <img style={{ left: reguaSunPosition + "%" }} alt="" src={sunSvg} />
        </div>
        <ul className="sun-timer">
          <li>
            <p>6h</p>
            <i />
          </li>
          <li>
            <span />
          </li>
          <li>
            <p>7h</p>
            <i />
          </li>
          <li>
            <span />
          </li>
          <li>
            <p>8h</p>
            <i />
          </li>
          <li>
            <span />
          </li>
          <li>
            <p>9h</p>
            <i />
          </li>
          <li>
            <span />
          </li>
          <li>
            <p>10h</p>
            <i />
          </li>
          <li>
            <span />
          </li>
          <li>
            <p>11h</p>
            <i />
          </li>
          <li>
            <span />
          </li>
          <li>
            <p>12h</p>
            <i />
          </li>
          <li>
            <span />
          </li>
          <li>
            <p>13h</p>
            <i />
          </li>
          <li>
            <span />
          </li>
          <li>
            <p>14h</p>
            <i />
          </li>
          <li>
            <span />
          </li>
          <li>
            <p>15h</p>
            <i />
          </li>
          <li>
            <span />
          </li>
          <li>
            <p>16h</p>
            <i />
          </li>
          <li>
            <span />
          </li>
          <li>
            <p>17h</p>
            <i />
          </li>
          <li>
            <span />
          </li>
          <li>
            <p>18h</p>
            <i />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Regua;
