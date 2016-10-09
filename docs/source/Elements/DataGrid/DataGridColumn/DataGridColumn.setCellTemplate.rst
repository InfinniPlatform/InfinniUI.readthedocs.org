DataGridColumn.setCellTemplate
==============================

Устанавливает `функцию <../../../../Core/Script/>`__ шаблонизации ячейки
дочернего элемента DataGrid.

Syntax
------

.. code:: js

    DataGridColumn.setCellTemplate();

Parameters
~~~~~~~~~~

.. list-table::
   :header-rows: 1

   * - Name
     - Type
     - Description
   * - value
     - `Script <../../../../Core/Script/>`__
     - Функция шаблонизации ячейки дочернего элемента DataGrid. В параметре ``args`` передается информация, необходимая для формирования `визуального элемента <../../../../Core/Elements/Element/>`__, который будет отображен в качестве элемента DataGrid. Результатом работы функции должен быть `визуальный элемент <../../../../Core/Elements/Element/>`__


Returns
~~~~~~~

Нет.

Examples
--------

.. code:: js

    DataGridColumn.setCellTemplate(function(context, argument) {
      var cell = new Label();
      cell.setValue(argument.value);
      return cell;
    });

See Also
--------

-  `getCellTemplate() <../DataGridColumn.getCellTemplate.html>`__
