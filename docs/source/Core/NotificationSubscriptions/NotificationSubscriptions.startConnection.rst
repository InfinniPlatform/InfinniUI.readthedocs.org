NotificationSubscriptions.startConnection
=========================================

Устанавливает соединение с сервером по заданому hubName. Так же
осуществляется подписка по всем routingKey которые были добавлены через
метод subscribe или были указаны в метаданных.

Description
-----------

Для успешного установления соединения с сервером, необходимо сначала
добавить хотя бы одну подписку.

Syntax
------

.. code:: js

    NotificationSubscriptions.startConnection(hubName[, onSuccessCallback[, onErrorCallback]])

Parameters
~~~~~~~~~~

.. list-table::
   :header-rows: 1

   * - Name
     - Type
     - Description
   * - hubName
     - ``String``
     - Имя hub proxy. При работе с InfinniPlatform оно равно SignalRPushNotificationServiceHub
   * - onSuccessCallback
     - `Script <../../Script>`__
     - Обработчик события успешного соединения
   * - onErrorCallback
     - `Script <../../Script>`__
     - Обработчик события о том, что при соединений возникла ошибка


Examples
--------

.. code:: js

    NotificationSubscriptions.startConnection("SignalRPushNotificationServiceHub");

See Also
--------

-  `subscribe() <../NotificationSubscriptions.subscribe.html>`__
-  `unsubscribe() <../NotificationSubscriptions.unsubscribe.html>`__
-  `stopConnection() <../NotificationSubscriptions.stopConnection.html>`__
