DataGridColumn.setHeaderTemplate
================================

Устанавливает `функцию <../../../../Core/Script/>`__ шаблонизации ячейки
заголовка DataGrid.

Syntax
------

.. code:: js

    DataGridColumn.setHeaderTemplate(value);

Parameters
~~~~~~~~~~

.. list-table::
   :header-rows: 1

   * - Name
     - Type
     - Description
   * - value
     - `Script <../../../../Core/Script/>`__
     - Функция шаблонизации ячейки заголовка DataGrid. Результатом работы функции должен быть `визуальный элемент <../../../../Core/Elements/Element/>`__


Returns
~~~~~~~

Нет.

Examples
--------

.. code:: js

    DataGridColumn.setHeaderTemplate(function(context, argument) {
      var header = new Label();
      header.setValue(argument.value);
      return header;
    });

See Also
--------

-  `getHeaderTemplate() <../DataGridColumn.getHeaderTemplate.html>`__
