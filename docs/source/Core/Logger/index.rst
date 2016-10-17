Logger
======

Message logging service.

Description
-----------

Message logging service is a program object which provides methods to register log messages of different `levels <LogLevel.html>`__:
Debug, info, warning, errors and tracing messages. The serivce also can set the level of registered messages defining how elaborate logging indo will be.

Syntax
------

.. code:: js

    new Logger(level)

Parameters
~~~~~~~~~~

.. list-table::
   :header-rows: 1

   * - Name
     - Type
     - Description
   * - ``level``
     - `LogLevel <LogLevel.html>`__
     - Min `level of logging <LogLevel.html>`__.


Methods
-------

.. list-table::
   :header-rows: 1

   * - Name
     - Description
   * - `getLevel <Logger.getLevel.html>`__
     - Returns min  `logging level <LogLevel.html>`__.
   * - `setLevel <Logger.setLevel.html>`__
     - Sets min `logging level <LogLevel.html>`__.
   * - `debug <Logger.debug.html>`__
     - Registers debugging message.
   * - `info <Logger.info.html>`__
     - Registers info message.
   * - `warn <Logger.warn.html>`__
     - Registers warning message.
   * - `error <Logger.error.html>`__
     - Registers error message.
   * - `trace <Logger.trace.html>`__
     - Register tracing message.



.. toctree::
   :hidden:

   Logger.debug.rst
   Logger.error.rst
   Logger.getLevel.rst
   Logger.info.rst
   Logger.setLevel.rst
   Logger.trace.rst
   Logger.warn.rst
   LogLevel.rst
