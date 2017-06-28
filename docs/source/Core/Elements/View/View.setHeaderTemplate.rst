View.setHeaderTemplate()
========================

Устанавливает `функцию <../../Script/>`__ шаблонизации заголовка
представления. Данный шаблон используется для создания заголовка в
случае, когда представление открывается в режиме
`диалога <../LinkView/OpenMode.html>`__.

Syntax
------

.. code:: js

    view.setHeaderTemplate(value)

Parameters
~~~~~~~~~~

.. list-table::
   :header-rows: 1

   * - Name
     - Type
     - Description
   * - value
     - `Script <../../Script/>`__
     - Функция шаблонизации заголовка представления


Returns
~~~~~~~

Метод ничего не возвращает.

Examples
--------

.. code:: js

    var headerTemplate = function (context, args) {
        var label = new Label();
        label.setValue('New title');
        return label;
    }

    view.setOpenStrategy(new OpenModeDialogStrategy());
    view.setHeaderTemplate(headerTemplate);

See Also
--------

-  `getHeaderTemplate() <View.getHeaderTemplate.html>`__
