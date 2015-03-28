Name
====

lightMsgHandler - A micro message handler used in the context of JavaScript.

Description
===========

A lightly JavaScript handler used for register the message handler or send message to its handler. It can decouple your systems to some extent.

Synopsis
========

```javascript
    function msg1Handler(p1, p2) {
        console.log('this is handler for message1', p1, p2);
    }

    lightMsgHandler.registerMsgHandler('msg1', msg1Handler);
    lightMsgHandler.sendMsg('msg1', 'p1', 'p2');
    lightMsgHandler.removeMsgHander('msg1', msg1Handler);
```

Methods
=======

```javascript
    /**
     * @param {String} [msg] the message name
     * @param {Function} [handler] the message handler
     * @param {Number} [pri] the message primary level
     */
    lightMsgHandler.registerMsgHandler(msg, handler, pri);
```

This method register a function as the message handler for a message. A message can have many handlers, so you can register many different handlers for a message. These handlers will be called in the order of registry.
