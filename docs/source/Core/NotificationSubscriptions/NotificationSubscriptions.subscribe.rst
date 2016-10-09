NotificationSubscriptions.subscribe
===================================

Подписывает на сообщения по заданому ключу.

Description
-----------

Для подписки на сообщение необходимо передать два параметра: ключ и
указатель на функцию обработчика сообщения, а так же есть 3й
необязательный параметр: контекст. При появлении сообщения с заданным
ключем NotificationSubscriptions вызовет данный обработчик сообщения,
передав ему два параметра: ``context`` и ``args``. В параметре
``context`` передается `контекст представления <../../ViewContext/>`__,
в рамках которого была осуществлена подписка; в параметре
``args.message`` - полученное сообщение.

В общем случае порядок регистрации обработчиков сообщений никак не
связан с порядком их вызова. Последнее значит, что между обработчиками
сообщений не должно быть функциональной зависимости.

Syntax
------

.. code:: js

    NotificationSubscriptions.subscribe(routingKey, callback[, context])

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
   * - callback
     - `Обработчик сообщения <../../Script>`__
     - `Обработчик сообщения <../../Script>`__.
   * - context
     - `контекст представления <../../ViewContext/>`__
     - `Контекст представления <../../ViewContext/>`__.


Examples
--------

.. code:: js

    NotificationSubscriptions.subscribe('myRoutingKey', function(context, args) { alert(args.message); }, this);

See Also
--------

-  `unsubscribe() <../NotificationSubscriptions.unsubscribe.html>`__
-  `startConnection() <../NotificationSubscriptions.startConnection.html>`__
-  `stopConnection() <../NotificationSubscriptions.stopConnection.html>`__
