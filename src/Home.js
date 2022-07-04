
let api_key = process.env.bitquery_key
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
      "X-API-KEY": process.env.bitquery_key
    },
    body: JSON.stringify({
        query
    })
};
async function bitqueryAPICall(){
  const result = await fetch(url, opts).then(res => res.json()) 
  console.log((result.data.ethereum.dexTrades))
     var y = (result.data.ethereum.dexTrades)
     let quotePrice2 = y.shift()
     const z = (({quotePrice}) => ({quotePrice}))(quotePrice2)
     const price = (JSON.stringify(z)); 
     let x = (price.replace(/[{"quotPric":}e]/g,''))
let l = (price.replace(/}/g,''));
let p = (l.substring(14));
let b = (JSON.parse(p))
if (b<0.01) { 

function expo(x, f) {
    return Number.parseFloat(b).toExponential(f);
  }
 document.getElementById("root").innerHTML = 
(expo(b, 3)) }

else { document.getElementById("root").innerHTML = (    
(parseFloat(b).toFixed(3)))}


}
bitqueryAPICall();}
  return (
    <div className="value">
     {price(()=>{
      return <h1></h1>
     })}
    
    
    </div>
  );

}
export default Home;
