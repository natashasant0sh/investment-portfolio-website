import React, { useState, useContext, useEffect } from 'react'
import Card from "./Card"
import ChartFilter from './ChartFilter';
import {
    Area,
    XAxis,
    YAxis,
    ResponsiveContainer,
    AreaChart,
    Tooltip,
} from "recharts";

import {
    createDate,
    convertDatetoUnixTimestamp,
    convertUnixTimestampToDate,
} from "../helpers/date-helper"

import { fetchHistoricalData } from '../api/stock-api';

import StockContext from '../context/StockContext';

import { chartConfig } from '../constants/config';

const Chart = () => {
    const [data, setData] = useState([]);
    const [filter, setFilter] = useState("1W");

    const {stockSymbol } = useContext(StockContext);

    useEffect(() => {
        const getDateRange = () => {
          const { days, weeks, months, years } = chartConfig[filter];
    
          const endDate = new Date();
          const startDate = createDate(endDate, -days, -weeks, -months, -years);
    
          const startTimestampUnix = convertDatetoUnixTimestamp(startDate);
          const endTimestampUnix = convertDatetoUnixTimestamp(endDate);
          return { startTimestampUnix, endTimestampUnix };
        };
    
        const updateChartData = async () => {
          try {
            const { startTimestampUnix, endTimestampUnix } = getDateRange();
            const resolution = chartConfig[filter].resolution;
            const result = await fetchHistoricalData(
              stockSymbol,
              resolution,
              startTimestampUnix,
              endTimestampUnix
            );
            setData(formatData(result));
          } catch (error) {
            setData([]);
            console.log(error);
          }
        };
    
        updateChartData();
      }, [stockSymbol, filter]);

    const formatData = (data) => {
        return data.c.map((item, index) => {
          return {
            value: item.toFixed(2),
            date: convertUnixTimestampToDate(data.t[index]),
          };
        });
    };

    return <Card>
        <ul className="flex absolute top-2 right-2 z-40">
        {Object.keys(chartConfig).map((item) => (
          <li key={item}>
            <ChartFilter
              text={item}
              active={filter === item}
              onClick={() => {
                setFilter(item);
              }}
            />
          </li>
        ))}
        </ul>
        <ResponsiveContainer>
            <AreaChart data={(data)}>
            <defs>
                <linearGradient id="chartColor" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#007BFF" stopOpacity={0.8}/>
                    <stop offset="95%" stopColor="#00BFFF" stopOpacity={0}/>
                </linearGradient>
            </defs>
                <Area 
                type="monotone" 
                dataKey="value" 
                stroke="#312e81" 
                fillOpacity={1}
                strokeWidth={0.5}
                fill="url(#chartColor)"/>
                <Tooltip/>
                <XAxis dataKey={"date"} />
                <YAxis domain={["dataMin", "dataMax"]} />
            </AreaChart>
        </ResponsiveContainer>
    </Card>
}

export default Chart