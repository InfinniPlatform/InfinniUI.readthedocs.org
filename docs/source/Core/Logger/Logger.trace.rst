Logger.trace
============

Регистрирует сообщение трассировки.

Syntax
------

.. code:: js

    Logger.trace(message)

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

    Logger.trace('Message');
    Logger.trace({ message: 'Message' });

See Also
--------

-  `debug() <Logger.debug.html>`__
-  `info() <Logger.info.html>`__
-  `warn() <Logger.warn.html>`__
-  `error() <Logger.error.html>`__
-  `LogLevel <LogLevel/>`__
