//

var body = $response.body;
var obj = JSON.parse(body);

obj.promotions = [];
obj.treatedExperiments = [];

body = JSON.stringify(obj);
$done({body}); 
