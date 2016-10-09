Logger.error
============

Регистрирует сообщение с ошибкой.

Syntax
------

.. code:: js

    Logger.error(message)

Parameters
~~~~~~~~~~

.. list-table::
   :header-rows: 1

   * - Name
     - Type
     - Description
   * - ``message``
     - ``String``
     - ``Object``
     - Сообщение. В качестве сообщения может выступать строка или объект.


Examples
--------

.. code:: js

    Logger.error('Message');
    Logger.error({ message: 'Message' });

See Also
--------

-  `debug() <../Logger.debug.html>`__
-  `info() <../Logger.info.html>`__
-  `warn() <../Logger.warn.html>`__
-  `trace() <../Logger.trace.html>`__
-  `LogLevel <../LogLevel/>`__
