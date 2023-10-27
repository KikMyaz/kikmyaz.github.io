//

// TextNowSubscription = type=http-response,pattern=https://api.textnow.me/api2.0/users/*/(premium|subscription)_state*,requires-body=1,max-size=0,script-update-interval=-1,script-path=https://raw.githubusercontent.com/KikMyaz/kikmyaz.github.io/dev/docs/shadowrocket/rules/textnow_subscription.js

/*
var obj = JSON.parse($response.body);
obj['result'].state = "ACTIVE";
obj['error_code'] = 0;

$done({body: JSON.stringify(obj)});
*/

//

//TextNowWallet = type=http-response,pattern=https://api.textnow.me/api2.0/users/*/wallet*,requires-body=1,max-size=0,script-update-interval=-1,script-path=https://raw.githubusercontent.com/KikMyaz/kikmyaz.github.io/dev/docs/shadowrocket/rules/textnow_wallet.js

/*
var obj = JSON.parse($response.body);
obj['result'].textnow_credit = 99;
obj['result'].account_balance = 999;
obj['error_code'] = 0;

$done({body: JSON.stringify(obj)});
*/
