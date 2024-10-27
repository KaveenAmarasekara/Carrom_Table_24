import axios from 'axios';
import { useEffect } from 'react';

function App() {
    useEffect(() => {
        axios.get('/api/test')
            .then(response => {
                console.log(response.data); // Should log { message: "API is working!" }
            })
            .catch(error => {
                console.error('Error fetching API:', error);
            });
    }, []);

    return <div>Carrom Game App</div>;
}

export default App;
