import { useState } from "react";

export default function GameSettings({ onGetWord }){
    const [number, setNumber] = useState("");
    const [isChecked, setIsChecked] = useState(false);

    console.log("in GameSettings");
    return (
        <form className="settingsBox" onSubmit={async(ev) =>{
            ev.preventDefault();
            const settings = [number, isChecked];
            const url = "/api/words/:"+settings;
            const response = await fetch(url);
            const payload = await response.json();
            const word = payload.data;
            console.log("the word is: ");
            console.log(word);
            onGetWord(word, settings);
        }} >
            <h2>Game settings</h2>
            <div className="nbrLettersForm">
                <p>Number of letters:</p>
                <input type="number" value={number} defaultValue="4"onChange={(ev) =>{
                    setNumber(ev.target.value);
                }}></input>
            </div>
            <div className="repeatLetters">
                <p>Allow repeated letters?</p>
                <input type="checkbox" checked={isChecked} onChange={() =>{
                    setIsChecked(!isChecked);
                }}></input>
                <label htmlFor="repeatLettersTrue">Yes</label>
            </div>
            <button type="submit" className="startBtn" >Start</button>
        </form>
    );
}