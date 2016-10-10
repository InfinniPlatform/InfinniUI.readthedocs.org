DataGridColumn.onSort
=====================

Устанавливает `обработчик события <../../../Core/Script/>`__ на
событие 'onSort'

Description
-----------

Новое значение направления передаётся в параметре
``args.sortDirection``.

Syntax
------

.. code:: js

    DataGridColumn.onSort(callback);

Parameters
~~~~~~~~~~

.. list-table::
   :header-rows: 1

   * - Name
     - Type
     - Description
   * - callback
     - `Обработчик события <../../../Core/Script/>`__
     - `Обработчик события <../../../Core/Script/>`__ о том, что необходимо изменить сортировку элементов DataGrid.


Returns
~~~~~~~

Нет.

Examples
--------

.. code:: js

    column.onSort(callback);

See Also
--------

-  `getSortable() <DataGridColumn.getSortable.html>`__
-  `setSortable() <DataGridColumn.setSortable.html>`__
-  `getSortDirection() <DataGridColumn.getSortDirection.html>`__
-  `setSortDirection() <DataGridColumn.setSortDirection.html>`__
-  `isSortable() <DataGridColumn.isSortable.html>`__
