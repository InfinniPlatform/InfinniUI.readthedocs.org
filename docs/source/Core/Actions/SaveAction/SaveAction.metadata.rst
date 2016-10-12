SaveAction.metadata
-------------------

Метаданные типа `SaveAction <./>`__.

Properties
~~~~~~~~~~

.. list-table::
   :header-rows: 1

   * - Name
     - Type
     - Default
     - Description
   * - DestinationValue.Source\*
     - ``String``
     - –
     - Название источника данных
   * - CanClose
     - ``Boolean``
     - true
     - Значение, определяющее, нужно ли закрыть родительское представление после сохранения
   * - OnSuccess
     - `Script <../../Script/>`__
     - –
     - Устанавливает обработчик успешного завершения действия
   * - OnError
     - `Script <../../Script/>`__
     - –
     - Устанавливает обработчик завершения действия с ошибкой


\* Обязательное свойство.

Examples
~~~~~~~~

.. code:: json

    {
        "SaveAction": {
            "DestinationValue": {
                "Source": "DataSource1"
            },
            "CanClose": false,
            "OnSuccess": "{ alert('onSuccess'); }",
            "OnError": "{ alert('onError'); }"
        }
    }

See Also
~~~~~~~~

-  `DataSource <../../DataSources/>`__
