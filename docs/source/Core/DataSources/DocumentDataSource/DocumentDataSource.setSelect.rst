DocumentDataSource.setSelect()
==============================

Устанавливает правило отображения документов.

Syntax
------

.. code:: js

    DocumentDataSource.setSelect(value)

Parameters
~~~~~~~~~~

.. list-table::
   :header-rows: 1

   * - Name
     - Type
     - Description
   * - value
     - ``String``
     - Правило отображения документов


Returns
~~~~~~~

Метод ничего не возвращает.

Select Format
-------------

.. list-table::
   :header-rows: 1

   * - Syntax
     - Description
   * - include(f1, f2, ...)
     - Элементы источника данных будут содержать только поля f1, f2, ...
   * - exclude(f1, f2, ...)
     - Элементы источника данных будут содержать все свои исходные поля, кроме f1, f2, ...


Examples
--------

.. code:: js

    BaseDataSource.setSelect("include(name, full_address, stage)");

See Also
--------

-  `getSelect() <DocumentDataSource.getSelect.html>`__
