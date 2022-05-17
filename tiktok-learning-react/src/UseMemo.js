import { useState, useRef, useEffect, memo, useMemo } from 'react';

function UseCallback() {
    
    return (
        <>
            <h1>Hello</h1>
        </>
    );
}

export default memo(UseCallback)
// memo: la 1 HOC, so sanh === xem prop cua component co thay doi hay khong (it nhat 1 prop) neu co thì rerender 
// useMemo: la 1 Hook, tranh thuc hien 1 logic nao do khong can thiet.
