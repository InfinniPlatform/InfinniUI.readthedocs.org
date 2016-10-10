DocumentDataSource
==================

Источник данных представления для документов InfinniPlatform.

Description
-----------

Для работы с документами, хранящимися в InfinniPlatform, следует
использовать источник данных ``DocumentDataSource``. Для определения
источника данных достаточно указать идентификатор документа, с которым
будет осуществляться работа.

Extends
-------

`RestDataSource <../RestDataSource/>`__

Syntax
------

.. code:: js

    new DocumentDataSource(parameters)

Parameters
~~~~~~~~~~

.. list-table::
   :header-rows: 1

   * - Name
     - Type
     - Description
   * - parameters
     - ``Object``
     -  Объект с параметрами представления. Один из параметров обязательный: parameters.view - родительское представление источника данных


Properties
----------

Нет

Specific Properties
-------------------

Для работы с данными свойствами используйте методы
  `getProperty <../BaseDataSource/BaseDataSource.getProperty.html>`__ и
  `setProperty <../BaseDataSource/BaseDataSource.setProperty.html>`__.
Обратите внимание, что для работы с данными свойствами необходимо
  `указывать точку в
  названии <../BaseDataSource/BaseDataSource.getProperty/#path-rules>`__.

.. list-table::
   :header-rows: 1

   * - Name
     - Default
     - Description
   * - documentId
     - –
     - Идентификатор документа
   * - filter
     - –
     - Правило фильтрации документов
   * - filterParams
     - –
     - Параметры фильтра
   * - pageNumber
     - 0
     - Номер страницы
   * - pageSize
     - 15
     - Размер страницы
   * - search
     - –
     - Строка полнотекстового поиска
   * - select
     - –
     - Правило отображения документов
   * - order
     - –
     - Правило сортировки документов
   * - needTotalCount
     - false
     - Необходимость подсчета общего количества документов


Изменение параметров ``filter``, ``filterParams``, ``pageSize``,
``search``, ``order`` приводит к обнулению ``pageNumber``.

Methods
-------

.. list-table::
   :header-rows: 1

   * - Name
     - Description
   * - `getDocumentId <DocumentDataSource.getDocumentId.html>`__
     - Возвращает идентификатор документа
   * - `setDocumentId <DocumentDataSource.setDocumentId.html>`__
     - Устанавливает идентификатор документа
   * - `getFilter <DocumentDataSource.getFilter.html>`__
     - Возвращает правило фильтрации документов
   * - `setFilter <DocumentDataSource.setFilter.html>`__
     - Устанавливает правило фильтрации документов
   * - `setIdFilter <DocumentDataSource.setIdFilter.html>`__
     - Устанавливает фильтр элементов по идентификатору
   * - `getFilterParams <DocumentDataSource.getFilterParams.html>`__
     - Возвращает параметры фильтра
   * - `setFilterParams <DocumentDataSource.setFilterParams.html>`__
     - Устанавливает параметры фильтра
   * - `getPageNumber <DocumentDataSource.getPageNumber.html>`__
     - Возвращает номер страницы
   * - `setPageNumber <DocumentDataSource.setPageNumber.html>`__
     - Устанавливает номер страницы
   * - `getPageSize <DocumentDataSource.getPageSize.html>`__
     - Возвращает размер страницы
   * - `setPageSize <DocumentDataSource.setPageSize.html>`__
     - Устанавливает размер страницы
   * - `getSearch <DocumentDataSource.getSearch.html>`__
     - Возвращает строку полнотекстового поиска
   * - `setSearch <DocumentDataSource.setSearch.html>`__
     - Устанавливает строку полнотекстового поиска
   * - `getSelect <DocumentDataSource.getSelect.html>`__
     - Возвращает правило отображения документов
   * - `setSelect <DocumentDataSource.setSelect.html>`__
     - Устанавливает правило отображения документов
   * - `getOrder <DocumentDataSource.getOrder.html>`__
     - Возвращает правило сортировки документов
   * - `setOrder <DocumentDataSource.setOrder.html>`__
     - Устанавливает правило сортировки документов
   * - `getNeedTotalCount <DocumentDataSource.getNeedTotalCount.html>`__
     - Возвращает значение, определяющее необходимость подсчета общего количества документов
   * - `setNeedTotalCount <DocumentDataSource.setNeedTotalCount.html>`__
     - Устанавливает значение, определяющее необходимость подсчета общего количества документов
   * - `getTotalCount <DocumentDataSource.getTotalCount.html>`__
     - Возвращает общее количество документов, хранящихся в InfinniPlatform и соответсвующих запросу


Events
------

Нет
