let sol = new WebSocket('wss://stream.binance.com:9443/ws/solusdt@trade');
let stockPriceElement6 = document.getElementById('sol');
let lastPrice6 =null;

sol.onmessage=(event)=>{
    let stockObjet6 = JSON.parse(event.data);
    let price = parseFloat(stockObjet6.p).toFixed(2);
    
    stockPriceElement6.innerText = price;
    
    stockPriceElement6.style.color = !lastPrice6 || lastPrice6 === price ? 'blue' : price >lastPrice6 ? 'green': 'red';
    lastPrice6 = price;
}