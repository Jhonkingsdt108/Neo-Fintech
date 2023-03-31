let xrp = new WebSocket('wss://stream.binance.com:9443/ws/xrpusdt@trade');
let stockPriceElement5 = document.getElementById('xrp');
let lastPrice5 =null;

xrp.onmessage=(event)=>{
    let stockObjet5 = JSON.parse(event.data);
    let price = parseFloat(stockObjet5.p).toFixed(4);
    
    stockPriceElement5.innerText = price;
    
    stockPriceElement5.style.color = !lastPrice5 || lastPrice5 === price ? 'blue' : price >lastPrice5 ? 'green': 'red';
    lastPrice5 = price;
}