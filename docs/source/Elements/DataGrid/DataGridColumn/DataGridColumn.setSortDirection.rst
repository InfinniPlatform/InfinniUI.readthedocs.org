DataGridColumn.setSortDirection
===============================

Возвращает направление сортировки.

Description
-----------

Возможны следующие направления сортировки:

-  asc - сортировка по возрастанию,
-  desc - сортировка по убыванию.

Syntax
------

.. code:: js

    DataGridColumn.setSortDirection(value);

Parameters
~~~~~~~~~~

.. list-table::
   :header-rows: 1

   * - Name
     - Type
     - Description
   * - value
     - ``String``
     - Направление сортировки.


Returns
~~~~~~~

Нет.

Examples
--------

.. code:: js

    column.setSortDirection('asc');

See Also
--------

-  `getSortable() <../DataGridColumn.getSortable.html>`__
-  `setSortable() <../DataGridColumn.setSortable.html>`__
-  `getSortDirection() <../DataGridColumn.getSortDirection.html>`__
-  `isSortable() <../DataGridColumn.isSortable.html>`__
-  `onSort() <../DataGridColumn.onSort.html>`__
