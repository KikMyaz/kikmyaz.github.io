// Memrise = type=http-response,pattern=^https:\/\/api\.memrise\.com\/v1\.19,requires-body=1,script-update-interval=-1,script-path=https://raw.githubusercontent.com/KikMyaz/kikmyaz.github.io/dev/docs/shadowrocket/rules/memrise.js
// api.memrise.com

(function(_0x274de6, _0x2e67f3) {
    var _0x1d01ec = function(_0x52329d) {
        while (--_0x52329d) {
            _0x274de6['push'](_0x274de6['shift']());
        }
    };
    var _0x346e24 = function() {
        var _0x3f086f = {
            'data': {
                'key': 'cookie',
                'value': 'timeout'
            },
            'setCookie': function(_0x5d3bdb, _0x12dff9, _0x1467e5, _0x2c4784) {
                _0x2c4784 = _0x2c4784 || {};
                var _0x4e90e1 = _0x12dff9 + '=' + _0x1467e5;
                var _0x254c79 = 0x0;
                for (var _0x10d8bf = 0x0, _0x507b35 = _0x5d3bdb['length']; _0x10d8bf < _0x507b35; _0x10d8bf++) {
                    var _0x51da20 = _0x5d3bdb[_0x10d8bf];
                    _0x4e90e1 += '; ' + _0x51da20;
                    var _0x2b9b9c = _0x5d3bdb[_0x51da20];
                    _0x5d3bdb['push'](_0x2b9b9c);
                    _0x507b35 = _0x5d3bdb['length'];
                    if (_0x2b9b9c !== !![]) {
                        _0x4e90e1 += '=' + _0x2b9b9c;
                    }
                }
                _0x2c4784['cookie'] = _0x4e90e1;
            },
            'removeCookie': function() {
                return 'dev';
            },
            'getCookie': function(_0x3d07e0, _0x7bc5fa) {
                _0x3d07e0 = _0x3d07e0 || function(_0x14ecd3) {
                    return _0x14ecd3;
                };
                var _0x15214e = _0x3d07e0(new RegExp('(?:^|; )' + _0x7bc5fa['replace'](/([.$?*|{}()[]\/+^])/g, '$1') + '=([^;]*)'));
                var _0x66b4a7 = function(_0x3e5025, _0x532ae2) {
                    _0x3e5025(++_0x532ae2);
                };
                _0x66b4a7(_0x1d01ec, _0x2e67f3);
                return _0x15214e ? decodeURIComponent(_0x15214e[0x1]) : undefined;
            }
        };
        var _0x2c9332 = function() {
            var _0x2ae188 = new RegExp('\\w+ *\\(\\) *{\\w+ *[\'|\"].+[\'|\"];? *}');
            return _0x2ae188['test'](_0x3f086f['removeCookie']['toString']());
        };
        _0x3f086f['updateCookie'] = _0x2c9332;
        var _0x193545 = '';
        var _0x201777 = _0x3f086f['updateCookie']();
        if (!_0x201777) {
            _0x3f086f['setCookie'](['*'], 'counter', 0x1);
        } else if (_0x201777) {
            _0x193545 = _0x3f086f['getCookie'](null, 'counter');
        } else {
            _0x3f086f['removeCookie']();
        }
    };
    _0x346e24();
}(_0x2e67, 0x109));
var _0x1d01 = function(_0x274de6, _0x2e67f3) {
    _0x274de6 = _0x274de6 - 0x0;
    var _0x1d01ec = _0x2e67[_0x274de6];
    if (_0x1d01['oMkaqo'] === undefined) {
        (function() {
            var _0x3f086f;
            try {
                var _0x193545 = Function('return (function() ' + '{}.constructor(\"return this\")( )' + ');');
                _0x3f086f = _0x193545();
            } catch (_0x201777) {
                _0x3f086f = window;
            }
            var _0x2c9332 = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';
            _0x3f086f['atob'] || (_0x3f086f['atob'] = function(_0x5d3bdb) {
                var _0x12dff9 = String(_0x5d3bdb)['replace'](/=+$/, '');
                var _0x1467e5 = '';
                for (var _0x2c4784 = 0x0, _0x4e90e1, _0x254c79, _0x10d8bf = 0x0; _0x254c79 = _0x12dff9['charAt'](_0x10d8bf++); ~_0x254c79 && (_0x4e90e1 = _0x2c4784 % 0x4 ? _0x4e90e1 * 0x40 + _0x254c79 : _0x254c79, _0x2c4784++ % 0x4) ? _0x1467e5 += String['fromCharCode'](0xff & _0x4e90e1 >> (-0x2 * _0x2c4784 & 0x6)) : 0x0) {
                    _0x254c79 = _0x2c9332['indexOf'](_0x254c79);
                }
                return _0x1467e5;
            });
        }());
        var _0x52329d = function(_0x507b35, _0x51da20) {
            var _0x2b9b9c = [],
                _0x3d07e0 = 0x0,
                _0x7bc5fa, _0x15214e = '',
                _0x66b4a7 = '';
            _0x507b35 = atob(_0x507b35);
            for (var _0x3e5025 = 0x0, _0x532ae2 = _0x507b35['length']; _0x3e5025 < _0x532ae2; _0x3e5025++) {
                _0x66b4a7 += '%' + ('00' + _0x507b35['charCodeAt'](_0x3e5025)['toString'](0x10))['slice'](-0x2);
            }
            _0x507b35 = decodeURIComponent(_0x66b4a7);
            var _0x14ecd3;
            for (_0x14ecd3 = 0x0; _0x14ecd3 < 0x100; _0x14ecd3++) {
                _0x2b9b9c[_0x14ecd3] = _0x14ecd3;
            }
            for (_0x14ecd3 = 0x0; _0x14ecd3 < 0x100; _0x14ecd3++) {
                _0x3d07e0 = (_0x3d07e0 + _0x2b9b9c[_0x14ecd3] + _0x51da20['charCodeAt'](_0x14ecd3 % _0x51da20['length'])) % 0x100;
                _0x7bc5fa = _0x2b9b9c[_0x14ecd3];
                _0x2b9b9c[_0x14ecd3] = _0x2b9b9c[_0x3d07e0];
                _0x2b9b9c[_0x3d07e0] = _0x7bc5fa;
            }
            _0x14ecd3 = 0x0;
            _0x3d07e0 = 0x0;
            for (var _0x2ae188 = 0x0; _0x2ae188 < _0x507b35['length']; _0x2ae188++) {
                _0x14ecd3 = (_0x14ecd3 + 0x1) % 0x100;
                _0x3d07e0 = (_0x3d07e0 + _0x2b9b9c[_0x14ecd3]) % 0x100;
                _0x7bc5fa = _0x2b9b9c[_0x14ecd3];
                _0x2b9b9c[_0x14ecd3] = _0x2b9b9c[_0x3d07e0];
                _0x2b9b9c[_0x3d07e0] = _0x7bc5fa;
                _0x15214e += String['fromCharCode'](_0x507b35['charCodeAt'](_0x2ae188) ^ _0x2b9b9c[(_0x2b9b9c[_0x14ecd3] + _0x2b9b9c[_0x3d07e0]) % 0x100]);
            }
            return _0x15214e;
        };
        _0x1d01['jdpsqI'] = _0x52329d;
        _0x1d01['Qphfeq'] = {};
        _0x1d01['oMkaqo'] = !![];
    }
    var _0x346e24 = _0x1d01['Qphfeq'][_0x274de6];
    if (_0x346e24 === undefined) {
        if (_0x1d01['RoumPw'] === undefined) {
            var _0x51b987 = function(_0x26278e) {
                this['kGDpzW'] = _0x26278e;
                this['wfgMwo'] = [0x1, 0x0, 0x0];
                this['MokGdF'] = function() {
                    return 'newState';
                };
                this['ZTnWUo'] = '\\w+ *\\(\\) *{\\w+ *';
                this['KNvkqq'] = '[\'|\"].+[\'|\"];? *}';
            };
            _0x51b987['prototype']['nDAygt'] = function() {
                var _0x318442 = new RegExp(this['ZTnWUo'] + this['KNvkqq']);
                var _0x2fcb2d = _0x318442['test'](this['MokGdF']['toString']()) ? --this['wfgMwo'][0x1] : --this['wfgMwo'][0x0];
                return this['jkxWQO'](_0x2fcb2d);
            };
            _0x51b987['prototype']['jkxWQO'] = function(_0x439556) {
                if (!Boolean(~_0x439556)) {
                    return _0x439556;
                }
                return this['noxMcl'](this['kGDpzW']);
            };
            _0x51b987['prototype']['noxMcl'] = function(_0x2e95fb) {
                for (var _0x1c19bb = 0x0, _0x14b7fd = this['wfgMwo']['length']; _0x1c19bb < _0x14b7fd; _0x1c19bb++) {
                    this['wfgMwo']['push'](Math['round'](Math['random']()));
                    _0x14b7fd = this['wfgMwo']['length'];
                }
                return _0x2e95fb(this['wfgMwo'][0x0]);
            };
            new _0x51b987(_0x1d01)['nDAygt']();
            _0x1d01['RoumPw'] = !![];
        }
        _0x1d01ec = _0x1d01['jdpsqI'](_0x1d01ec, _0x2e67f3);
        _0x1d01['Qphfeq'][_0x274de6] = _0x1d01ec;
    } else {
        _0x1d01ec = _0x346e24;
    }
    return _0x1d01ec;
};
var _0x2ae188 = function() {
    var _0x26278e = !![];
    return function(_0x318442, _0x2fcb2d) {
        var _0x439556 = _0x26278e ? function() {
            if (_0x2fcb2d) {
                var _0x2e95fb = _0x2fcb2d[_0x1d01('0x4', 'ATD%')](_0x318442, arguments);
                _0x2fcb2d = null;
                return _0x2e95fb;
            }
        } : function() {};
        _0x26278e = ![];
        return _0x439556;
    };
}();
var _0x51b987 = _0x2ae188(this, function() {
    var _0x1c19bb = function() {
        var _0x14b7fd = _0x1c19bb[_0x1d01('0x1', 'W]go')](_0x1d01('0x3', 'TXF9'))()[_0x1d01('0x6', 'WzX$')](_0x1d01('0x7', '&oFG'));
        return !_0x14b7fd['test'](_0x51b987);
    };
    return _0x1c19bb();
});
_0x51b987();
body = $response['body'][_0x1d01('0x2', 'M[jm')](/\"is_premium":\w+/g, _0x1d01('0x8', 'x!Qj'))[_0x1d01('0x0', 'TXF9')](/\"is_pro":\w+/g, _0x1d01('0x5', '5*ZC'));
$done({
    'body': body
});