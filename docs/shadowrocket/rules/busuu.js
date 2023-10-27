//

var body = $response.body;
var obj = JSON.parse(body);

obj.data.is_premium = true;
obj.data.access.tier = "plus";
obj.data.premium_data.type = "plus";
obj.data.premium_data.product = "plus";
obj.data.premium_data.created = 1677511824;
obj.data.premium_data.started = 1677511824;
obj.data.premium_data.expiration = 2007511824;
obj.data.premium_data.subscription_status = "active";
obj.data.premium_data.free_trial.free_trial = true;

body = JSON.stringify(obj);
$done({body}); 
