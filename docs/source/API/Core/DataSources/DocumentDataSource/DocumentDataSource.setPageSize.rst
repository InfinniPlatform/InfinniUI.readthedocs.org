DocumentDataSource.setPageSize()
================================

Устанавливает размер страницы.

Description
-----------

Если в источнике данных `разрешено обновление списка
элементов <../../BaseDataSource/BaseDataSource.resumeUpdate.html>`__,
изменение размера страницы приводит к автоматическому `обновлению списка
элементов источника
данных <../../BaseDataSource/BaseDataSource.updateItems.html>`__.

Syntax
------

.. code:: js

    DocumentDataSource.setPageSize(value)

Parameters
~~~~~~~~~~

.. list-table::
   :header-rows: 1

   * - Name
     - Description
   * - value
     - Размер страницы. Положительное число


Returns
~~~~~~~

Метод ничего не возвращает

Examples
--------

.. code:: js

    DocumentDataSource.setPageSize(50);

See Also
--------

-  `getPageSize() <../DocumentDataSource.getPageSize.html>`__
-  `updateItems() <../../BaseDataSource/BaseDataSource.updateItems.html>`__
-  `suspendUpdate() <../../BaseDataSource/BaseDataSource.suspendUpdate.html>`__
-  `resumeUpdate() <../../BaseDataSource/BaseDataSource.resumeUpdate.html>`__
