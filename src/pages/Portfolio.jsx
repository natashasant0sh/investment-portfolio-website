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
  const { stockSymbol, setStockSymbol } = useContext(StockContext);
  const [isBarChart, setIsBarChart] = useState(true);

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
      <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
        <Link to="/">
          <button style={{ backgroundColor: '#32C6DA', color: 'white' }}>
            Go to Main Page
          </button>
        </Link>
      </div>
      <h1 className="text-center font-bold text-3xl font-outfit text-white">Portfolio for {userState.userName}</h1>
      <h2 className="text-center font-bold  font-outfit text-white">Latest Bought Stock: {stockSymbol}</h2>
      <h3 className="text-center font-bold font-outfit text-white">Total Amount of Stocks Purchased: {totalAmountPurchased}</h3>
      <h3 className="text-center font-bold font-outfit text-white">Cumulative Shares Price: {totalSharesPrice}</h3>

      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}> 
      <button onClick={() => setIsBarChart(!isBarChart)}>
      {isBarChart ? 'View Line Graph' : 'View Bar Graph'}
      </button>
        {isBarChart ? (
          <BarChart width={500} height={300} data={chartData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="time" />
            <YAxis />
            <Tooltip/>
            <Legend />
            <Bar dataKey="totalSharePrice" fill="#02bda7" />
          </BarChart>
        ) : (
          <LineChart width={500} height={300} data={chartData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="time" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="totalSharePrice" stroke="#053B50" />
          </LineChart>
        )}
      </div>

      { data && data.map((item) => {
        const purchaseDate = new Date(item.purchaseDate);
        const formattedDate = `${purchaseDate.getDate()}-${purchaseDate.getMonth() + 1}-${purchaseDate.getFullYear().toString().substr(-2)}`;

        return (
          <div style={{ marginBottom: '30px'}}>
            <h2 className="text-center font-bold text-3xl font-outfit text-white">{item.stockName}</h2>
            <p className="text-center">Symbol: {item.stockSymbol}</p>
            <p className="text-center">Shares Price: {item.shareOutstanding / 10}</p>
            <p className="text-center">Amount Purchased: {item.amountPurchased}</p>
            <p className="text-center">Date Purchased: {formattedDate}</p>
          </div>
        );
      })}
    </Background>
  );
}; 

export default Portfolio;