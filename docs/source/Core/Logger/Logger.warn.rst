Logger.warn
===========

Регистрирует сообщение с предупреждением.

Syntax
------

.. code:: js

    Logger.warn(message)

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

    Logger.warn('Message');
    Logger.warn({ message: 'Message' });

See Also
--------

-  `debug() <Logger.debug.html>`__
-  `info() <Logger.info.html>`__
-  `error() <Logger.error.html>`__
-  `trace() <Logger.trace.html>`__
-  `LogLevel <LogLevel/>`__
