ServerAction.metadata
---------------------

Метаданные типа `ServerAction <./>`__.

Properties
~~~~~~~~~~

.. list-table::
   :header-rows: 1

   * - Name
     - Type
     - Default
     - Description
   * - Origin
     - ``String``:sup:`1`
     - –
     - Базовая часть url запроса
   * - Path\*
     - ``String``:sup:`1`
     - –
     - Уточняющая часть url запроса
   * - Method
     - ``String``
     - 'GET'
     - Метод запроса
   * - ContentType
     - ``String``
     - 'application/x-www-form-urlencoded; charset=utf-8'
     - Тип данных
   * - Data
     - ``Object``:sup:`1`
     - –
     - Данные запроса
   * - Params
     - ``Object``
     - –
     - Параметры запроса
   * - OnSuccess
     - `Script <../../Script/>`__
     - –
     - Устанавливает обработчик успешного завершения действия
   * - OnError
     - `Script <../../Script/>`__
     - –
     - Устанавливает обработчик завершения действия с ошибкой


\* Обязательное свойство.

:sup:`1` `Шаблонизируемая величина <#parameters-templating>`__.

Examples
~~~~~~~~

.. code:: json

    {
      "ServerAction": {
        "Method": "Get",
        "Origin": "http://localhost:<%port%>",
        "Path": "/documents/<%document%>",
        "Data": {
          "filter": "eq(_id,'<%_id%>')"
        },
        "Params": {
          "port": "9900",
          "document": "GetCompanyProfile988Response",
          "_id": {
            "Source": "MainDataSource",
            "Property": "$._id"
          }
        },
        "OnSuccess": "{ alert('onSuccess'); }",
        "OnError": "{ alert('onError'); }"
      }
    }
