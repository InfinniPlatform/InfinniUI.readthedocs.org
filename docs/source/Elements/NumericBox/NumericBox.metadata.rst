NumericBox.metadata
===================

Метаданные типа `NumericBox <../>`__.

Properties
----------

.. list-table::
   :header-rows: 1

   * - Name
     - Type
     - Default
     - Description
   * - MinValue
     - ``Number``
     - –
     - Минимальное значение
   * - MaxValue
     - ``Number``
     - –
     - Максимальное значение
   * - Increment
     - ``Number``
     - 1
     - Приращение значения
   * - StartValue
     - ``Number``
     - –
     - Начальное значение по умолчанию


Examples
--------

.. code:: json

    {
      "LabelText": "Age",
      "LabelFloating": true,
      "MinValue": 0,
      "Value": {
        "Source": "mainDataSource",
        "Property": "$.Age"
      }
    }
