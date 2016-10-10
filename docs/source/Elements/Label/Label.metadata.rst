Label.metadata
==============

Метаданные типа `Label <./>`__.

Properties
----------

.. list-table::
   :header-rows: 1

   * - Name
     - Type
     - Default
     - Description
   * - DisplayFormat
     - ``DisplayFormatMetadata``
     - –
     - Форматирование значения для отображения
   * - TextTrimming
     - ``Boolean``
     - true
     - Значение, определяющее, усекается ли текст при переполнении
   * - TextWrapping
     - ``Boolean``
     - true
     - Значение, определяющее, переносится ли текст при переполнении
   * - EscapeHtml
     - ``Boolean``
     - true
     - Значение, определяющее, экранируется ли HTML-разметка


Examples
--------

.. code:: json

    {
        "DisplayFormat": "{FirstName} {LastName}",
        "Value": {
            "Source": "dataSource1",
            "Property": "$.Person"
        }
    }

.. code:: json

    {
        "Text": "<b>Полужирный</b> <i>курсив</i>",
        "EscapeHtml": false
    }
