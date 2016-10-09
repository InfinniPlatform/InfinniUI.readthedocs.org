Button.setContentTemplate
=========================

Устанавливает `функцию <../../../Core/Script/>`__ шаблонизации
содержимого кнопки.

Syntax
------

.. code:: js

    button.setContentTemplate(value)

Parameters
~~~~~~~~~~

.. list-table::
   :header-rows: 1

   * - Name
     - Type
     - Description
   * - value
     - `Script <../../Script/>`__
     - Функция шаблонизации содержимого кнопки


Returns
~~~~~~~

Метод ничего не возвращает.

Examples
--------

.. code:: js

    //js-demo
    var button = new Button();
    var contentTemplate = function (context, args) {
        var label = new Label();
        label.setValue('Button 1');
        return label;
    }

    button.setContentTemplate(contentTemplate);
    $elementForExample.append(button.render());

See Also
--------

-  `getContentTemplate <../Button.getContentTemplate.html>`__
