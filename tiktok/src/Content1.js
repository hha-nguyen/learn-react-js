import { useEffect } from 'react';
import { useState } from 'react';

export default function Content1() {
    const [countdown, setCountdown] = useState(180);
    setInterval(() => {
        setCountdown(countdown - 1);
    }, 1000)
    return (
        <div>
            <h1>{countdown}</h1>
        </div>
    );
}
