DocumentDataSource.setNeedTotalCount()
======================================

Устанавливает значение, определяющее необходимость подсчета общего
количества документов.

Description
-----------

Функции `setPageNumber <DocumentDataSource.setPageNumber.html>`__ и
`setPageSize <DocumentDataSource.setPageSize.html>`__ определяют, какие
документы, из хранящихся в InfinniPlatform, будут загружены в источник
данных и сколько их будет. Однако, иногда возникает необходимость узнать
общее количество документов. В таком случае необходимо установить
`needTotalCount <#specific-properties>`__ равным true (например, с
помощью метода ``setNeedTotalCount``, `обновить список элементов
источника данных <../BaseDataSource/BaseDataSource.updateItems.html>`__ и
получит искомое количество с помощью метода
`getTotalCount <DocumentDataSource.getTotalCount.html>`__.

Syntax
------

.. code:: js

    DocumentDataSource.setNeedTotalCount(value)

Parameters
~~~~~~~~~~

.. list-table::
   :header-rows: 1

   * - Name
     - Type
     - Description
   * - value
     - ``Boolean``
     - Значение, определяющее необходимость подсчета общего количества документов


Returns
~~~~~~~

Метод ничего не возвращает.

Examples
--------

.. code:: js

    BaseDataSource.setNeedTotalCount(true);

See Also
--------

-  `getTotalCount() <DocumentDataSource.getTotalCount.html>`__
-  `getNeedTotalCount() <DocumentDataSource.getNeedTotalCount.html>`__
