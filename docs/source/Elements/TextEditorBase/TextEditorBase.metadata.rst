TextEditorBase.metadata
-----------------------

Метаданные типа `TextEditorBase <./>`__.

Properties
~~~~~~~~~~

.. list-table::
   :header-rows: 1

   * - Name
     - Type
     - Default
     - Description
   * - ``LabelText``
     - ``String`` (ƒ)
     - –
     - Текст метки
   * - ``LabelTextTitle``
     - ``Boolean``
     - ``false``
     - Копирование LabelText в атрибут title
   * - ``LabelFloating``
     - ``Boolean``
     - ``false``
     - Является ли метка плавающей
   * - ``DisplayFormat``
     - ``String``
     - –
     - Формат отображения значения
   * - ``EditMask``
     - `EditMask </Core/EditMask/>`__
     - –
     - Маска ввода значения

(ƒ) Свойство может быть задано, как `JSExpression </Core/JSExpression/>`_.

Examples
~~~~~~~~

.. code:: json

    {
        "LabelText": "Birthday",
        "LabelTextTitle": true,
        "LabelFloating": true,
        "DisplayFormat": ":d",
        "EditMask": {
            "DateTimeEditMask": {
                "Mask": "d"
            }
        }
    }
