import React, {useContext, useEffect, useState} from 'react'
import styled from 'styled-components';
import Card from '../components/Card'
import StockDetails from './StockDetails';
import Header from "../components/Header"
import Details from "../components/Details"
import Overview from "../components/Overview"
import Chart from "../components/Chart"
import { Link } from 'react-router-dom'
import StockContext from '../context/StockContext';
import { fetchStockDetails, fetchQuote } from '../api/stock-api';


const Background = styled.div`
height: 100vh;
background: #053B50;
background-image: linear-gradient(to bottom right,#053B50,85%, #32C6DA );
background-repeat: no-repeat;
`;



function Dashboard () {

    const { stockSymbol } = useContext(StockContext)

    const [stockDetails, setStockDetails] = useState({});
    const [quote, setQuote] = useState({});

    useEffect(() => {
        const updateStockDetails = async () => {
          try {
            const result = await fetchStockDetails(stockSymbol);
            setStockDetails(result);
          } catch (error) {
            setStockDetails({});
            console.log(error);
          }
        };
    
        const updateStockOverview = async () => {
          try {
            const result = await fetchQuote(stockSymbol);
            setQuote(result);
          } catch (error) {
            setQuote({});
            console.log(error);
          }
        };
    
        updateStockDetails();
        updateStockOverview();
      }, [stockSymbol]);

    return (
        <Background>
        <div className="h-screen grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 grid-rows-8 md:grid-rows-7 xl:grid-rows-5 auto-rows-fr gap-6 p-10 font-quicksand">
            <div className="col-span-1 md:col-span-2 xl:col-span-3 row-span-1 flex justify-between items-center"> 
                <Header name={stockDetails.name}/>
                <div className="flex-grow" /> {/* This line is added */}
                <Link to="/StockDetails">
                    <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-12 rounded shadow-lg">
                        Invest
                    </button>
                </Link>
            </div>
            <div className="md:col-span-2 row-span-4">
                <Chart/>
            </div>
            <div>
                <Overview symbol={stockSymbol} 
                price={quote.pc}
                change={quote.d}
                changePercent={quote.dp}
                currency={stockDetails.currency}/>
            </div>
            <div className="row-span-2 xl:row-span-3">
                <Card> <Details details={ stockDetails }/> </Card>
            </div>
            
        </div>
        </Background>
    )
}

export default Dashboard

