import React from 'react'
import { Bar } from 'react-chartjs-2'
import { chartOptions } from '../chartOptions'
import {useSelector} from "react-redux"
import { selectFreq } from '../features/FreqSlice'

const VolumeChart = ({volumes: {dailyVolumes, weeklyVolumes, yearlyVolumes}, id}) => {
    const freq = useSelector(selectFreq)
  return (
    <div>
        <Bar data= {{
            labels: [],
            datasets: [
                {
                    label: `${id} dailyvolumes`,
                    backgroundColor: "rgba(0, 0, 255) ",
                    borderColor: "rgb(255, 99, 132)",
                    pointRadius: 0,
                    borderWidth: 1,
                    data: freq === "24h" ? dailyVolumes: freq === "7d" ? weeklyVolumes : yearlyVolumes,
                }
            ]
        }} options={chartOptions} width= { 800} height= {350 }/>
    </div>
  )
}

export default VolumeChart