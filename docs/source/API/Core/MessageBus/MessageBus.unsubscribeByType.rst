MessageBus.unsubscribeByType
============================

Отмена всех подписок на сообщения заданного типа.

Description
-----------

Удаляет все сделанные ранее подписки на событие заданного типа.

Syntax
------

.. code:: js

    MessageBus.unsubscribeByType(type)

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


Examples
--------

.. code:: js

    MessageBus.unsubscribeByType('myEvent');

See Also
--------

-  `subscribe() <../MessageBus.subscribe.html>`__
