UpdateAction.metadata
---------------------

Метаданные типа `UpdateAction <./>`__.

Properties
~~~~~~~~~~

.. list-table::
   :header-rows: 1

   * - Name
     - Type
     - Description
   * - DestinationValue.Source\*
     - ``String``
     - Название источника данных
   * - OnSuccess
     - `Script <../../Script/>`__
     -  Устанавливает обработчик успешного завершения действия
   * - OnError
     - `Script <../../Script/>`__
     -  Устанавливает обработчик завершения действия с ошибкой


\* Обязательное свойство.

Examples
~~~~~~~~

.. code:: json

    {
        "UpdateAction": {
            "DestinationValue": {
                "Source": "DataSource1"
            },
            "OnSuccess": "{ alert('onSuccess'); }",
            "OnError": "{ alert('onError'); }"
        }
    }

See Also
~~~~~~~~

-  `DataSource <../../DataSources/>`__
