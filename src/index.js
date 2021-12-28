import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

ReactDOM.render(
  <h1>Password Generator</h1>,
  document.querySelector("[class=\"generalText\"]")
);

ReactDOM.render(
  <div className="passwordBlock">
    <div className="enterPasswordText">Enter Password Text Below</div>
    <div className="enterPasswordInput">
      <form>
        <label>
          <input type="" name="e34535" />
          <input type="submit" value="🔒 Generate Password 🔒" />
        </label>
      </form>
    </div>
  </div>,
  document.querySelector("[class=\"passwordBlock\"]")
);

// ReactDOM.render(
//   <div className="outputResult">
//     <form>
//       <label>
//         <input type=""/>
//       </label>
//     </form>
//   </div>
//   document.querySelector("[class=\"passwordBlock\"]")
// );