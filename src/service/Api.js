import { useState, useEffect } from 'react';

const Api = () => {


    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('http://contest.elecard.ru/frontend_data/catalog.json')
            .then(response => response.json())
            .then(data => setData(data));
    }, []);

    return (
        <div className="grid-container">
            {data.map((item, index) => (
                <div key={index} className="grid-item">
                    <img src={"http://contest.elecard.ru/frontend_data/" + item.image} alt={item.category}/>
                    <p>Filesize: {item.filesize}</p>
                    <p>Timestamp: {item.timestamp}</p>
                    <p>Category: {item.category}</p>
                </div>
            ))}
        </div>
    );
};
export default Api;