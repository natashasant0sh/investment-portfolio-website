import React, { useState, useContext } from 'react';
import axios from 'axios';
import UserContext from '../context/UserContext';
import StockContext from '../context/StockContext';
import { useNavigate } from 'react-router-dom'; // Use useNavigate for navigation
import 'tailwindcss/tailwind.css';

const StockDetails = () => {
  const [amount, setAmount] = useState(0);
  const { userState } = useContext(UserContext);
  const { stockSymbol } = useContext(StockContext);
  const navigate = useNavigate(); // Use useNavigate hook for navigation

  if (!userState) {
    alert('User state is null');
    return null;
  } else {
    const { userName, stockDetails } = userState;

    const handleSubmit = async (event) => {
      event.preventDefault();

      try {
        const response = await axios.post('http://localhost:8000/purchase', {
          name: userName,
          stockName: stockDetails.name,
          stockSymbol: stockDetails.ticker,
          shareOutstanding: stockDetails.shareOutstanding,
          amountPurchased: amount,
        });

        if (response.data === 'success') {
          alert('Successfully purchased!');
          navigate('/pages/Portfolio'); // Use navigate for redirection
        } else {
          alert('Purchase failed');
        }
      } catch (error) {
        console.error(error);
      }
    };

    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
        <div className="p-4 bg-white rounded shadow-xl">
          <img src={stockDetails.logo} alt={stockDetails.name} className="w-32 h-32 mx-auto mb-4" />
          <h2 className="text-2xl font-bold mb-4">{stockDetails.name}</h2>
          <p><strong>Currency:</strong> {stockDetails.currency}</p>
          <p><strong>Exchange:</strong> {stockDetails.exchange}</p>
          <p><strong>Shares Outstanding:</strong> {stockDetails.shareOutstanding}</p>
          <form onSubmit={handleSubmit} className="mt-4">
            <label className="block">
              <span className="text-gray-700"> <strong> Amount: </strong></span>
              <input type="number" value={amount} onChange={e => setAmount(e.target.value)} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm" />
            </label>
            <input type="submit" value="Buy" className="mt-4 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-700" />
          </form>
        </div>
      </div>
    );
  }
};

export default StockDetails;
