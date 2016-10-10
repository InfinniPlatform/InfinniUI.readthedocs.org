ComboBox.setAutocomplete
========================

Устанавливает значение, определяющее, разрешено ли автозавершение ввода.

Description
-----------

Если для ComboBox будет установлено автозавершение ввода, то при наборе
первых нескольких букв значения ComboBox сможет завершить набор за вас.

Syntax
------

.. code:: js

    comboBox.setAutocomplete(value)

Parameters
~~~~~~~~~~

.. list-table::
   :header-rows: 1

   * - Name
     - Type
     - Description
   * - value
     - ``Boolean``
     - Флаг, определяющий, разрешено ли автозавершение ввода. Значение ``true`` означает, что автозавершение ввода разрешено, значение ``false`` - запрещено


Returns
~~~~~~~

Метод ничего не возвращает.

Examples
--------

.. code:: js

    comboBox.setAutocomplete(true);

See Also
--------

-  `getAutocomplete() <ComboBox.getAutocomplete.html>`__
