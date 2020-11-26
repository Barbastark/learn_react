import { useEffect, useState, useRef } from "react"

function useGame(gameDuration = 10) {
        
    const [ userInput, setUserInput ] = useState("");
    const [ wordCount, setWordCount ] = useState(0);
    const [ timer, setTimer ] = useState(gameDuration);
    const [ gameStarted, setGameStarted ] = useState(false);

    const inputRef = useRef(null);
    
    function handleChange(e) {
        
        const { value } = e.target;
        
        setUserInput(value );
    }

    function calcWordCount() { 
        
        const wordsArr = userInput
            .replace(/\r?\n|\r/g, " ")
            .trim()
            .split(" ")
            .filter(word => word !== "")
        
        return wordsArr.length
        
    }
    
    function startGame() {
        setGameStarted(true);
        setTimer(gameDuration);
        setUserInput("");
        setWordCount(0);
        inputRef.current.disabled = false;
        inputRef.current.focus();
    }

    function endGame() {
        setGameStarted(false);
        setWordCount(calcWordCount(userInput));
    }

    useEffect(() => {
        if ( timer > 0 && gameStarted ) {
            setTimeout(() => {
                setTimer( prevCountDown => prevCountDown - 1 ); 
                
            }, 1000); 
        } else {
            endGame();
        }
    }, [ timer, gameStarted]);

    return {inputRef, handleChange, userInput, gameStarted, timer, startGame, wordCount}
}

export default useGame;