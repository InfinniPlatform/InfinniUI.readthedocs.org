RouteToAction.metadata
----------------------

Метаданные типа `RouteToAction <./>`__.

Properties
~~~~~~~~~~

.. list-table::
   :header-rows: 1

   * - Name
     - Type
     - Default
     - Description
   * - Name\*
     - ``String``
     -   
     - Имя маршрута. Имя должно быть однозначно определенно в `InfinniUI.config.routes <../../Routing/Routes/>`__
   * - Replace
     - ``Boolean``
     - false
     - Возможность обновить URL без создания записи в истории браузера.
   * - Params
     - ``Object``
     -   
     - Массив с параметрами маршрута, которые будут переданы в callback. Где Name - имя параметра, а Value - значение параметра. Значение параметра можно задать как через ``String``, так и через `DataBinding <../../DataBinding>`__
   * - Query
     - ``Object``
     -   
     - Массив с параметрами запроса, которые будут переданы в callback. Где Name - имя параметра запроса, а Value - значение параметра запроса. Значение параметра можно задать как через ``String``, так и через `DataBinding <../../DataBinding>`__


\* Обязательное свойство.

Examples
~~~~~~~~

.. code:: json

    "RouteToAction": {
      "Name": "routeName",
      "Replace": true,
      "Params": [
        {
          "Name": "user",
          "Value": {
            "Source": "ds2",
            "Property": "$.user"
          }
        },
        {
          "Name": "pageNumber",
          "Value": "lastPage"
        }
      ],
      "Query": [
        {
          "Name": "queryId",
          "Value": {
            "Source": "ds2",
            "Property": "$.queryId"
          }
        },
        {
          "Name": "userAge",
          "Value": "teenager"
        }
      ]
    }
