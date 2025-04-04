import { useState } from "react";

export default function GameSettings(){
    const [number, setNumber] = useState("");
    const [isChecked, setIsChecked] = useState(false);

    console.log("in GameSettings");
    return (
        <form className="settingsBox" onSubmit={async(ev) =>{
            ev.preventDefault();
            console.log("in onSubmit");
            console.log(number);
            console.log(isChecked);
            const settings = [number, isChecked];
            const url = "/api/words/:"+settings;
            const response = await fetch(url);
            console.log(response);
            setNumber("");
            
        }} >
            <h2>Spelinställningar</h2>
            <div className="nbrLettersForm">
                <p>Antal bokstäver:</p>
                <input type="number" value={number} onChange={(ev) =>{
                    setNumber(ev.target.value);
                }}></input>
            </div>
            <div className="repeatLetters">
                <p>Får bokstäver upprepas i ordet?</p>
                <input type="checkbox" checked={isChecked} onChange={() =>{
                    setIsChecked(!isChecked);
                }}></input>
                <label htmlFor="repeatLettersTrue">Ja</label>
            </div>
            <button type="submit" className="startBtn" >Börja spela</button>
        </form>
    );
}