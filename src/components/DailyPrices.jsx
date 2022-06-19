import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import price1 from '../assets/price1.png';
import price2 from '../assets/price2.png';
import price3 from '../assets/price3.png';
import price4 from '../assets/price4.png';
import bitcoin from '../assets/bitcoin.png';
import ethereum from '../assets/ethereum.png';
import ggcoin from '../assets/ggcoin.png';
const url =
  'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=4&page=1&sparkline=false';
export default function DailyPrices() {
  const [data, setData] = useState([]);
  useEffect(() => {
    setTimeout(() => {
      axios
        .get(url)
        .then((response) => {
          setData(response.data);
        })
        .catch((error) => console.log(error));
    }, 8000);
  }, [data]);
  console.log(data);
  return (
    <Section className='flex gap-2 column'>
      <div className='container'>
        <div className='title'>
          <h2>Track Daily Top 4 Most Wanted Coins</h2>
          <div className='undeline'></div>
        </div>
        <div className='header subdue'>
          <span>#</span>
          <span>Name</span>
          <span>Price</span>
          <span>Change</span>
          <span>Market Cap</span>
          <span>Chart</span>
        </div>
        <div className='data flex column gap-1'>
          {data.map(
            (
              {
                name,
                image,
                symbol,
                market_cap_change_percentage_24h: change,
                low_24h,
                high_24h,
              },
              index
            ) => {
              return (
                <div className='row a-center' key={index}>
                  <span>{index + 1}</span>
                  <div className='name flex gap-1 a-center'>
                    <span className='image'>
                      <img src={image} alt={name} className='symbol-img' />
                    </span>
                    <span>{name}</span>
                    <span className='short subdue'>{symbol.toUpperCase()}</span>
                  </div>
                  <span>$ {high_24h}</span>
                  {change < 0 ? (
                    <span className='red'>
                      {/* <FiArrowDown className='icon' /> */}
                      {change.toFixed(2)}%
                    </span>
                  ) : (
                    <span className='green'>
                      {/* <FiArrowUpRight className='icon' /> */}
                      {change.toFixed(2)}%
                    </span>
                  )}
                  <span>$ {low_24h}</span>
                  {change < 0 ? (
                    <span className='red'>
                      {/* <FiArrowDown className='icon' /> */}

                      <img src={price3} alt='price' className='symbol-img' />
                    </span>
                  ) : (
                    <span className='green'>
                      {/* <FiArrowUpRight className='icon' /> */}

                      <img src={price1} alt='price' className='symbol-img' />
                    </span>
                  )}
                </div>
              );
            }
          )}
        </div>
      </div>
    </Section>
  );
}

const Section = styled.section`
  background-color: #ffffff10;
  border-radius: 1rem;
  .container {
    .title h2 {
      text-align: center;
      padding: 1rem;
    }
    .undeline {
      width: 5rem;
      height: 0.25rem;
      background: var(--text-blue);
      margin: 0.25rem auto;
    }
  }
  .header {
    border-bottom: 1px solid #ffffff42;
    padding-bottom: 1rem;
    padding: 2rem;
    span {
    }
  }
  .header,
  .data > .row {
    display: grid;
    grid-template-columns: 0.5fr 2fr 1fr 1fr 1fr 0.5fr;
  }
  .image {
    width: 2rem;
    height: 2rem;
    .symbol-img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  .data {
    padding: 0 2rem 2rem 2rem;
    .row {
      .name {
        display: flex;
      }
    }
  }

  span {
    display: block;
  }
  .green {
    color: var(--green);
  }

  .red {
    color: var(--red);
  }
  @media screen and (min-width: 280px) and (max-width: 1080px) {
    max-width: 90vw;
    overflow-y: auto;
    border-radius: 0;
    ::-webkit-scrollbar {
      height: 1px;
    }
    .container {
      width: 780px;
      .header {
      }
      .name {
        flex-direction: row;
      }
    }
  }
`;
