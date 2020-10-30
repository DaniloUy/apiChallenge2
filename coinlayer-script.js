let coinLayerHeader = "Call " + "<u>coinlayer API</u>" + " to get Cryptocurrencies Live Exchange Rates in USD";
let coinLayerUrlLink = coinLayerHeader.link("https://coinlayer.com/documentation");
document.getElementById("headerLink").innerHTML = coinLayerUrlLink;

const baseURL = "http://api.coinlayer.com/api/live";
let APIkey = '51c783eaa8d8d578429233099980e90f';
let url =  baseURL + '?access_key=' + APIkey; 

fetch(url) 

.then(function(result) {   
  return result.json(); 
})

.then(function(json) {
  let cryptoRates = json; 
  console.log('cryptoRates:',cryptoRates);
  let success = cryptoRates.success 
  console.log("success:",success)
  let terms = cryptoRates.terms
  let privacy = cryptoRates.privacy
  let timeStamp = cryptoRates.timestamp 
  console.log("timeStamp:",timeStamp) 
  let target = cryptoRates.target
  let rates = cryptoRates.rates  
  console.log("rates:",rates) 

  let listItemC = document.createElement('p'); 
    
  listItemC.innerHTML = "success: " + success + '<br>' + "terms: " + terms + 
                        '<br>' + "privacy: " + privacy + '<br>' + "timestamp: " + timeStamp + '<br>' + 
                        "target: " + target + '<br>'; 
    
  listItemC.style.border = 'solid 1px black';
  listItemC.style.backgroundColor = 'lightgrey';
  cryptosList.appendChild(listItemC);    
     
  let length = Object.keys(rates).length
  
  for (i = 0; i < length; i++) {
      console.log("Keys:",Object.keys(rates)[i])
      console.log("Objects:",Object.values(rates)[i])
      let listItemR = document.createElement('li');
      let rateKeyString = '"' +  Object.keys(rates)[i] + '"'
      listItemR.innerHTML = '<p>' + rateKeyString + ' :     ' +  Object.values(rates)[i] + '<br>' + '</p>';
      listItemR.style.border = 'solid 1px black';
      listItemR.style.backgroundColor = 'lightgrey';
      cryptosList.appendChild(listItemR);
     
      }
      
    }
  )
 
  

