//

var obj = JSON.parse($response.body);
obj['captcha_required'] = false;
obj['features'].cdma_fallback = true;
obj['features'].e911_accepted = true;
obj['features'].is_employee = true;
obj['show_ads'] = false;
obj['premium_calling'] = true;
obj['unlimited_calling'] = true;

$done({body: JSON.stringify(obj)});
