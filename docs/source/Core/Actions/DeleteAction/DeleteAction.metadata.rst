DeleteAction.metadata
---------------------

Метаданные типа `DeleteAction <./>`__.

Properties
~~~~~~~~~~

.. list-table::
   :header-rows: 1

   * - Name
     - Type
     - Default
     - Description
   * - DestinationValue.Source*
     - ``String``
     - –
     - Название источника данных, из которого производится удаление
   * - DestinationValue.Property*
     - ``String``
     - –
     - Путь до документа в источнике данных, который будет удалятся
   * - Accept
     - ``Boolean``
     - true
     - Значение, определяющее, нужно ли перед удалением спросить согласие пользователя на удаление
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
        "DeleteAction": {
            "DestinationValue": {
              "Source": "DataSource1",
              "Property": "$"
            },
            "Accept": false,
            "OnSuccess": "{ alert('onSuccess'); }",
            "OnError": "{ alert('onError'); }"
        }
    }

.. code:: json

    {
        "DeleteAction": {
            "DestinationValue": {
              "Source": "DataSource1",
              "Property": "$.Hospitalizations.0"
            },
            "Accept": false
        }
    }
