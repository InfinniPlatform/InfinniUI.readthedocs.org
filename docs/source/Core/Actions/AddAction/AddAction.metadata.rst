AddAction.metadata
------------------

Метаданные типа `AddAction <./>`__.

Properties
~~~~~~~~~~

.. list-table::
   :header-rows: 1

   * - Name
     - Type
     - Description
   * - LinkView*
     - `LinkView.metadata <../../Elements/LinkView/LinkView.metadata/>`__
     - Объект, который будет создавать и настраивать `представление <../../Elements/View/>`__
   * - SourceValue.Source*
     - ``String``
     - Название редактируемого источника данных на представлении редактирования
   * - DestinationValue.Source
     - ``String``
     - Название редактируемого источника данных, на представлении, откуда редактирование было вызвано
   * - DestinationValue.Property
     - ``String``
     - Путь до поля в источнике данных, которое будет редактироваться. Данное поле должно быть представлено массивом


\* Обязательное свойство.

Examples
~~~~~~~~

.. code:: json

    {
        "AddAction": {
            "DestinationValue": {
              "Source": "ParentsDataSource",
              "Property": "$.Children"
            },
            "SourceValue": {
              "Source": "MainDataSource"
            },
            "LinkView": {
              "InlineView": {
                ...
              }
            }
        }
    }
