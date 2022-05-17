import { useCallback, useState, useMemo, useRef } from 'react';
// import { useEffect } from 'react';
// import Content from './Content';
// import Content1 from './Content1';
// import Content2 from './Content2';
// import Content3 from './Content3';
// import Content4 from './Content4';
// import UseCallback from './UseCallback';
import UseMemo from './UseMemo';
import UseReducer from './UseReducer';

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

    const nameRef = useRef()

    const handleSummit = () => {
        setProducts([...products, {
            name,
            price: +price
        }])

        setName('');
        setPrice('');

        nameRef.current.focus();
    }
    
    const total = useMemo(() => {
        const result = products.reduce((result, prod) => {
            return result + prod.price;
        }, 0)

        return result;
    }, [products])
        

    return (
        <div style={{ padding: '10px 32px' }}>
            <input 
                ref={nameRef}
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
            <button onClick={handleSummit}>ADD</button>
            <br/>
            Total: {total}
            <ul>
                {products.map((product, index) => (
                    <li key={index}>{product.name} - {product.price}</li>
                ))}
            </ul>
        </div>
    )
}

export default App;