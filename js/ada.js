let ada = new WebSocket('wss://stream.binance.com:9443/ws/adausdt@trade');
let stockPriceElement4 = document.getElementById('ada');
let lastPrice4 =null;

ada.onmessage=(event)=>{
    let stockObjet4 = JSON.parse(event.data);
    let price = parseFloat(stockObjet4.p).toFixed(4);
    
    stockPriceElement4.innerText = price;
    
    stockPriceElement4.style.color = !lastPrice4 || lastPrice4 === price ? 'blue' : price >lastPrice4 ? 'green': 'red';
    lastPrice4 = price;
}