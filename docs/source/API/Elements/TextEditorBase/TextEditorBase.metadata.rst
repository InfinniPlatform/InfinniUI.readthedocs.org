TextEditorBase.metadata
=======================

Метаданные типа `TextEditorBase <../>`__.

Properties
----------

.. list-table::
   :header-rows: 1

   * - Name
     - Type
     - Default
     - Description
   * - ``LabelText``
     - ``String``
     - Текст метки
   * - ``LabelFloating``
     - ``Boolean``
     - ``false``
     - Является ли метка плавающей
   * - ``DisplayFormat``
     - ``String``
     - Формат отображения значения
   * - ``EditMask``
     - `EditMask </docs/API/Core/EditMask/>`__
     - Маска ввода значения


Examples
--------

.. code:: json

    {
        "LabelText": "Birthday",
        "LabelFloating": true,
        "DisplayFormat": ":d",
        "EditMask": {
            "DateTimeEditMask": {
                "Mask": "d"
            }
        }
    }
