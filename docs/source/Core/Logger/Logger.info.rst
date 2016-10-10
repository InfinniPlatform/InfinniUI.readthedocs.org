Logger.info
===========

Регистрирует информационное сообщение.

Syntax
------

.. code:: js

    Logger.info(message)

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

    Logger.info('Message');
    Logger.info({ message: 'Message' });

See Also
--------

-  `debug() <Logger.debug.html>`__
-  `warn() <Logger.warn.html>`__
-  `error() <Logger.error.html>`__
-  `trace() <Logger.trace.html>`__
-  `LogLevel <LogLevel/>`__
