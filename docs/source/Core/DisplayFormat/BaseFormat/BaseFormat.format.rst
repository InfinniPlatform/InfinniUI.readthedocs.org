BaseFormat.format
=================

Форматирует один или несколько объектов.. Если для форматирования
передано несколько объектов, то возвращается строка отформатированных
значений, разделенных символами [BaseFormat.Separator].

Syntax
------

.. code:: js

    Format.format(value);

Parameters
~~~~~~~~~~

.. list-table::
   :header-rows: 1

   * - Name
     - Type
     - Description
   * - ``value``
     - \*
     - Форматируемое значение.


Returns
-------

Отформатированное представление.

Examples
--------

.. code:: js

    Format.format([33, 44]);

See Also
--------

-  `format() <../BaseFormat.format.html>`__
