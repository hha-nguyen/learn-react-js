// import { useEffect } from 'react';
import { useState } from 'react';
import { useLayoutEffect } from 'react';

export default function Content3() {
    
    const [count, setCount] = useState(0);

    useLayoutEffect(() => {
        if (count > 3) {
            setCount(0);
        }
    }, [count])

    const handleRun = () => {
        setCount(count + 1);
    }

    return (
        <div>
            <h1>{count}</h1>
            <button onClick={handleRun}>Run</button>
        </div>
    );
}
