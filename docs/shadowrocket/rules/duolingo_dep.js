// ios-api-2.duolingo.com
// DuolingoLogin= type=http-response,pattern=https://ios-api-2.duolingo.com/*/login,requires-body=1,script-path=https://raw.githubusercontent.com/KikMyaz/kikmyaz.github.io/dev/docs/shadowrocket/rules/duolingo_login.js

// USE PCRE2 REGEX FOR SYNTAX TESTING 
// .replace(/[PCRE2 REGEX]/g, '[REPLACEMENT]')
// https://regex101.com/

// DEBUGGING INSTRUCTIONS: ADD "debug=true" 
// https://manual.nssurge.com/scripting/common.html
// SHADOWROCKET: USE SETTINGS -> DIAGNOSTICS -> ENABLE LOGGING
//console.log(body);

var body = $response.body
    .replace(/\\"streak\\":.+?,/g, '\\"streak\\":9999,')
    .replace(/\\"hearts\\":.+?,/g, '\\"hearts\\":9,')
    .replace(/\\"maxHearts\\":.+?,/g, '\\"maxHearts\\":9,')
    .replace(/\\"gems\\":.+?,/g, '\\"gems\\":9999,').replace(/\\"gems\\":.+?,/g, '\\"gems\\":9999,').replace(/\\"gems\\":.+?,/g, '\\"gems\\":9999,')
    .replace(/\\"crowns\\":.+?,/g, '\\"crowns\\":9999,')
    .replace(/\\"lingots\\":.+?,/g, '\\"lingots\\":9,')
    .replace(/\\"totalXp\\":.+?,/g, '\\"totalXp\\":9999,')
    .replace(/\\"monthlyXp\\":.+?,/g, '\\"monthlyXp\\":9999,')
    .replace(/\\"weeklyXp\\":.+?,/g, '\\"weeklyXp\\":9999,')
    .replace(/\\"num_item_streak_freeze\\":.+?,/g, '\\"num_item_streak_freeze\\":9999,')
    .replace(/\\"has_item_premium_subscription\\":false/g, '\\"has_item_gold_subscription\\":true')
    .replace(/\\"has_item_live_subscription\\":false/g, '\\"has_item_live_subscription\\":true')
    .replace(/\\"has_item_streak_wager\\":false/g, '\\"has_item_streak_wager\\":true')
    .replace(/\\"has_item_streak_freeze\\":false/g, '\\"has_item_streak_freeze\\":true')
    .replace(/\\"has_item_streak_repair\\":false/g, '\\"has_item_streak_repair\\":true')
    .replace(/\\"unlimitedHeartsAvailable\\":false/g, '\\"unlimitedHeartsAvailable\\":true')
    .replace(/\\"plusStatus\\":.+?,/g, '\\"plusStatus\\":\\"ON\\",')
    .replace(/\\"SESSION_END_NATIVE\\":.+?\\",\\"/g, '\\"SESSION_END_NATIVE\\":{\\"id\\":0,\\"')
    .replace(/\\"SESSION_QUIT_NATIVE\\":.+?\\",\\"/g, '\\"SESSION_QUIT_NATIVE\\":{\\"id\\":0,\\"')
    .replace(/\\"LEVEL_COMPLETION_REWARDED\\":.+?\\",\\"/g, '\\"LEVEL_COMPLETION_REWARDED\\":{\\"id\\":0,\\"')
    .replace(/\\"SESSION_END_PRACTICE_REWARDED\\":.+?\\",\\"/g, '\\"SESSION_END_PRACTICE_REWARDED\\":{\\"id\\":0,\\"')
    .replace(/\\"SESSION_START_INTERSTITIAL_ADMOB\\":.+?\\",\\"/g, '\\"SESSION_START_INTERSTITIAL_ADMOB\\":{\\"id\\":0,\\"')
    .replace(/\\"SESSION_QUIT_INTERSTITIAL_ADMOB\\":.+?\\",\\"/g, '\\"SESSION_QUIT_INTERSTITIAL_ADMOB\\":{\\"id\\":0,\\"')
    .replace(/\\"SESSION_END_INTERSTITIAL_ADMOB\\":.+?\\",\\"/g, '\\"SESSION_END_INTERSTITIAL_ADMOB\\":{\\"id\\":0,\\"')
    //.replace(/\\"adsConfig\\":.+?}},/g, '\\"adsConfig\\":{');

$done({ body });

/* ADS
// HOST,*.unityads.unity3d.com,REJECT
// DuolingoAds = type=http-response,pattern=https://googleads.g.doubleclick.net/getconfig/pubsetting*,max-size=0,requires-body=true,timeout=10,script-update-interval=60,script-path=https://raw.githubusercontent.com/KikMyaz/kikmyaz.github.io/dev/docs/shadowrocket/rules/duolingo_ads.js
// googleads.g.doubleclick.net

var body = $response.body;
var obj = JSON.parse(body);
obj.ad_unit_settings = [];
body = JSON.stringify(obj);
$done({body}); 
*/

/* METHOD 1
var body = $response.body.replace(/\\"maxHearts\\":.+?,/g, '\\"maxHearts\\":9,').replace(/\\"hearts\\":.+?,/g, '\\"hearts\\":9,').replace(/\\"gems\\":.+?,/g, '\\"gems\\":9999,').replace(/\\"gems\\":.+?,/g, '\\"gems\\":9999,').replace(/\\"gems\\":.+?,/g, '\\"gems\\":9999,').replace(/\\"totalXp\\":.+?,/g, '\\"totalXp\\":9999,').replace(/\\"has_item_premium_subscription\\":false/g, '\\"has_item_gold_subscription\\":true').replace(/\\"has_item_streak_freeze\\":false/g, '\\"has_item_streak_freeze\\":true').replace(/\\"unlimitedHeartsAvailable\\":false/g, '\\"unlimitedHeartsAvailable\\":true');

$done({ body });
*/

/* TEST
let test = `
[CONTENT]
`;
*/

/* METHOD 1
var content = JSON.parse($response.body);
var obj = JSON.parse(content.responses[0].body);
obj.gems = 999;
obj.courses[0].crowns = 9;
obj.totalXp = 999;
obj.gemsConfig.gems = 999;
obj.trackingProperties.gems = 999;
obj.trackingProperties.has_item_gold_subscription = true;
obj.trackingProperties.has_item_rupee_wager = true;
obj.trackingProperties.has_item_streak_freeze = true;
obj.trackingProperties.has_item_immersive_subscription = true;
obj.trackingProperties.has_item_live_subscription = true;
obj.trackingProperties.has_item_streak_wager = true;
obj.trackingProperties.num_item_streak_freeze = 9;
obj.trackingProperties.subscription_item_type = "PREMIUM_SUBSCRIPTION";
obj.health.maxHearts = 9;
obj.health.hearts = 9;
obj.health.unlimitedHeartsAvailable = true;
obj.plusStatus = "ACTIVE";
//obj.adsConfig.units = null;
obj.lingots = 9;
//obj.subscriptionConfigs = "premium";
content.responses[0].body = JSON.stringify(obj);
$done({body: JSON.stringify(content)});
*/

/* SAMPLE
{"responses":[{"status":200,"body":"{STRINGIFY}","headers":{"expires":"0","x-ipcountry":"US","x-xss-protection":"1 ; mode=block","x-content-type-options":"nosniff","vary":"Accept-Encoding","x-frame-options":"DENY","referrer-policy":"no-referrer","no-retry":"1","cache-control":"no-cache, no-store, max-age=0, must-revalidate","pragma":"no-cache","Content-Type":"application/json"}},{"status":200,"body":"{STRINGIFY}","headers":{"expires":"0","x-xss-protection":"1 ; mode=block","x-content-type-options":"nosniff","vary":"Origin,Access-Control-Request-Method,Access-Control-Request-Headers","x-frame-options":"DENY","referrer-policy":"no-referrer","cache-control":"no-cache, no-store, max-age=0, must-revalidate","pragma":"no-cache","Content-Type":"application/json"}}]}
*/

// duolingo-leaderboards-prod.duolingo.com
// Duolingo= type=http-response,pattern=https://duolingo-leaderboards-prod.duolingo.com/leaderboards/*,requires-body=1,script-path=https://raw.githubusercontent.com/KikMyaz/kikmyaz.github.io/dev/docs/shadowrocket/rules/duolingo.js

/* METHOD 2
var body = $response.body;
var url = $request.url;
var obj = JSON.parse(body);
obj['num_sessions_remaining_to_unlock'] = 0;
obj['tier'] = 4;
if(!obj['active']){
 obj['active'] = {}
}
obj['active']['collab_goal_accepted'] = false
obj['active']['complete'] = false
if(!obj['active']['contest']){
 obj['active']['contest'] = {}
}
obj['active']['contest']['contest_end'] = '2099-11-04T00:00:00Z'
obj['active']['contest']['contest_start'] = '2019-10-28T00:00:00Z'
obj['active']['contest']['contest_state'] = 'ACTIVE'
obj['active']['contest']['registration_end'] = '2099-11-03T00:00:00Z'
obj['active']['contest']['registration_state'] = 'OPEN'
body = JSON.stringify(obj);
$done({body});
*/
