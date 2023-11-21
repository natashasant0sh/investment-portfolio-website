import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import axios from 'axios'

const StockDetails = ({ location }) => {
    const [amount, setAmount] = useState(0);
    const history = useHistory();
    const stockDetails = location.state.stockDetails;

    const handleSubmit = (event) => {
        event.preventDefault();
        axios.post("http://localhost:8000/pages/StockDetails", {
            name: 'user name', // replace with actual user name
            password: 'user password', // replace with actual user password
            stockDetails: stockDetails,
            amount: amount,
        })
        .then(res => {
            if(res.data === "success"){
                history.push('/dashboard');
            }
        })
        .catch(e => {
            console.log(e);
        });
    }

    return (
        <div>
            <h1>StockDetails</h1>
            <h2>{stockDetails.name}</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    Amount:
                    <input type="number" value={amount} onChange={e => setAmount(e.target.value)} />
                </label>
                <input type="submit" value="Submit" />
            </form>
        </div>
    )
}

export default StockDetails