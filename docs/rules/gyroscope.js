//

let obj = JSON.parse($response.body);
obj.user["beta"] = true;
obj.user["active_until_time"] = "2099-01-01T00:00:00Z";
obj.user["x_active_until_time"] = "2099-01-01T00:00:00Z";
$done({body: JSON.stringify(obj)});
