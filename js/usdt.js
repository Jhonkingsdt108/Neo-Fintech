let usdt = new WebSocket('wss://stream.binance.com:9443/ws/busdusdt@trade');
let stockPriceElement2 = document.getElementById('usdt');
let lastPrice2 =null;

usdt.onmessage=(event)=>{
    let stockObjet2 = JSON.parse(event.data);
    let price = parseFloat(stockObjet2.p).toFixed(4);
    
    stockPriceElement2.innerText = price;
    
    stockPriceElement2.style.color = !lastPrice2 || lastPrice2 === price ? 'blue' : price >lastPrice2 ? 'green': 'red';
    lastPrice2 = price;
}