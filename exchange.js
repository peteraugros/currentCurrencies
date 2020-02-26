
var userInputTo;
var userInputFrom;
var amount;
var rate;

  function updateSearchTerm(){
    userInputTo = $("#userInputTo").val()
    userInputFrom = $("#userInputFrom").val()
    console.log("userInputTo:", userInputTo)
    console.log("userInputFrom:", userInputFrom)
    getCurrency();
  }

function getCurrency(){
//query
var queryURL = "https://currency-converter5.p.rapidapi.com/currency/historical/2018-02-09?format=json&to=" + userInputTo + "&from=" + userInputFrom + "&amount=1";

//setting
var settings = {
	"async": true,
	"crossDomain": true,
  "url": queryURL,
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "currency-converter5.p.rapidapi.com",
		"x-rapidapi-key": "648a6b5af9mshdb8484cc294d75cp1e5e5djsn3a9cac93339c"
	}
}
//ajax call
$.ajax(settings).done(function (response) {
	console.log(response);
//switch statement for drilling
      switch(userInputTo) {
      case "EUR":
        rate = response.rates.EUR.rate;
        break;
      case "JPY":
        rate = response.rates.JPY.rate;
        break;
      case "USD":
        rate = response.rates.USD.rate;
        break;
      case "AUD":
        rate = response.rates.AUD.rate;
        break;
      case "GBP":
        rate = response.rates.GBP.rate;
        break;
    }
      calculate();
  });
}

function calculate(){
  amount = $("#dollarAmount").val()
  var result = rate * amount;
  formatResult(result)
}

function formatResult(x) {
  var formattedResult = x.toFixed(2);
  var withComma = formattedResult.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  //posting to DOM
  $("#output").text("$" + withComma);
  $("#rate").text(rate + "%");
}

