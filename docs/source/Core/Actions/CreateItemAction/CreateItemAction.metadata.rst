CreateItemAction.metadata
-------------------------

Метаданные типа `CreateItemAction <./>`__.

Properties
~~~~~~~~~~

.. list-table::
   :header-rows: 1

   * - DestinationValue.Source*
     - ``String``
     - Название источника данных, куда будет добавлен новый пустой элемент
   * - DestinationValue.Property
     - ``String``
     - Путь до поля в источнике данных, куда будет добавлен новый пустой элемент. Данное поле должно быть представлено массивом


\* Обязательное свойство.

Examples
~~~~~~~~

.. code:: json

    {
        "CreateItemAction": {
            "DestinationValue": {
              "Source": "ParentsDataSource"
            }
        }
    }

.. code:: json

    {
        "CreateItemAction": {
            "DestinationValue": {
              "Source": "ParentsDataSource",
              "Property": "0.items"
            }
        }
    }
