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

This method register a function as the message handler for a message. A message can have many handlers, so you can register many different handlers for a message. These handlers will be called in the order of their privileges. If not specify a handler’s privilege, its default value will be set to 0.

```javascript
    /**
     * @param {String} [msg] the message name
     */
    lightMsgHandler.sendMsg(msg [, …]);
``` 

This method will send a message, all handlers of the message will be called in the order of their privileges. You can put other additional parameters at the end of ‘*msg*’, all parameters will be passed to these handlers.

```javascript
    /**
     * @param {String} [msg] the message name
     * @param {Function} [handler] the message handler
     */
    lightMsgHandler.unregisterMsgHandler(msg, handler);
```

This method will remove a handler for a message. If the handler was not registered before, this method will do nothing. When you do not want to a handler to handle the message, you can call this method to remove the handler.