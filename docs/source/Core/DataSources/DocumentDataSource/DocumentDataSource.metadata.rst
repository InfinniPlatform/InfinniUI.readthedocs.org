DocumentDataSource.metadata
---------------------------

Метаданные источника данных представления для документов
InfinniPlatform.

Properties
~~~~~~~~~~

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
   * - PageNumber
     - ``Integer``
     - 0
     - Номер страницы
   * - PageSize
     - ``Integer``
     - 15
     - Размер страницы
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


Examples
~~~~~~~~

.. code:: json

    {
        "DocumentDataSource": {
            "Name": "documentDataSource1",
            "DocumentId": "MyDocument",
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
            "NeedTotalCount": true
        }
    }
