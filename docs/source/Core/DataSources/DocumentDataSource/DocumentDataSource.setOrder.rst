DocumentDataSource.setOrder()
=============================

Устанавливает правило сортировки документов.

Syntax
------

.. code:: js

    DocumentDataSource.setOrder(value)

Parameters
~~~~~~~~~~

.. list-table::
   :header-rows: 1

   * - Name
     - Type
     - Description
   * - value
     - ``String``
     - Правило сортировки документов


Returns
~~~~~~~

Метод ничего не возвращает.

Order Format
------------

Правила сортировки можно указывать через запятую. При этом приоритет
сортировки будет зависеть от порядка следования.

.. list-table::
   :header-rows: 1

   * - Syntax
     - Description
   * - asc(f1, f2, ...)
     - Элементы источника данных будут сортироваться по возврастанию полей f1, f2, ...
   * - desc(f1, f2, ...)
     - Элементы источника данных будут сортироваться по убыванию полей f1, f2, ...


Examples
--------

.. code:: js

    BaseDataSource.setOrder("asc(LastName),desc(FirstName,MiddleName),asc(Birthday)");

See Also
--------

-  `getOrder() <DocumentDataSource.getOrder.html>`__
