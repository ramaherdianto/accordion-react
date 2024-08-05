import { useState } from 'react';

function App() {
    const [count, setCount] = useState(0);

    return (
        <>
            <h1 className='text-4xl font-semibold text-red-500'>Hello React</h1>
        </>
    );
}

export default App;
