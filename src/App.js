import React from 'react';
import { useState } from 'react';

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [checked1, setChecked1] = useState(false);
  const [checked2, setChecked2] = useState(false);
  const [checked3, setChecked3] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleCheckboxChange = (checkbox) => {
    if (checkbox === 1) {
      setChecked1(!checked1);
    } else if (checkbox === 2) {
      setChecked2(!checked2);
    } else if (checkbox === 3) {
      setChecked3(!checked3);
    }
  };

  const handleSubmit = () => {
    setSubmitted(true);
  };

  return (
    <main>
      <h1>Hi, I'm (your name)</h1>
      <img alt="My profile pic" src="https://via.placeholder.com/350" /> 
      <h2>About Me</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </p>
      <div>
        <a href="https://github.com">GitHub</a>
        <a href="https://linkedin.com">LinkedIn</a>
      </div>

      <div>
        <form>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" value={name} onChange={(e) => setName(e.target.value)} />

          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} />

          <label htmlFor="option1">
            <input type="checkbox" id="option1" name="option1" checked={checked1} onChange={() => handleCheckboxChange(1)} /> Option 1
          </label>

          <label htmlFor="option2">
            <input type="checkbox" id="option2" name="option2" checked={checked2} onChange={() => handleCheckboxChange(2)} /> Option 2
          </label>

          <label htmlFor="option3">
            <input type="checkbox" id="option3" name="option3" checked={checked3} onChange={() => handleCheckboxChange(3)} /> Option 3
          </label>

          <button type="button" onClick={handleSubmit}>Submit</button>
        </form>

        {submitted && <p>Thank you for submitting!</p>}
      </div>
    </main>
  );
}

export default App;
