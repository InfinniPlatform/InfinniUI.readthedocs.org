MessageBus.send
===============

Отправляет сообщение заданного типа.

Description
-----------

Для отправки сообщения необходимо передать два параметра: тип сообщения
и сообщение. Получив такой запрос, шина сообщений осуществляет поиск
всех подписчиков, заинтересованных в получении сообщения с заданным
типом, после чего вызывает соответствующие обработчики сообщений,
передавая каждому из них указанное сообщение.

Syntax
------

.. code:: js

    MessageBus.send(type, message)

Parameters
~~~~~~~~~~

.. list-table::
   :header-rows: 1

   * - Name
     - Type
     - Description
   * - ``type``
     - ``String``
     - Тип сообщения.
   * - ``message``
     - \*
     - Сообщение.


Examples
--------

.. code:: js

    MessageBus.send('myEvent', { value: 123 });

See Also
--------

-  `subscribe() <MessageBus.subscribe.html>`__
