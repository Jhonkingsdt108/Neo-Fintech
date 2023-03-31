let btc = new WebSocket('wss://stream.binance.com:9443/ws/btcusdt@trade');
let stockPriceElement = document.getElementById('btc');
let lastPrice =null;

btc.onmessage=(event)=>{
    let stockObjet = JSON.parse(event.data);
    let price = parseFloat(stockObjet.p).toFixed(2);
    
    stockPriceElement.innerText = price;
    
    stockPriceElement.style.color = !lastPrice || lastPrice === price ? 'blue' : price >lastPrice ? 'green': 'red';
    lastPrice = price;
}