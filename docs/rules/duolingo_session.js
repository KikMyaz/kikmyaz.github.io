//

var body = $request.body;
var obj = JSON.parse(body);

obj.isHarderPractice = true;
obj.shouldLearnThings = true;
obj.shouldGrantPityXp = true;
obj.failed = false;
obj.hasBoost = true;
obj.enableBonusPoints = true;

body = JSON.stringify(obj);
$done({body}); 
