Logger.debug
============

Регистрирует отладочное сообщение.

Syntax
------

.. code:: js

    Logger.debug(message)

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

    Logger.debug('Message');
    Logger.debug({ message: 'Message' });

See Also
--------

-  `info() <../Logger.info.html>`__
-  `warn() <../Logger.warn.html>`__
-  `error() <../Logger.error.html>`__
-  `trace() <../Logger.trace.html>`__
-  `LogLevel <../LogLevel/>`__
