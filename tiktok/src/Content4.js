// import { useEffect } from 'react';
import { useState, useRef } from 'react';

export default function Content4() {
    
    const [count, setCount] = useState(60);

    let timerId;

    const handleStart = () => {
        setInterval(() => {
            setCount(prevCount => prevCount - 1);
        }, 1000);
    }

    const handleStop = () => {
        clearInterval(timerId);
    }

    return (
        <div>
            <h1>{count}</h1>
            <button onClick={handleStart}>Start</button>
            <button onClick={handleStop}>Stop</button>
        </div>
    );
}
