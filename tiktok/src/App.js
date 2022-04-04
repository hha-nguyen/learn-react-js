import { useState } from 'react';

function App() {
    const courses= [
        {
            id: 1, 
            name: "HTML, CSS"
        },
        {
            id: 2,
            name: "Javascipt"
        },
        {
            id: 3,
            name: "ReactJS"
        }
    ];
        
    const [checked, setChecked] = useState([]);
    console.log(checked);

    function handleChecked(id) {
        if (checked.includes(id)) {
            setChecked(prev => prev.filter(item => item !== id));
        } else setChecked(prev => [...prev, id]);
    }

    function handleSubmit() {
        console.log({ id: checked });
    }

    return ( 
        <div style={{ padding: 32 }}>
            {courses.map(course => (
                <div key={ course.id } >
                    <input type="checkbox" 
                    checked={ checked.includes(course.id) }
                    onChange={() => handleChecked(course.id)}/>
                    { course.name }
                </div>
            ))}

            <button onClick={handleSubmit}>Submit</button>
        </div>
        
    );
}

export default App;