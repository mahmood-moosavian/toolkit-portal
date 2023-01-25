import logo from "./logo.svg";
import "./App.css";
import Modal from "./components/modal/Modal";
import { useState } from "react";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <button onClick={() => setIsOpen(true)}>Click to Open Modal</button>

        <Modal handleClose={() => setIsOpen(false)} isOpen={isOpen}>
          This is Modal Content!
        </Modal>
      </header>
    </div>
  );
}

export default App;
