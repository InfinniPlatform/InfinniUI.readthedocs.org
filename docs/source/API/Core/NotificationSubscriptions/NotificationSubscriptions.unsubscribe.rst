NotificationSubscriptions.unsubscribe
=====================================

Отписывает от сообщений по заданому ключу и контексту.

Description
-----------

Отписывает от сообщений по заданому ключу и контексту, в случае если
контекст не передается, происходит отмена всех подписок по заданому
ключу.

Syntax
------

.. code:: js

    NotificationSubscriptions.unsubscribe(routingKey[, context])

Parameters
~~~~~~~~~~

.. list-table::
   :header-rows: 1

   * - Name
     - Type
     - Description
   * - routingKey
     - ``String``
     - Ключ подписки.
   * - context
     - `контекст представления <../../ViewContext/>`__
     - `Контекст представления <../../ViewContext/>`__.


Examples
--------

.. code:: js

    NotificationSubscriptions.unsubscribe('myRoutingKey', this);

See Also
--------

-  `subscribe() <../NotificationSubscriptions.subscribe.html>`__
-  `startConnection() <../NotificationSubscriptions.startConnection.html>`__
-  `stopConnection() <../NotificationSubscriptions.stopConnection.html>`__
