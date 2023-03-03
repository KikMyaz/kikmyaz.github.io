// https://beautifier.io/
// ENABLE "Unescape printable chars encoded as \xNN or \uNNNN?"

var body = $response.body;
var obj = JSON.parse(body);

obj.subscriber.entitlements = {
  "Premium1" : {
    "expires_date" : "2999-09-28T09:00:00Z",
    "grace_period_expires_date" : null,
    "product_identifier" : "com.audiomack.premium.2018",
    "purchase_date" : "2021-01-24T09:51:12Z"
  },
  "co.bergen.Darkroom.entitlement.allToolsAndFilters": {
    "expires_date": "2029-07-15T05:14:16Z",
    "grace_period_expires_date": null,
    "product_identifier": "co.bergen.Darkroom.product.year.everything",
    "purchase_date": "2022-07-08T05:14:16Z"
  },
  "co.bergen.Darkroom.entitlement.selectiveAdjustments": {
    "expires_date": "2029-07-15T05:14:16Z",
    "grace_period_expires_date": null,
    "product_identifier": "co.bergen.Darkroom.product.year.everything",
    "purchase_date": "2022-07-08T05:14:16Z"
  },
  "sub.pro" : {
    "expires_date" : "2999-09-28T09:00:00Z",
    "grace_period_expires_date" : null,
    "product_identifier" : "com.ddgksf2013.premium.yearly",
    "purchase_date" : "2022-09-08T01:04:18ZZ"
  },
},
  
obj.subscriber.subscriptions = {
  "com.audiomack.premium.2018" : {
    "billing_issues_detected_at" : null,
    "expires_date" : "2999-09-28T09:00:00Z",
    "grace_period_expires_date" : null,
    "is_sandbox" : false,
    "original_purchase_date" : "2021-01-24T09:51:13Z",
    "ownership_type" : "PURCHASED",
    "period_type" : "premium",
    "purchase_date" : "2021-01-24T09:51:12Z",
    "store" : "app_store",
    "unsubscribe_detected_at" : null
  },
  "co.bergen.Darkroom.product.year.everything": {
    "billing_issues_detected_at": null,
    "expires_date": "2029-07-15T05:14:16Z",
    "grace_period_expires_date": null,
    "is_sandbox": false,
    "original_purchase_date": "2022-07-08T05:14:17Z",
    "ownership_type": "PURCHASED",
    "period_type": "normal",
    "purchase_date": "2022-07-08T05:14:16Z",
    "store": "app_store",
    "unsubscribe_detected_at": null
  },
  "com.ddgksf2013.premium.yearly": {
    "billing_issues_detected_at": null,
    "expires_date": "2999-09-28T09:00:00Z",
    "grace_period_expires_date": null,
    "is_sandbox": false,
    "original_purchase_date": "2022-09-08T01:04:18ZZ",
    "ownership_type": "PURCHASED",
    "period_type": "normal",
    "purchase_date": "2022-09-08T01:04:18Z",
    "store": "app_store",
    "unsubscribe_detected_at": null
  }
}

body = JSON.stringify(obj); 
$done({body});
