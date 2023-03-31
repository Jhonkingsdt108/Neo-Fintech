let dot = new WebSocket('wss://stream.binance.com:9443/ws/dotusdt@trade');
let stockPriceElement7 = document.getElementById('dot');
let lastPrice7 =null;

dot.onmessage=(event)=>{
    let stockObjet7 = JSON.parse(event.data);
    let price = parseFloat(stockObjet7.p).toFixed(3);
    console.log('dot',price)
    stockPriceElement7.innerText = price;
    
    stockPriceElement7.style.color = !lastPrice7 || lastPrice7 === price ? 'blue' : price >lastPrice7 ? 'green': 'red';
    lastPrice7 = price;
}