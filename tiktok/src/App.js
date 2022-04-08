// import { useState } from 'react';
// import { useEffect } from 'react';
// import Content from './Content';
// import Content1 from './Content1';
// import Content2 from './Content2';
// import Content3 from './Content3';
import Content4 from './Content4';


// function emitComment(id) {
//     setInterval(() => {
//         window.dispatchEvent(
//             new CustomEvent(`lesson-${id}`, {
//                 detail: `Nội dung comment của lesson ${id}`
//             })
//         )
//     }, 2000 )
// }

// emitComment(1);
// emitComment(2);
// emitComment(3);

function App() {

    return ( 
        <div style={{ padding: 32 }}>
            <Content4 />
        </div>
        
    );
}

export default App;