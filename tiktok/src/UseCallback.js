import { useState, useRef, useEffect, memo } from 'react';

function UseCallback({ onIncrease }) {
    
    
    return (
        <>
            <h1>Hello</h1>
            <button onClick={onIncrease}>Increase</button>
        </>
    );
}

export default memo(UseCallback)
