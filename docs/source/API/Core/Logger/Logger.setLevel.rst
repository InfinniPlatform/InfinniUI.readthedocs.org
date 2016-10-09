Logger.setLevel
===============

Возвращает минимальный `уровень регистрируемых
сообщений <../LogLevel/>`__.

Syntax
------

.. code:: js

    Logger.setLevel(value)

Parameters
~~~~~~~~~~

.. list-table::
   :header-rows: 1

   * - Name
     - Type
     - Description
   * - ``value``
     - `LogLevel <../LogLevel/>`__
     - Устанавливает `уровень регистрируемых сообщений <../LogLevel/>`__.


Examples
--------

.. code:: js

    var level = Logger.setLevel(LOG_LEVEL.error);
    Logger.debug('Message'); // ignore
    Logger.info('Message');  // ignore
    Logger.warn('Message');  // ignore
    Logger.error('Message'); // log
    Logger.trace('Message'); // log

See Also
--------

-  `getLevel() <../Logger.getLevel.html>`__
-  `LogLevel <../LogLevel/>`__
