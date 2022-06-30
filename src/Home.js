import {  useEffect } from 'react';

const Home = () => {

  
let price = () => { 
  const query = `
{
  ethereum(network: bsc) {
    dexTrades(
      baseCurrency: {is: "0x01b42466d39675db204Fc9204DF6f6Ef0370892E"}
      quoteCurrency: {is: "0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c"}
      options: {desc: ["block.height", "transaction.index"], limit: 1}
    ) {
      block {
        height
        timestamp {
          time(format: "%Y-%m-%d %H:%M:%S")
        }
      }
      transaction {
        index
      }
      baseCurrency {
        symbol
      }
      quoteCurrency {
        symbol
      }
      quotePrice
    }
  }
}

`;

const url = "https://graphql.bitquery.io/";
const opts = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-API-KEY": "BQYwoflfjaIhiTjYkb2XqT3XwbMszCGi"
    },
    body: JSON.stringify({
        query
    })
};
async function BitqueryAPICall(){
  const result = await fetch(url, opts).then(res => res.json()) 
  console.log((result.data.ethereum.dexTrades))
     var y = (result.data.ethereum.dexTrades)
     let quotePrice2 = y.shift()
     const z = (({quotePrice}) => ({quotePrice}))(quotePrice2)
     const price = (JSON.stringify(z));
     document.getElementById("root").innerHTML =  (price)
    console.log(z)
  console.log(price)


    
}
BitqueryAPICall();}

  return (
    <div className="value">
     {price(()=>{
      return <h1></h1>
     })}
    
    
    </div>
  );

}
export default Home;
