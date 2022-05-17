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
// khi truyen vao component prop kieu funtion thi khi component cha rerender thi component con se 
// rerender du khong thay doi function do moi khi set lai state se lai co scope moi hoan toan va
// se tra lai cho memo 1 tham chieu moi => rerender.

/* useCallback tao 1 tham chieu ngoai pham vi function app de khi rerender neu khong co dependence
, useCallback se khong tao tham chieu moi cho callback cua no, neu co dependence thi neu dependence
bi thay doi thi se tao 1 tham chieu moi */