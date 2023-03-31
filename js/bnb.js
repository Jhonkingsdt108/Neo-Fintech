let bnb = new WebSocket('wss://stream.binance.com:9443/ws/bnbusdt@trade');
let stockPriceElement3 = document.getElementById('bnb');
let lastPrice3 =null;

bnb.onmessage=(event)=>{
    let stockObjet3 = JSON.parse(event.data);
    let price = parseFloat(stockObjet3.p).toFixed(2);
    
    stockPriceElement3.innerText = price;
    
    stockPriceElement3.style.color = !lastPrice3 || lastPrice3 === price ? 'blue' : price >lastPrice3 ? 'green': 'red';
    lastPrice3 = price;
}