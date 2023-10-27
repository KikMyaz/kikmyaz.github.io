var body = $response.body;
var obj = JSON.parse(body);

obj.features.adverts = ["disabled"];
obj.userData.accountType = ['premium'];
obj.userData.subscriptions = {
    '0': {
        'sku': 'subscription.premium.gold.annual',
        'typeSubscription': 'annual'
    }
}

body = JSON.stringify(obj);
$done({body}); 
