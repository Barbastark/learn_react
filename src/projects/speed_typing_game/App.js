import React, { useEffect, useState, useRef } from "react";
import useGame from './customHooks/useGame';

function App() {
    const {
        inputRef, 
        handleChange, 
        userInput, 
        gameStarted, 
        timer, 
        startGame, 
        wordCount
    } = useGame(30);
    
    return (
        <div>
            <h1>How fast do you type?</h1>
            <textarea 
                name="userInput" 
                value={userInput} 
                onChange={handleChange}
                disabled={!gameStarted}
                ref={inputRef}
            />
            <h4>Time reminaing: { timer }</h4>
            <button 
                onClick={startGame}
                disabled={gameStarted}
                
            >
                Start
            </button>
            <h1>Character count: { userInput.length }</h1>
            <h1 style={{ display: wordCount > 0 ? "block" : "none" }}>Word count: { wordCount }</h1>
        </div>
    )
}

export default App
