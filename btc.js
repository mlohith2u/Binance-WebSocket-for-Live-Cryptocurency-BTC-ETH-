
//bitcoin
let socket = new WebSocket("wss://stream.binance.com:9443/ws/btcusdt@trade");

//ethereum
//let socket = new WebSocket("wss://stream.binance.com:9443/ws/ethusdt@trade");

socket.onmessage = function (event) {
var obj = JSON.parse(event.data);
var x = obj.E;
var y = obj.p;
var Trade_id = obj.t;

//document.write("X : " ,event.data);  //complete data

document.write("X : " + x + "  " + "Y : " + y);
document.write("</br>");
document.getElementById("ids").innerHTML=y;

};


