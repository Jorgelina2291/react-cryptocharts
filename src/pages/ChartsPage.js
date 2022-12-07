import React, { useEffect, useState } from 'react';
import {useParams} from "react-router-dom"
import baseEndPoint from "../apis/coinGeko"
import PriceChart from '../components/PriceChart';
import VolumeChart from '../components/VolumeChart';


// formatData funcion para  pasar los arreglos de day prices a objetos

const formatData = data => {

    return data.map((coord)=>{
        return {
                t: coord [0],
                y: coord [1]
        }
    })
}

const ChartsPage = () => {

    // VARIABLES
     const {id} = useParams ()
     const [prices, SetPrices] = useState ({})
     const [volumes, SetVolumes] = useState ({})
     const [isLoading, SetIsLoading] = useState (true)
    
    
    
     useEffect (() => {

          const fetchData = async ()  => { 

            const [day, week, year] = await Promise.all([
                baseEndPoint.get(`/coins/${id}/market_chart/`, {
                    params: {
                        vs_currency: "eur",
                        days: "1"
                    }
                }) ,
                baseEndPoint.get(`/coins/${id}/market_chart/`, {
                    params: {
                        vs_currency: "eur",
                        days: "7"
                    }
                }) ,
                baseEndPoint.get(`/coins/${id}/market_chart/`, {
                    params: {
                        vs_currency: "eur",
                        days: "365"
                    }
                }) ,



            ]) 

              SetPrices ({
                    dailyPrices: formatData(day.data.prices), 
                    weeklyPrices: formatData(week.data.prices),
                    yearlyPrices: formatData(year.data.prices),
              })
         
             SetVolumes ({
                dailyVolumes: formatData(day.data.total_volumes),
                weeklyVolumes: formatData(week.data.total_volumes),
                yearlyVolumes: formatData (year.data.total_volumes),
             })
                SetIsLoading (false)
                console.log ("day prices =>", formatData(day.data.prices))
          }
        fetchData ()

     }, [id]);
    return (
        isLoading ?   <h1>Loading ..  </h1> : (
             <div>
                <PriceChart prices={prices} id={id}/>
                <VolumeChart volumes={volumes} id= {id}/>
             </div>
          
        )
         
       
    )
}

export default ChartsPage