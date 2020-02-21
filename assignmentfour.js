

// Default is async
//error 1, added p to htt
var http = require('http');
//error 2, function creation was wrong
function myname(){
  //error 3, we do not need this outputted, we need the string
return "Here is my IP address";
}
//error 4, async needed to be added
async function callHttpbi() {
  let promise = new Promise((resolve, reject) => {
    http.get(
     'http://httpbin.org/ip',
     function(response) {
      var str="";
      response.setEncoding('utf8');
      response.on('data', function(data){
      str += data;
     });
     response.on('end', function() {
      var result = JSON.parse(str);
      //error 5 missing var declaration
      var myips = result.origin;
      //error 6 missing resolve(myips)
      resolve(myips)
     });
     }
    );
});

let result = await promise;
//error 7 return not included
return result;
}
//error 8, asynce needed to be added
async function executeAsyncTask(){
  //error 9 typo in function callHttpbi
  const valueA = await callHttpbi()
  const valueB = myname();
  //error 10 missing concatination + ", " + valueA
  console.log(valueB + " " + valueA + ", " + valueA)
// Output Here is my IP address 149.24.160.1, 149.24.160.1
}
//error 11, Unexpected end of input. Needed }
executeAsyncTask();
