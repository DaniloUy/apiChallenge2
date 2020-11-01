
let coinLayerHeader = "Call " + "<u>coinlayer API</u>" + " to get Cryptocurrencies Exchange Rates in USD";
let coinLayerUrlLink = coinLayerHeader.link("https://coinlayer.com/documentation");
document.getElementById("headerLink").innerHTML = coinLayerUrlLink;

document.getElementById('send').addEventListener
('click', (event) => {   

var strDate = inputDate.value; 
console.log("strDate:",strDate)
let year = strDate.slice(0,4);
let month = strDate.slice(4,6);
let day = strDate.slice(6,8); 

let histDate = `${year}-${month}-${day}`;
console.log("histDate:",histDate);
 
const baseURL = "https://api.coinlayer.com/";
let APIkey = '51c783eaa8d8d578429233099980e90f';
let url =  baseURL + histDate + '?access_key=' + APIkey; 


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
  
  let listItemD = document.getElementById('cryptosList');
  listItemD.innerHTML = ""; 

  let listItemC = document.createElement('p'); 
  
  let UTCDate = new Date(timeStamp*1000).toLocaleString();
  // console.log(UTCDate);

  listItemC.innerHTML = "success: " + success + '<br>' + "terms: " + terms + 
                        '<br>' + "privacy: " + privacy + '<br>' + "UTC timestamp (readable format): " + timeStamp + ' (' + 
                        UTCDate + ')' + '<br>' + "target: " + target + '<br>'; 
  
    listItemC.style.border = 'solid 1px black';
  listItemC.style.backgroundColor = 'lightgrey';
  cryptosList.appendChild(listItemC);    
   
  if (success == true) {
       
  let length = Object.keys(rates).length
  
  for (i = 0; i < length; i++) {
      console.log("Keys:",Object.keys(rates)[i])
      console.log("Objects:",Object.values(rates)[i])
      let formatRateValue = Object.values(rates)[i].toLocaleString()
      console.log("formatRateValue:",formatRateValue)
      let listItemR = document.createElement('li');
      let rateKeyString = '"' +  Object.keys(rates)[i] + '"'      
      listItemR.innerHTML = '<p>' + rateKeyString + ' :     ' +  formatRateValue + '<br>' + '</p>';
      listItemR.style.border = 'solid 1px black';
      listItemR.style.backgroundColor = 'lightgrey';
      cryptosList.appendChild(listItemR);
      }
    }  
         
    }

  )
   
  }
)

  

