SelectAction.metadata
---------------------

Метаданные типа `SelectAction <./>`__.

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
     - Название источника данных, из которого будет заполняться редактируемый источник данных
   * - SourceValue.Property*
     - ``String``
     - Путь до поля в источнике данных, которое будет копироваться
   * - DestinationValue.Source*
     - ``String``
     - Название редактируемого источника данных
   * - DestinationValue.Property\*
     - ``String``
     - Путь до поля в источнике данных, которое будет редактироваться


\* Обязательное свойство.

Examples
~~~~~~~~

.. code:: json

    {
        "SelectAction": {
            "DestinationValue": {
              "Source": "Hospitalizations",
              "Property": "$.Patient"
            },
            "SourceValue": {
              "Source": "Patients",
              "Property": "$"
            },
            "LinkView": {
              "InlineView": {
                ...
              }
            }
        }
    }
