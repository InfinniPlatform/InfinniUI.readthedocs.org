Parameter.metadata
==================

Метаданные типа `Parameter <../>`__.

Properties
----------

.. list-table::
   :header-rows: 1

   * - Name
     - Type
     - Description
   * - ``Name``*
     - ``String``
     - Наименование параметра
   * - ``Value``*
     - ``String``
     - `DataBinding <../../../Core/DataBinding/DataBinding.metadata.html>`__
     - Значение параметра
   * - ``DefaultValue``
     - \*
     - Значение по умолчанию
   * - ``OnPropertyChanged``
     - `Script <../../../Core/Script/>`__
     - Обработчик события о том, что значение было изменено


\* Обязательное свойство.

Examples
--------

.. code:: json

    {
      "Name": "Description",
      "Value": {
          "Source": "dataSource1",
          "Property": "$.Description"
      },
      "DefaultValue": "No description",
      "OnPropertyChanged": "OnPropertyChangedScript"
    }
