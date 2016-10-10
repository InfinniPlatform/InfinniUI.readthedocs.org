DataBinding.setDefaultValue()
=============================

Устанавливает значение по умолчанию для элемента. Элемент принимает это
значение, если направление обмена данными в привязке установлено в
`twoWay <BindingMode/>`__ или `toElement <BindingMode/>`__, до тех
пор, пока источник данных не загрузится и не установит значение для
элемента.

Syntax
------

.. code:: js

    dataBinding.setDefaultValue(value)

Parameters
~~~~~~~~~~

.. list-table::
   :header-rows: 1

   * - Name
     - Description
   * - value
     - Значение по умолчанию для элемента


Returns
~~~~~~~

Метод ничего не возвращает.

Examples
--------

.. code:: js

    dataBinding.setDefaultValue("Ivanov");

See Also
--------

-  `getDefaultValue() <DataBinding.getDefaultValue.html>`__
