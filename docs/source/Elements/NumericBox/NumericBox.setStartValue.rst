NumericBox.setStartValue
========================

Устанавливает начальное значение по умолчанию. Заданное значение будет
автоматически подставляться в качестве значения в элементе при нажатии
кнопок ``+`` / ``-``, если значение еще не указано.

Syntax
------

.. code:: js

    NumericBox.setStartValue(value);

Parameters
~~~~~~~~~~

.. list-table::
   :header-rows: 1

   * - Name
     - Type
     - Description
   * - ``value``
     - ``Number``
     - Начальное значение по умолчанию.


Returns
~~~~~~~

Нет.

Examples
--------

.. code:: js

    //js-demo


    var numericBox = new InfinniUI.NumericBox();
    numericBox.setStartValue(1980);
    numericBox.setMinValue(1000);
    numericBox.setMaxValue(2000);
    //  Render
    $elementForExample.append(numericBox.render());

See Also
--------

-  `getStartValue() <NumericBox.getStartValue.html>`__
