import { LinearProgress, Typography } from '@mui/material';

import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import CoinInfo from '../components/CoinInfo';
import { SingleCoin } from '../config/api';
import { CryptoState } from '../CryptoContext';
import ReactHtmlParser from 'html-react-parser';
import { numberWithCommas } from '../components/Banner/Carousel';

const CoinPage = () => {
  const { id } = useParams();
  const [coin, setCoin] = useState();

  const { currency, symbol } = CryptoState();

  const fetchCoin = async () => {
    const { data } = await axios.get(SingleCoin(id));
    setCoin(data);
  }

  console.log(coin);

  useEffect(() => {
    fetchCoin();
  }, [])

  if (!coin) return <LinearProgress style={{ backgroundColor: "gold"}} />

  return (
    <div className="coin-container">
      <div className="sidebar">
        <img
          src={coin?.image.large}
          alt={coin?.name}
          height="200"
          style={{ marginBottom: 20 }}
        />
        <Typography variant="h3" style={{
          fontWeight: "bold",
          marginBottom: 20,
          fontFamily: "Montserrat",
        }}>
          {coin?.name}
        </Typography>
        <Typography variant="subtitle1">
          {ReactHtmlParser(coin?.description.en.split(". ")[0])}.
        </Typography>
        <div className='marketData' style={{
          alignSelf: "start",
          padding: 25,
          paddingTop: 10,
          width: "100%",
        }}>
          <span style={{ display: "flex" }}>
            <Typography variant="h5" style={{
              fontWeight: "bold",
              marginBottom: 20,
              fontFamily: "Montserrat",
            }}>
              Rank:
            </Typography>
            &nbsp; &nbsp;
            <Typography variant="h5" style={{
              fontFamily: "Montserrat",
            }}>
              {coin?.market_cap_rank}
            </Typography>
          </span>
          
          <span style={{ display: "flex" }}>
            <Typography variant="h5" style={{
              fontWeight: "bold",
              marginBottom: 20,
              fontFamily: "Montserrat",
            }}>
              Current Price:
            </Typography>
            &nbsp; &nbsp;
            <Typography variant="h5" style={{
              fontFamily: "Montserrat",

            }}>
              {symbol+numberWithCommas(
                coin?.market_data.current_price[currency.toLowerCase()]
              )}

            </Typography>
          </span>

          <span style={{ display: "flex" }}>
            <Typography variant="h5" style={{
              fontWeight: "bold",
              marginBottom: 20,
              fontFamily: "Montserrat",
            }}>
              Market Cap: {" "}
            </Typography>
            &nbsp; &nbsp;
            <Typography variant="h5" style={{
              fontFamily: "Montserrat",
    
            }}>
              {symbol+numberWithCommas(
                coin?.market_data.market_cap[currency.toLowerCase()]
                .toString()
                .slice(0, -6)
              )}
              M
            </Typography>
          </span>
 
        </div>
      </div>
      {/* chart  */}
      <CoinInfo coin={coin} />
    </div>
  )
}

export default CoinPage
