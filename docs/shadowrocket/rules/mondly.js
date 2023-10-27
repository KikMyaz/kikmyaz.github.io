// Mondly = type=http-response,pattern=^https:\/\/api\.mondlylanguages\.com\/v3\/ios\/user\/(login|sync),requires-body=1,script-update-interval=-1,script-path=https://raw.githubusercontent.com/KikMyaz/kikmyaz.github.io/dev/docs/shadowrocket/rules/mondly.js
// api.mondlylanguages.com

var objc = JSON.parse($response.body);

var prod1 = { "is_from_current_platform" : true, "id" : "12month_all_4_trial", "role" : "12month", "is_grace_period" : false, "is_auto_renewing" : false, "expiration_date" : 1670665666, "is_billing_retry_period" : false, "is_initial_purchase" : false, "is_in_free_trial_period" : true, "is_upgraded" : false };

var prod2 = { "is_from_current_platform" : false, "id" : "categ22", "role" : "categ22", "is_grace_period" : false, "is_auto_renewing" : false, "expiration_date" : 0, "is_billing_retry_period" : false, "is_initial_purchase" : false, "is_in_free_trial_period" : false, "is_upgraded" : false };

objc.purchased_products.push(prod1)
objc.purchased_products.push(prod2)

//console.log(objc)

$done({body : JSON.stringify(objc)});
