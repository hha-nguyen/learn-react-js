import { useEffect } from 'react';
import { useState } from 'react';

const lessons = [
    {
        id: 1,
        name: 'ReactJs la gi? Tai sao nen hoc ReactJS?'
    },
    {
        id: 2,
        name: 'SPA/MPA la gi?'
    },
    {
        id: 3,
        name: 'Arrow function'
    }
]

export default function Content2() {
    const [lessonId, setLessonId] = useState(1);
    
    useEffect(() => {
        
        const handleComment = ({ detail}) => {
            console.log(detail);
        }

        window.addEventListener(`lesson-${lessonId}`, handleComment);

        return () => {
            window.removeEventListener(`lesson-${lessonId}`, handleComment)
        }
    }, [lessonId])

    return (
        <div>
            <ul>
                {lessons.map(lesson => (
                    <li 
                        key={lesson.id}
                        style={{
                            color: lessonId === lesson.id ? 
                                'red' :
                                '#333',
                            cursor: 'pointer'
                        }}
                        onClick={() => setLessonId(lesson.id)}
                    >{lesson.name}</li>
                ))}
            </ul>
        </div>
    );
}
