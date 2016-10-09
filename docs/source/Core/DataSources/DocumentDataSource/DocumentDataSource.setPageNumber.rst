DocumentDataSource.setPageNumber()
==================================

Устанавливает номер страницы.

Description
-----------

Если в источнике данных `разрешено обновление списка
элементов <../../BaseDataSource/BaseDataSource.resumeUpdate.html>`__,
изменение номера страницы приводит к автоматическому `обновлению списка
элементов источника
данных <../../BaseDataSource/BaseDataSource.updateItems.html>`__.

Syntax
------

.. code:: js

    DocumentDataSource.setPageNumber(value)

Parameters
~~~~~~~~~~

.. list-table::
   :header-rows: 1

   * - Name
     - Description
   * - value
     - Номер страницы. Целое число, начиная с 0


Returns
~~~~~~~

Метод ничего не возвращает

Examples
--------

.. code:: js

    DocumentDataSource.setPageNumber(5);

See Also
--------

-  `getPageNumber() <../DocumentDataSource.getPageNumber.html>`__
-  `updateItems() <../../BaseDataSource/BaseDataSource.updateItems.html>`__
-  `suspendUpdate() <../../BaseDataSource/BaseDataSource.suspendUpdate.html>`__
-  `resumeUpdate() <../../BaseDataSource/BaseDataSource.resumeUpdate.html>`__
