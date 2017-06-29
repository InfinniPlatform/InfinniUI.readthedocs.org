Logger
======

Сервис регистрации сообщений.

Description
-----------

Сервис регистрации сообщений - программный объект, который предоставляет
методы для регистрации сообщений разных `уровней <LogLevel.html>`__:
отладка, информация, предупреждения, ошибки и трассировка. Также сервис
предоставляет возможность установить минимальный уровень регистрируемых
сообщений, что позволяет управлять тем, насколько подробной будет
регистрируемая информация.

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
     - Минимальный `уровень регистрируемых сообщений <LogLevel.html>`__.


Methods
-------

.. list-table::
   :header-rows: 1

   * - Name
     - Description
   * - `getLevel <Logger.getLevel.html>`__
     - Возвращает минимальный `уровень регистрируемых сообщений <LogLevel.html>`__.
   * - `setLevel <Logger.setLevel.html>`__
     - Устанавливает минимальный `уровень регистрируемых сообщений <LogLevel.html>`__.
   * - `debug <Logger.debug.html>`__
     - Регистрирует отладочное сообщение.
   * - `info <Logger.info.html>`__
     - Регистрирует информационное сообщение.
   * - `warn <Logger.warn.html>`__
     - Регистрирует сообщение с предупреждением.
   * - `error <Logger.error.html>`__
     - Регистрирует сообщение с ошибкой.
   * - `trace <Logger.trace.html>`__
     - Регистрирует сообщение трассировки.



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
