DocumentDataSource.getNeedTotalCount()
======================================

Возвращает значение, определяющее необходимость подсчета общего
количества документов.

Description
-----------

Функции `setPageNumber <DocumentDataSource.setPageNumber.html>`__ и
`setPageSize <DocumentDataSource.setPageSize.html>`__ определяют, какие
документы, из хранящихся в InfinniPlatform, будут загружены в источник
данных и сколько их будет. Однако, иногда возникает необходимость узнать
общее количество документов. В таком случае необходимо установить
`needTotalCount <#specific-properties>`__ равным true (например, с
помощью метода
`setNeedTotalCount <DocumentDataSource.setNeedTotalCount.html>`__),
`обновить список элементов источника
данных <../BaseDataSource/BaseDataSource.updateItems.html>`__ и получит
искомое количество с помощью метода
`getTotalCount <DocumentDataSource.getTotalCount.html>`__.

Syntax
------

.. code:: js

    DocumentDataSource.getNeedTotalCount()

Parameters
~~~~~~~~~~

Нет

Returns
~~~~~~~

Логическое значение, определяющее необходимость подсчета общего
количества документов.

Examples
--------

.. code:: js

    var needTotalCount = DocumentDataSource.getNeedTotalCount();

See Also
--------

-  `setNeedTotalCount() <DocumentDataSource.setNeedTotalCount.html>`__
-  `getTotalCount() <DocumentDataSource.getTotalCount.html>`__
