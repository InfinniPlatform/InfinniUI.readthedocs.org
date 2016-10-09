TextBox.metadata
================

Метаданные типа `TextBox <../>`__.

Properties
----------

.. list-table::
   :header-rows: 1

   * - Name
     - Type
     - Default
     - Description
   * - ``Multiline``
     - ``Boolean``
     - ``false``
     - Разрешен ли многострочный текст
   * - ``LineCount``
     - ``Integer``
     - Максимально видимое количество строк


Examples
--------

.. code:: json

    {
      "Label": "Description",
      "LabelFloating": true,
      "Multiline": true,
      "LineCount": 5,
      "Value": {
        "Source": "dataSource1",
        "Property": "$.Description"
      }
    }
