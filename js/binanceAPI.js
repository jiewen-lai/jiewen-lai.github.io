// JavaScript source code

function toDecimal2(x) {
    var f = parseFloat(x);
    if (isNaN(f)) {
        return false;
    }
    var f = Math.round(x * 100) / 100;
    var s = f.toString();
    var rs = s.indexOf('.');
    if (rs < 0) {
        rs = s.length;
        s += '.';
    }
    while (s.length <= rs + 2) {
        s += '0';
    }
    return s;
}

function toDecimal4(x) {
    var f = parseFloat(x);
    if (isNaN(f)) {
        return false;
    }
    var f = Math.round(x * 10000) / 10000;
    var s = f.toString();
    var rs = s.indexOf('.');
    if (rs < 0) {
        rs = s.length;
        s += '.';
    }
    while (s.length <= rs + 4) {
        s += '0';
    }
    return s;
}

var js = document.createElement('script');

js.onload = function () {
    var p = $("<p id='coin'></p>");

    $(document.body).append(p);

    setInterval(function () {
        $.get("https://api.binance.com/api/v3/ticker/price").done(function (data) {
            /* https://bitpay.com/api/rates */
            /* https://api.binance.com/api/v3/ticker/price */ /* doesnt work in mainland China */

            var btc = data[11]
            var doge = data[558]
            var eth = data[12]
            /*  11 and 558 and 12*//////  * 2 52 13/

            $("#coin").html(" " + (new Date()).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) + " | <b>BTC/USD: </b>" + toDecimal2(btc.price) + " | <b>ETH/USD: </b>" + toDecimal2(eth.price) + " | <b>DOGE/USD: </b>" + toDecimal4(doge.price));
        });
    }, 1000);

}

js.src = "//ajax.googleapis.com/ajax/libs/jquery/1.9.0/jquery.min.js";
document.head.appendChild(js);
