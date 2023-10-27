//

//DocumentsVPN1 = type=http-response,pattern=https://d1syh6mjear537.cloudfront.net/user/remainingTraffic*,requires-body=1,script-update-interval=-1,script-path=https://raw.githubusercontent.com/KikMyaz/kikmyaz.github.io/dev/docs/shadowrocket/rules/documents_vpn.js
//DocumentsVPN2 = type=http-response,pattern=https://ios.stable-vpn.com/user/remainingTraffic*,requires-body=1,script-update-interval=-1,script-path=https://raw.githubusercontent.com/KikMyaz/kikmyaz.github.io/dev/docs/shadowrocket/rules/documents_vpn.js
// d1syh6mjear537.cloudfront.net, ios.stable-vpn.com

/* VPN
var body = $response.body;
var obj = JSON.parse(body);
obj.traffic_limit += 52428800000;
obj.traffic_remaining += 52428800000;
obj.traffic_start -= 1000000;
body = JSON.stringify(obj);
$done({body}); 
*/

/* METHOD 1
var obj = JSON.parse($response.body);
obj ={
"isEligibleForIntroPeriod":true,
"originalTransactionId":"689300364339354",
"subscriptionExpirationDate":"12:25 12/12/2029",
"subscriptionState":"active",
"subscriptionReceiptId":"152304284583",
"isDocuments6User":true,
"subscriptionAutoRenewStatus":"autoRenewOff",
"isInGracePeriod":true
}
$done({body: JSON.stringify(obj)});
*/

/* METHOD 2
var obj = {
   originalTransactionId: "20000625420102",
   subscriptionState: "trial",
   isInGracePeriod: false,
   subscriptionExpirationDate: "17:48 25/11/2099",
   isDocuments6User: true,
   isEligibleForIntroPeriod: false,
   subscriptionAutoRenewStatus: "autoRenewOff",
   subscriptionReceiptId: "1530908572000",
};
*/

/* METHOD 3
re('\\w{1,2}\/\\w{1,2}\/\\w{4}@"subscriptionState":"\\w+"@"is(.+)User":false','25/11/2099@"subscriptionState":"active"@"is$1User":true');

function re() {
var body = $response.body;
 if (arguments[0].includes("@")) {
  var regs = arguments[0].split("@");
  var strs = arguments[1].split("@");
  for (i = 0;i < regs.length;i++) {
   var reg = new RegExp(regs[i],"g");
   body = body.replace(reg, strs[i]);
 }
}
 else {
  var reg = new RegExp(arguments[0],"g");
  body = body.replace(reg, arguments[1]);
}
 $done({body});
} 
*/
