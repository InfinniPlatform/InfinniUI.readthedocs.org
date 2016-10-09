NotificationSubscriptions.on
============================

Подписка на события signalR.

Syntax
------

.. code:: js

    NotificationSubscriptions.on(eventName, callback)

Parameters
~~~~~~~~~~

.. list-table::
   :header-rows: 1

   * - Name
     - Type
     - Description
   * - eventName
     - ``String``
     - Имя события на которое необходимо подписаться, полный перечень можно найти в `документации к signalR <http://www.asp.net/signalr/overview/guide-to-the-api/hubs-api-guide-javascript-client>`__
   * - callback
     - `Script <../../Script>`__
     - Обработчик события eventName


Examples
--------

.. code:: js

    NotificationSubscriptions.on('disconnected', function() {
      NotificationSubscriptions.reconnection();
    });

    NotificationSubscriptions.on('error', function(error) {
      console.log(error);
    });

See Also
--------

-  `subscribe() <../NotificationSubscriptions.subscribe.html>`__
-  `unsubscribe() <../NotificationSubscriptions.unsubscribe.html>`__
-  `startConnection() <../NotificationSubscriptions.startConnection.html>`__
-  `stopConnection() <../NotificationSubscriptions.stopConnection.html>`__
-  `reconnection() <../NotificationSubscriptions.reconnection.html>`__
-  `isDisconnected() <../NotificationSubscriptions.isDisconnected.html>`__
