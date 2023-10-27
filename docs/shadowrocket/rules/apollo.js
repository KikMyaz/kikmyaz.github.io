//

;(async () => {
    const headers = $request.headers

    delete headers['authorization']
    headers['authorization'] = 'Basic bldITEp6ZGNKNjVzVlRnaWlJSy1rZzo='
    
    /*
    Base64 Decoded: nWHLJzdcJ65sVTgiiIK-kg
    */

    $done({ headers })
})()