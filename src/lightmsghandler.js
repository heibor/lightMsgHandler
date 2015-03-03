(function() {
    var root = this;

    var msgHandlers = {};

    function addMsgHandler(msg, func, pri) {
        if (!msgHandlers[msg]) msgHandlers[ msg ] = [];

        caller = 'object' == typeof caller ? caller : null;
        pri = parseInt(pri) ? parseInt(pri) : 0;
        msgHandlers[ msg ].push({
            'func' : func,
            'pri' : pri
        });
        msgHandlers[ msg ].sort( function(a, b) {
            return b.pri - a.pri;
        });
    }

    function isMsgHandlerRegistered(msg, func) {
        var ret = false;

        if (msgHandlers[ msg ]) {
            ret = msgHandlers[ msg ].some(function(mh) {
                return mh.func === func;
            });
        }

        return ret;
    }

    function removeMsgHandler(msg, func) {
        var ret = false;

        if ('object' == typeof msgHandlers[msg]) {
            var mh;

            for (var i = msgHandlers[msg].length - 1; i >= 0; i--) {
                mh = msgHandlers[msg][i];

                if (mh.func === func) {
                    msgHandlers[msg].splice(i, 1);

                    ret = true;
                }
            }

            if (!msgHandlers[msg].length) delete msgHandlers[msg];
        }

        return ret;
    }

    var msgHandler = {
        registerMsgHandler : function(msg, func, pri) {
            if ( isMsgHandlerRegistered(msg, func) ) return;

            addMsgHandler(msg, func, pri);
        },

        unregisterMsgHandler : function(msg, func) {
            removeMsgHandler(msg, func);
        }
    };

    root.lightMsgHandler = msgHandler;
}).call(window);
