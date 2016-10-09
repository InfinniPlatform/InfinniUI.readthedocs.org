LinkView.setViewTemplate()
==========================

Устанавливает `функцию <../../../../Script/>`__ шаблонизации
представления.

Syntax
------

.. code:: js

    linkView.setViewTemplate(value)

Parameters
~~~~~~~~~~

.. list-table::
   :header-rows: 1

   * - Name
     - Type
     - Description
   * - value
     - `Script <../../../../Script/>`__
     - Функция шаблонизации заголовка представления


Returns
~~~~~~~

Метод ничего не возвращает.

Examples
--------

.. code:: js

    var viewTemplate = function (context, args) {
        var label = new Label();
        label.setValue('View Body');
        return label;
    }

    linkView.setViewTemplate(viewTemplate);
