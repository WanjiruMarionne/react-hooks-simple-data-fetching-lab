// create your App component here
import React, { useEffect, useState} from "react";

function App () {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [dog, setDogs] = useState (null);

    useEffect (() => {
        function fetchDogs (){
            fetch ("https://dog.ceo/api/breeds/image/random")
            .then((response) => {
                return response.json();
            })
            .then ((data) => {
                setIsLoaded(true);
                setDogs(data.message);
            })
            .catch((error) => {
                setIsLoaded(true);
                setError(error);
            });
        };
    
        fetchDogs();
    }, []);

    if (error) {
        return <div>Error: {error.message}</div>
    } else if (!isLoaded) {
        return <div>Loading...</div>
    } else {
        return (
            <div>
                <h1>Random Dog Image</h1>
                <img src={dog} alt="A Random Dog" />
            </div>
        )
    };
}

export default App;

