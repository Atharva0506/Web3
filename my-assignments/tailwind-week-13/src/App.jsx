import { useRef, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Sidebar from "./components/Sidebar";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
     {/* <Sidebar/> */}

      <OTPInput/>
    </>
  );
}

const OTPInput = () => {
  const inputRefs = Array.from({ length: 6 }, () => useRef(null));

  const handleKeyDown = (e, index) => {
    if (e.key === 'Backspace' && index > 0 && !e.target.value) {
      // Focus on the previous input if backspace is pressed and the current input is empty
      inputRefs[index - 1].current.focus();
    }
  };

  const handleChange = (e, index) => {
    const value = e.target.value;
    if (value && index < 5) {
      // Move to the next input if the current one is filled
      inputRefs[index + 1].current.focus();
    }
  };

  return (
    <div style={{ display: 'flex', gap: '10px' }}>
      {inputRefs.map((ref, index) => (
        <input
          key={index}
          ref={ref}
          maxLength={1}
          onKeyDown={(e) => handleKeyDown(e, index)}
          onChange={(e) => handleChange(e, index)}
          style={{
            width: '40px',
            height: '40px',
            textAlign: 'center',
            fontSize: '20px',
          }}
        />
      ))}
    </div>
  );
};

export default App;
