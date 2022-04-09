import { useCallback, useState } from 'react';
// import { useEffect } from 'react';
// import Content from './Content';
// import Content1 from './Content1';
// import Content2 from './Content2';
// import Content3 from './Content3';
// import Content4 from './Content4';
// import UseCallback from './UseCallback';
import UseMemo from './UseMemo';

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

    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [products, setProducts] = useState([]);

    const handleSummit = () => {
        setProducts([...products, {
            name,
            price: +price
        }])
    }

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            setProducts([...products, {
                name,
                price: +price
            }])
        }
    }
    
    return (
        <div style={{ padding: '10px 32px' }}>
            <input 
                value={name}
                placeholder="Enter name..."
                onChange={e => setName(e.target.value)} 
            />
            <br/>
            <input
                value={price}
                placeholder="Enter price"
                onChange={e => setPrice(e.target.value)}  
            />
            <br/>
            <button onClick={handleSummit} onKeyPress={handleKeyPress}>ADD</button>
            <br/>
            Total:
            <ul>
                {products.map((product, index) => (
                    <li key={index}>{product.name} - {product.price}</li>
                ))}
            </ul>
        </div>
    )
}

export default App;