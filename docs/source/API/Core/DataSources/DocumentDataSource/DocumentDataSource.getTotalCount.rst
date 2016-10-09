DocumentDataSource.getTotalCount()
==================================

Возвращает общее количество документов, хранящихся в InfinniPlatform и
соответсвующих запросу.

Description
-----------

Функции `setPageNumber <../DocumentDataSource.setPageNumber.html>`__ и
`setPageSize <../DocumentDataSource.setPageSize.html>`__ определяют, какие
документы, из хранящихся в InfinniPlatform, будут загружены в источник
данных и сколько их будет. Однако, иногда возникает необходимость узнать
общее количество документов. В таком случае необходимо установить
`needTotalCount <../#specific-properties>`__ равным true (например, с
помощью метода
`setNeedTotalCount <../DocumentDataSource.setNeedTotalCount.html>`__),
`обновить список элементов источника
данных <../../BaseDataSource/BaseDataSource.updateItems.html>`__ и получит
искомое количество с помощью метода ``getTotalCount``.

Syntax
------

.. code:: js

    DocumentDataSource.getTotalCount()

Parameters
~~~~~~~~~~

Нет

Returns
~~~~~~~

Общее количество документов, хранящихися в InfinniPlatform и
соответсвующих запросу.

Examples
--------

.. code:: js

    var totalCount = DocumentDataSource.getTotalCount();

See Also
--------

-  `getNeedTotalCount() <../DocumentDataSource.getNeedTotalCount.html>`__
-  `setNeedTotalCount() <../DocumentDataSource.setNeedTotalCount.html>`__
