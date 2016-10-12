EditorBase.metadata
-------------------

Метаданные типа `EditorBase <./>`__.

Properties
~~~~~~~~~~

.. list-table::
   :header-rows: 1

   * - Name
     - Type
     - Description
   * - Value
     - `BindingMetadata <../../Core/DataBinding/DataBinding.metadata.html>`__
     - Значение
   * - HintText
     - ``String``
     - Текст с подсказкой для ввода
   * - ErrorText
     - ``String``
     - Текст с информацией об ошибке
   * - WarningText
     - ``String``
     - Текст с информацией о предупреждении
   * - OnValueChanging
     - `Script <../../Core/Script/>`__
     - Обработчик события о том, что значение изменяется
   * - OnValueChanged
     - `Script <../../Core/Script/>`__
     - Обработчик события о том, что значение было изменено


Examples
~~~~~~~~

.. code:: json

    {
        "Value": {
            "Source": "MainDataSource",
            "Property": "Name"
        },
        "HintText": "Enter your name",
        "OnValueChanged": "onNameChengedScript"
    }
