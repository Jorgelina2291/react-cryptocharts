import React from 'react';
import { Paper, Table, TableContainer, TableHead, TableRow, TableCell, TableBody } from "@material-ui/core"
import { styled } from "@material-ui/styles"
import { useEffect, useState } from 'react';
import baseEndPoint from "../apis/coinGeko"
import { useSelector } from "react-redux"
import { selectCrypto } from '../features/CryptoSlice';
import CoinRow from '../components/CoinRow/CoinRow'

// creamos nuestro propio HeaderCell 
const HeaderCell = styled(TableCell)({
    fontWeight: 800,
    fontSize: "18px",
    fontStyle: "italic"

})

// con un useEffect vamos a hacer un http request al API
// le vamos a solicitar que nos pase los datos de cotizacion de monedas




const HomePage = () => {
    const crypto = useSelector(selectCrypto)
    const [coins, setCoins] = useState([])// almacenamos data en un estado local
    const [isLoading, setIsLoading] = useState(false) // para console.log ("coins") cargue a tiempo
    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true) // esta cargando, se ha llamado a la api y se esta esperando respuesta
            try {
                const response = await baseEndPoint.get("/coins/markets", {
                    params: {
                        vs_currency: "eur",
                        ids: crypto.join()
                    }
                })

                const resultadoCoins = response.data;

                setCoins(resultadoCoins)
                setIsLoading(false)
                console.log("coins =>", resultadoCoins)


            } catch (err) { console.log(err) }

        }

        if (crypto.length){ //si el arreglo no esta vacio, se hace un fetch para que al borrar la ultima moneda no muestre todas por defecto

             fetchData()
        } else {
            setCoins ([])
        }

    }, [crypto])
    return (
    <>
       {
             isLoading ? (
                    <h1>Loading ... </h1>
             ): (
                
               
                <TableContainer component={Paper}>
                <Table size='small' aria-label='a dense table'>
                    <TableHead>
                        <TableRow>
                            <HeaderCell>Image</HeaderCell>
                            <HeaderCell >Symbol</HeaderCell>
                            <HeaderCell >MktCap-Rank</HeaderCell>
                            <HeaderCell >Current-Price</HeaderCell>
                            <HeaderCell >Charts</HeaderCell>
                            <HeaderCell >Price-1-day-%</HeaderCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                       {
                        coins.map (coin => (
                         <CoinRow key={coin.id} coin={coin}/>
                        ))
                       }
    
                    </TableBody>
                </Table>
              
            </TableContainer >
       
             )
       }
       
    </>
    
    )
}

export default HomePage

