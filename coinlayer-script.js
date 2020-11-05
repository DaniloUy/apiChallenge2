
let coinLayerHeader = "Call " + "<u>coinlayer API</u>" + " to get Cryptocurrencies Exchange Rates in USD";
let coinLayerUrlLink = coinLayerHeader.link("https://coinlayer.com/documentation");
document.getElementById("headerLink").innerHTML = coinLayerUrlLink;

document.getElementById("next").disabled = true;
document.getElementById("previous").disabled = true;

document.getElementById('send').addEventListener
('click', (event) => {   

var strDate = inputDate.value; 
console.log("strDate:",strDate)
let year = strDate.slice(0,4);
console.log("year:",year)
let month = strDate.slice(4,6);
console.log("month:",month)
let day = strDate.slice(6,8); 
console.log("day:",day)

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
  
  cryptosHeader.innerHTML = ""; 
  
  //cryptosList.innerHTML = ""; 

  let UTCDate = new Date(timeStamp*1000).toLocaleString();
  // console.log(UTCDate);
  
  
  cryptosHeader.innerHTML = "success: " + success + '<br>' + "terms: " + terms + 
                            '<br>' + "privacy: " + privacy + '<br>' + "UTC timestamp (readable format): " + timeStamp + ' (' + 
                            UTCDate + ')' + '<br>' + "target: " + target + '<br>'; 

  cryptosHeader.style.border = 'solid 1px black';
  cryptosHeader.style.backgroundColor = 'lightgrey';
  
  if (success == true) {
      
      var ratesArrayLength = Object.keys(rates).length
      console.log("ratesArrayLength:",ratesArrayLength)
      var list = new Array();
      var pageList = new Array();
      var currentPage = 1;
      var numberOfPages = 1;   // calculates the total number of pages
      var numberPerPage = 10;

      function getNumberOfPages() {
        
        return Math.ceil(ratesArrayLength / numberPerPage);
      };
      
      function nextPage() {
        currentPage += 1;
        loadList();
      }
      
      function previousPage() {
        currentPage -= 1;
        loadList();
      }
      /*
      function firstPage() {
        currentPage = 1;
        loadList();
      }
      
      function lastPage() {
        currentPage = numberOfPages;
        loadList();
      }
      */
      function loadList() {
        var begin = ((currentPage - 1) * numberPerPage);
        var end = begin + numberPerPage;
      
        pageList = list.slice(begin, end);
        console.log("pageList:",pageList);
        drawList();
        check();
      }
        
      function drawList() {
        document.getElementById("list").innerHTML = "";
        console.log("pageList.length:",pageList.length)
        
        let ul = document.getElementById("cryptosList");
        for (r = 0; r < pageList.length; r++) {
             document.getElementById("list").innerHTML += pageList[r];
             /*
             let li = document.createElement('li');
             li.innerHTML += pageList[r];
             ul.appendChild(li);
             */
             /*  
             pageList.forEach(function (pageList) {
             let li = document.createElement('li');
             cryptosList.appendChild(li);      
             li.innerHTML += pageList;
             });
             */
        }
          
      }
      
      

      function check() {
        document.getElementById("next").disabled = currentPage == numberOfPages ? true : false;
        document.getElementById("previous").disabled = currentPage == 1 ? true : false;
        /*
        document.getElementById("first").disabled = currentPage == 1 ? true : false;
        document.getElementById("last").disabled = currentPage == numberOfPages ? true : false;
        */
      }
       
      for (i = 0; i < ratesArrayLength; i++) {
         
      console.log("Keys:",Object.keys(rates)[i])
      console.log("Objects:",Object.values(rates)[i])
      let formatRateValue = Object.values(rates)[i].toLocaleString()
      console.log("formatRateValue:",formatRateValue)
      let listItemR = document.createElement('li');
      let rateKeyString = '"' +  Object.keys(rates)[i] + '"'      
      listItemR.innerHTML = '<p>' + rateKeyString + ' :     ' +  formatRateValue + '</p>';
      listItemR.style.border = 'solid 1px black';
      listItemR.style.backgroundColor = 'lightgrey';
      //cryptosList.appendChild(listItemR);
      
      list.push(listItemR.innerHTML);
      /*console.log("list:",list)*/
      numberOfPages = getNumberOfPages();  
      console.log("numberOfPages:",numberOfPages);  
      loadList();
      
      }

      document.getElementById('next').addEventListener
      ('click', (event) => {
       currentPage += 1;
       loadList();
     }
     )    
      
     document.getElementById('previous').addEventListener
       ('click', (event) => {
        currentPage -= 1;
        loadList();
      }
      )  
       
    }

}
)  
}
)  






