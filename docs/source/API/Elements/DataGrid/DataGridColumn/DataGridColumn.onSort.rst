DataGridColumn.onSort
=====================

Устанавливает `обработчик события <../../../../Core/Script/>`__ на
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

+-------+-------+-------------+
Name  | Type  | Description |
+=======+=======+=============+
callb | `Обра | `Обработчик |
ack   | ботчи | события <.. |
      | к     | /../../../C |
      | событ | ore/Script/ |
      | ия <. | >`__        |
      | ./../ | о том, что  |
      | ../.. | необходимо  |
      | /Core | изменить    |
      | /Scri | сортировку  |
      | pt/>` | элементов   |
      | __    | DataGrid.   |
+-------+-------+-------------+

Returns
~~~~~~~

Нет.

Examples
--------

.. code:: js

    column.onSort(callback);

See Also
--------

-  `getSortable() <../DataGridColumn.getSortable.html>`__
-  `setSortable() <../DataGridColumn.setSortable.html>`__
-  `getSortDirection() <../DataGridColumn.getSortDirection.html>`__
-  `setSortDirection() <../DataGridColumn.setSortDirection.html>`__
-  `isSortable() <../DataGridColumn.isSortable.html>`__
