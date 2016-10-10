DataGridColumn.getCellTemplate
==============================

Возвращает `функцию <../../../Core/Script/>`__ шаблонизации дочернего
элемента DataGrid.

Syntax
------

.. code:: js

    DataGridColumn.getCellTemplate();

Parameters
~~~~~~~~~~

Нет

Returns
~~~~~~~

`Функция <../../../Core/Script/>`__ шаблонизации ячейки дочернего
элемента DataGrid. В параметре ``args`` передается информация,
необходимая для формирования `визуального
элемента <../../../Core/Elements/Element/>`__, который будет
отображен в качестве элемента DataGrid. Результатом работы функции
должен быть `визуальный элемент <../../../Core/Elements/Element/>`__.

Examples
--------

.. code:: js

    var cellTemplate = DataGridColumn.getCellTemplate();

See Also
--------

-  `setCellTemplate() <DataGridColumn.setCellTemplate.html>`__
