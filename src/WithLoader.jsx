// withLoader.js
import { useState, useEffect } from 'react';

const WithLoader = (WrappedComponent, data) => {
    return function withLoaderComponent(props) {

        const [isLoading, setIsLoading] = useState(true);
        const [items, setItems] = useState([]);

        useEffect(() => {
            setTimeout(() => {
                setItems(data);
                setIsLoading(false);
            }, 2000)
        }, []);

        if (isLoading) {
            return <div> Loading... </div>
        }

        return <WrappedComponent items={items} />
    }



};

export default WithLoader;
