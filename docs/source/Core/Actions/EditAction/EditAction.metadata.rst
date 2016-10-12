EditAction.metadata
-------------------

Метаданные типа `EditAction <./>`__.

Properties
~~~~~~~~~~

.. list-table::
   :header-rows: 1

   * - Name
     - Type
     - Description
   * - LinkView*
     - `LinkView.metadata <../../Elements/View/LinkView/LinkView.metadata.html>`__
     - Объект, который будет создавать и настраивать `представление <../../Elements/View/>`__
   * - SourceValue.Source*
     - ``String``
     - Название редактируемого источника данных на представлении редактирования
   * - DestinationValue.Source*
     - ``String``
     - Название редактируемого источника данных, на представлении, откуда редактирование было вызвано
   * - DestinationValue.Property*
     - ``String``
     - Путь до поля в источнике данных, которое будет редактироваться


\* Обязательное свойство.

Examples
~~~~~~~~

.. code:: json

    {
        "EditAction": {
            "DestinationValue": {
              "Source": "ParentsDataSource",
              "Property": "$"
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
