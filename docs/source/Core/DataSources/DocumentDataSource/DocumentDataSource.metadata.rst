DocumentDataSource.metadata
===========================

Метаданные источника данных представления для документов
InfinniPlatform.

Properties
----------

.. list-table::
   :header-rows: 1

   * - Name
     - Type
     - Default
     - Description
   * - DocumentId
     - ``String``
     - –
     - Идентификатор документа
   * - Filter
     - ``String``1
     - –
     - Правило фильтрации документов
   * - FilterParams
     - ``Object``
     - –
     - Параметры фильтра
   * - PageNumber
     - ``Integer``
     - 0
     - Номер страницы
   * - PageSize
     - ``Integer``
     - 15
     - Размер страницы
   * - Search
     - ``String``
     - –
     - Строка полнотекстового поиска
   * - Select
     - ``String``
     - –
     - Правило отображения документов
   * - Order
     - ``String``
     - –
     - Правило сортировки документов
   * - NeedTotalCount
     - ``Boolean``
     - –
     - Необходимость подсчета количества


1 `Шаблонизируемая
величина <../../RestDataSource/#parameters-templating>`__. Заполняется
значениями из FilterParams.

Examples
--------

.. code:: json

    {
        "DocumentDataSource": {
            "Name": "documentDataSource1",
            "DocumentId": "MyDocument",
            "Filter": "gt(Birthday,<%startDate%>)",
            "FilterParams": {
                startDate: date('1985-01-01')
            },
            "PageNumber": 3,
            "PageSize": 50,
            "Select": "include(LastName, FirstName, Address, Birthday)",
            "Order": "asc(LastName, FirstName)"
        }
    }

.. code:: json

    {
        "DocumentDataSource": {
            "Name": "documentDataSource2",
            "DocumentId": "MyDocument",
            "Search": "Иванов Иван Иванович",
            "NeedTotalCount": true
        }
    }
