import { useState, useRef, useEffect } from 'react';

export default function Content4() {
    
    const [count, setCount] = useState(60);

    const timerId = useRef();
    const prevCount = useRef();
    const h1Ref = useRef();

    useEffect(() => {
        prevCount.current = count;
    }, [count])

    useEffect(() => {
        const react = h1Ref.current.getBoundingClientRect();
        console.log(react);
    })

    const handleStart = () => {
        timerId.current = setInterval(() => {
            setCount(prevCount => prevCount - 1);
        }, 1000);
    }

    const handleStop = () => {
        clearInterval(timerId.current);
    }

    console.log(count, prevCount);
    return (
        <div>
            <h1 ref={h1Ref}>{count}</h1>
            <button onClick={handleStart}>Start</button>
            <button onClick={handleStop}>Stop</button>
        </div>
    );
}
