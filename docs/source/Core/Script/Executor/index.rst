Executor
=============

Создает и настраивает скрипт, по переданным метаданным и билдеру.

Parameters
~~~~~~~~~~

.. list-table::
   :header-rows: 1

   * - Name
     - Type
     - Description
   * - metadata
     - ``String``, ``Action Metadata``
     -  Метаданные из которых необходимо создать Script
   * - builder
     -  `Билдер <../../Builders/>`__
     -  Билдер
   * - builderParams
     -  ``Object``
     -  Параметры билдера

Examples
--------

.. code:: js

    var onClickExecutor = InfinniUI.Executor( metadata, builder, builderParams );