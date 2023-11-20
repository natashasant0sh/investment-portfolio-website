import React from 'react'
import Card from '../components/Card'
import { mockCompanyDetails } from '../constants/mock'
import Search from "../components/Search"
import Header from "../components/Header"
import Details from "../components/Details"
import Overview from "../components/Overview"

function Dashboard () {


    return (
        <div className="h-screen grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 grid-rows-8 md:grid-rows-7 xl:grid-rows-5 auto-rows-fr gap-6 p-10 font-quicksand">
            <div className="col-span-1 md:col-span-2 xl:col-span-3 row-span-1 flex justify-start items-center"> 
                <Header name={mockCompanyDetails.name}/>
            </div>
            <div className="md:col-span-2 row-span-4">
                <Card> Charts </Card>
            </div>
            <div>
                <Overview symbol={mockCompanyDetails.ticker} 
                price={300}
                change={30}
                changePercent={10.0}
                currency={"USD"}/>
            </div>
            <div className="row-span-2 xl:row-span-3">
                <Card> <Details details={ mockCompanyDetails}/> </Card>
            </div>
            
        </div>
    )
}

export default Dashboard

