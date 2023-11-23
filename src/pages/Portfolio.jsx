import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import UserContext from '../context/UserContext';
import StockContext from '../context/StockContext';
import { BarChart, LineChart, CartesianGrid, XAxis, YAxis, Tooltip, Legend, Bar, Line } from 'recharts';

const Background = styled.div`
  height: 100%;
  background: #053B50;
  background-image: linear-gradient(to bottom right,#053B50,85%, #32C6DA );
  background-repeat: no-repeat;
  color: white;
  font-family: 'font-outfit';
`;


const Portfolio = () => {
  const [data, setData] = useState([]);
  const { userState } = useContext(UserContext);
  const { stockSymbol, stockImage } = useContext(StockContext);
  const [isBarChart, setIsBarChart] = useState(true);
  const { stockDetails } = userState;

  useEffect(() => { 
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:8000/portfolio');
        var userData = response.data.filter(function(user) {
            return user.name === userState.userName;
        })[0]
        setData(userData.purchases);
      } catch (error) {
        console.error('Error fetching data from server:', error);
      }
    };

    fetchData();
  }, [stockSymbol]);

  // Calculate total amount of stocks purchased and cumulative shares price
  const totalAmountPurchased = data.reduce((total, item) => total + parseFloat(item.amountPurchased), 0);
  const totalSharesPrice = data.reduce((total, item) => total + item.shareOutstanding / 10, 0);

  // Prepare data for the charts
  const chartData = data.slice(-10).map(item => ({
    time: item.purchaseDate,
    totalSharePrice: item.amountPurchased * (item.shareOutstanding / 10),
  }));

  return (
    <Background>
      <div className="p-6">
        <div className="flex justify-between items-center">
          <div></div> 
          <h1 className="text-white text-5xl font-bold font-arvo-bold">
            Your <span className="text-teal-400 font-arvo-bold ml-1"> Portfolio</span>
          </h1>
          <Link to="/">
            <button className="bg-gray-300 hover:bg-gray-400 text-black font-bold py-2 px-4 rounded">
              Home Page
            </button>
          </Link>
        </div>
        <hr className="border-t border-gray-200 mt-4 mb-4" />
      </div>

      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', height: '100vh' }}>
        <div style={{ width: '60%' }}>
          <button onClick={() => setIsBarChart(!isBarChart)} style={{ marginBottom: '5px', marginLeft: '45px'}}>
            {isBarChart ? 'View Line Graph' : 'View Bar Graph'}
          </button>
          {isBarChart ? (
          <BarChart width={750} height={450} data={chartData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="time" />
            <YAxis />
            <Tooltip/>
            <Legend />
            <Bar dataKey="totalSharePrice" fill="#02bda7" />
          </BarChart>
        ) : (
          <LineChart width={750} height={450} data={chartData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="time" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="totalSharePrice" stroke="#02bda7" />
          </LineChart>
        )}
        </div>
        <div style={{ width: '40%' }} >
          <div className="p-2">
            <div className="bg-white rounded shadow-xl p-4 w-[400px] h-[300px]">
              <img src={stockDetails.logo} alt={stockDetails.name} className="w-32 h-32 mx-auto mt-4 mb-4" />
              <h2 className="text-center font-bold  font-outfit text-black"> You Just Purchased {stockSymbol}!</h2>
              <h3 className="text-center font-bold font-outfit text-green-600 mt-8">Total Amount of Stocks Purchased: {totalAmountPurchased}</h3>
              <h3 className="text-center font-bold font-outfit text-green-700">Cumulative Shares Price: {totalSharesPrice}</h3>
            </div>
          </div>
        </div>
      </div>
      <hr className="border-t border-gray-200 mt-4 mb-4" />

      
      <h1 className="text-4xl font-bold font-outfit text-white mb-4 text-center">Purchase History</h1>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px' }}>
      {data && data.map((item) => {
        const purchaseDate = new Date(item.purchaseDate);
        const formattedDate = `${purchaseDate.getDate()}-${purchaseDate.getMonth() + 1}-${purchaseDate.getFullYear().toString().substr(-2)}`;
        
       
        return (
          
        <div className="card bg-blue-200 bg-opacity-50 text-black rounded-lg shadow-lg p-6 mb-6">
          <h2 className="text-center font-bold text-3xl font-outfit text-teal-300">{item.stockName}</h2>
          <p className="text-center text-white font-semibold">Symbol: {item.stockSymbol}</p>
          <p className="text-center text-white font-semibold">Shares Price: {item.shareOutstanding / 10}</p>
          <p className="text-center text-white font-semibold">Amount Purchased: {item.amountPurchased}</p>
          <p className="text-center text-white font-semibold">Date Purchased: {formattedDate}</p>
        </div>
          );
        })}
      </div>
    </Background>
  );
}; 

export default Portfolio;