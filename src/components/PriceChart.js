import React, { useState } from 'react'
import { Line } from "react-chartjs-2"
import { chartOptions } from '../chartOptions'
import {Button} from "@material-ui/core"
import {useDispatch, useSelector} from "react-redux"
import { SET_FREQ, selectFreq } from '../features/FreqSlice'




const PriceChart = ({ prices: { dailyPrices, weeklyPrices, yearlyPrices }, id }) => {

    
    const freq = useSelector(selectFreq)
    const dispatch= useDispatch ()
    return (
        <div>
            <Line data={{
                labels: [],
                datasets: [{
                    label: `${id} daily prices`,
                    backgroundColor: "rgba(255,99, 132, 0.3) ",
                    borderColor: "rgb(255, 99, 132)",
                    pointRadius: 0,
                    borderWidth: 1,
                    data: freq==="24h" ? dailyPrices : freq==="7d" ? weeklyPrices : yearlyPrices,
                }],
            }}
                width={800}
                height={350}
                options={chartOptions}  />

                <Button onClick={()=>dispatch (SET_FREQ("24h")) }>24h</Button>
                <Button  onClick={()=>dispatch (SET_FREQ("7d"))}>1week</Button>
                <Button  onClick={()=>dispatch (SET_FREQ("365d"))}>1year</Button>
        </div>
    )
}

export default PriceChart