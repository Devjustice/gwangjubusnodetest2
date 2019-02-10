
var request = require('request');
var cheerio = require('cheerio');
var url = 'http://api.gwangju.go.kr/xml/arriveInfo';
let stopid = require('./stopid.js');
var queryParams = '?' + encodeURIComponent('ServiceKey') + '=6LlkzoJWKU8inq318FaLpoJU5DnMfCKiuOPaMndL6EhljQAuXZe0%2FUNe0WSAuygwcdufjkYBudRsGHqVmeucyw%3D%3D'; /* Service Key*/
queryParams += '&' + encodeURIComponent('serviceKey') + '=' + encodeURIComponent(''); /* */
queryParams += '&' + encodeURIComponent('BUSSTOP_ID') + '=' + encodeURIComponent('stopid.key1'); /* 정류소 아이디
function intervalFunc(){
request({
    url: url + queryParams,
    method: 'GET'
}, function(error, response, body) {
    //console.log('Status', response.statusCode);
    //console.log('Headers', JSON.stringify(response.headers));
    //  console.log('Reponse received', body);





$ = cheerio.load(body);
$('ARRIVE').each(function(idx){
let line_name  = $(this).find('LINE_NAME').text();
let remain_min = $(this).find('REMAIN_MIN').text();
let arrive_flag = $(this).find('ARRIVE_FLAG').text();
console.log(`bus: ${line_name } remain: ${remain_min  }m  soonarrive: ${arrive_flag  }`)
});


setInterval(intervalFunc, 30000);


});





}


setInterval(intervalFunc, 1500);
