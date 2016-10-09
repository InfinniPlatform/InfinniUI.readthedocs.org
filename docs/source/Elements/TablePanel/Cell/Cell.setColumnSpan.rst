Cell.setColumnSpan()
====================

Возвращает размер ячейки в колонках.

Syntax
------

.. code:: js

    cell.setColumnSpan(value)

Parameters
~~~~~~~~~~

.. list-table::
   :header-rows: 1

   * - Name
     - Type
     - Description
   * - value
     - ``Integer``
     - Целое число, определяющее то, сколько колонок по горизонтали будет занимать ячейка. Число должно быть в диапазоне от ``1`` до ``12`` включительно.


Returns
~~~~~~~

Метод ничего не возвращает.

Examples
--------

.. code:: js

    cell.setColumnSpan(2);

See Also
--------

-  `getColumnSpan() <../Cell.getColumnSpan.html>`__
