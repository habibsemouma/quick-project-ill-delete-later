import React, { useState } from "react";
import "./App.css";

function App() {
    const [f0, setF0] = useState(0);
    const [Z0, setZ0] = useState(0);
    const [RL, setRL] = useState(0);
    const [choix, setChoix] = useState("BOB");
    const [CL, setCL] = useState(0);
    const [LL, setLL] = useState(0);

    const [output1, setOutput1] = useState(0);
    const [output2, setOutput2] = useState(0);

    const handleF0Change = (event) => {
        setF0(parseFloat(event.target.value));
    };

    const handleZ0Change = (event) => {
        setZ0(parseFloat(event.target.value));
    };

    const handleRLChange = (event) => {
        setRL(parseFloat(event.target.value));
    };

    const handleChoixChange = (event) => {
        setChoix(event.target.value);
    };

    const handleCLChange = (event) => {
        setCL(parseFloat(event.target.value));
    };

    const handleLLChange = (event) => {
        setLL(parseFloat(event.target.value));
    };

    const calculateResults = () => {
        if (choix === "CON") {
            const B1 = CL * 2 * Math.PI * f0;
            const X1 = -1 / B1;

            const Lpara = (X1 * Z0) / (2 * Math.PI * f0);
            const Cserie = -(1 / (2 * Math.PI * f0 * X1 * Z0));

            setOutput1(Lpara * 1e9);
            setOutput2(Cserie * 1e12);
        } else if (choix === "BOB") {
            const B1 = -1 / (LL * 2 * Math.PI * f0);
            const X1 = LL * 2 * Math.PI * f0;

            const Lpara = -(X1 * Z0) / (2 * Math.PI * f0);
            const Cserie = -(1 / (2 * Math.PI * f0 * X1 * Z0));

            setOutput1(Lpara * 1e9);
            setOutput2(Cserie * 1e12);
        } else {
            console.log("Choose a valid option.");
        }
    };

    return (
        <div id="main-wrapper">
            <div id="inputs-wrapper">

              <h1>Entrees</h1>

                <label>
                    f0(MHz):
                    <input type="number" value={f0} onChange={handleF0Change} />
                </label>

                <label>
                    Z0(Ohm):
                    <input type="number" value={Z0} onChange={handleZ0Change} />
                </label>

                <label>
                    RL(Ohm):
                    <input type="number" value={RL} onChange={handleRLChange} />
                </label>

                <label>
                    Choix:
                    <select value={choix} onChange={handleChoixChange}>
                        <option value="CON">CON</option>
                        <option value="BOB">BOB</option>
                    </select>
                </label>

                <label>
                    CL(pf):
                    <input type="number" value={CL} onChange={handleCLChange} />
                </label>

                <label>
                    LL(nH):
                    <input type="number" value={LL} onChange={handleLLChange} />
                </label>

                <button id="btn" onClick={calculateResults}>Calculate</button>
            </div>

            <div id="outputs-wrapper">
              <h1>Resultats</h1>
              <label>
              Lpara: 
              <input value={output1} readOnly></input>

              </label>
                <label>
                Cserie: 
                <input value={output2} readOnly></input>

                </label>
            </div>
        </div>
    );
}

export default App;
