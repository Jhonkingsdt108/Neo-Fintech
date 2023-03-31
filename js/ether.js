let ether = new WebSocket('wss://stream.binance.com:9443/ws/ethusdt@trade');
let stockPriceElement1 = document.getElementById('ether');
let lastPrice1 =null;

ether.onmessage=(event)=>{
    let stockObjet1 = JSON.parse(event.data);
    let price = parseFloat(stockObjet1.p).toFixed(2);
    
    stockPriceElement1.innerText = price;
    
    stockPriceElement1.style.color = !lastPrice1 || lastPrice1 === price ? 'blue' : price >lastPrice1 ? 'green': 'red';
    lastPrice1 = price;
}