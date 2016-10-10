PasswordBox.metadata
====================

Метаданные типа `PasswordBox <../>`__.

Properties
----------

.. list-table::
   :header-rows: 1

   * - Name
     - Type
     - Default
     - Description
   * - LabelText
     - ``String``
     - –
     - Текст метки
   * - LabelFloating
     - ``Boolean``
     - ``false``
     - Является ли метка плавающей
   * - Autocomplete
     - ``Boolean``
     - ``true``
     - Автоподстановка сохраненных в браузере паролей


Examples
--------

.. code:: json

    {
      "Label": "Password",
      "LabelFloating": true,
      "Value": {
        "Source": "dataSource1",
        "Property": "$.Password"
      }
    }
