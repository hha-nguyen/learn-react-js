import { useEffect } from 'react';
import { useState } from 'react';

export default function Content1() {
    // const [countdown, setCountdown] = useState(180);
    // useEffect(() => {
    //     const timerId = setInterval(() => {
    //         setCountdown(prevState => prevState - 1)
    //     }, 1000)

    //     return () => clearInterval(timerId); 
    // }, [])
    
    const [avatar, setAvatar] = useState();

    useEffect(() => {
        return () => {
            console.log(1);
            avatar && URL.revokeObjectURL(avatar.preview);
        }
    }, [avatar])

    const handlePreviewAvatar = (e) => {
        console.log(2);
        const file = e.target.files[0];

        file.preview = URL.createObjectURL(file);

        setAvatar(file);
        console.log(URL.createObjectURL(file));
    }

    return (
        <div>
            {/* <h1>{countdown}</h1> */}
            <input 
                type="file"
                onChange={handlePreviewAvatar}
            />
            {avatar && (
                <img src={avatar.preview} alt="" width="80%" />
            )}
        </div>
    );
}
