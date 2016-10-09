DataGridColumn.setCellSelector
==============================

Устанавливает функцию которая возвращает значение селектора ячейки.

Syntax
------

.. code:: js

    DataGridColumn.setCellSelector(value);

Parameters
~~~~~~~~~~

.. list-table::
   :header-rows: 1

   * - Name
     - Type
     - Description
   * - value
     - ``Script``
     - Функция возвращающая значение селектора ячейки.


Returns
~~~~~~~

Нет.

Examples
--------

.. code:: js

    DataGridColumn.setCellSelector(function (value) {
      return value;
    });

See Also
--------

-  `getCellSelector() <../DataGridColumn.getCellSelector.html>`__
