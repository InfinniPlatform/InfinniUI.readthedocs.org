DateTimePicker.metadata
=======================

Метаданные типа `DateTimePicker <../>`__.

Properties
----------

.. list-table::
   :header-rows: 1

   * - Name
     - Type
     - Default
     - Description
   * - MinValue
     - ``String``
     - –
     - Минимальное значение в формате ISO8601
   * - MaxValue
     - ``String``
     - –
     - Максимальное значение в формате ISO8601
   * - Mode
     - ``String``
     - ``Date``
     - Режим работы элемента (``Date``, ``Time``, ``DateTime``)
   * - TimeZone
     - ``Integer``
     - –
     - Смещение часового пояса, являющееся разностью в минутах между временем UTC и местным временем. Если смещение не задано, используется текущая локаль.


Examples
--------

.. code:: json

    {
      "LabelText": "Birthday",
      "LabelFloating": true,
      "Value": {
        "Source": "mainDataSource",
        "Property": "$.Birthday"
      }
    }
