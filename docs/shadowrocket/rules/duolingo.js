// SAVE THIS SCRIPT LOCALLY AFTER IMPORTING
// LARGE 1.5 MiB JSON RESPONSE
// console.log($response.body)

var body = $response.body
    .replace(/\\"hearts\\":.+?,/g, '\\"hearts\\":9,')
    .replace(/\\"maxHearts\\":.+?,/g, '\\"maxHearts\\":9,')
    .replace(/\\"gems\\":.+?,/g, '\\"gems\\":9999,').replace(/\\"gems\\":.+?,/g, '\\"gems\\":9999,').replace(/\\"gems\\":.+?,/g, '\\"gems\\":9999,')
    .replace(/\\"totalXp\\":.+?,/g, '\\"totalXp\\":9999,')
    .replace(/\\"unlimitedHeartsAvailable\\":false/g, '\\"unlimitedHeartsAvailable\\":true')
    .replace(/\\"adsConfig\\":.+?}},/g, '\\"adsConfig\\":{');
;
$done({ body });