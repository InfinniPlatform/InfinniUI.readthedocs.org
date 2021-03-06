ComboBox.metadata
-----------------

Метаданные типа `ComboBox <./>`__.

Properties
~~~~~~~~~~

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
   * - NoItemsMessage
     - ``String``
     - '\\"<span class=\\"search-message\\"></span>\" not found'
     - Текст сообщения, которое будет отображаться, когда не найдено ни одного элемента
   * - LabelFloating
     - ``Boolean``
     - false
     - Значение, определяющее, является ли метка плавающей
   * - Autocomplete
     - ``Boolean``
     - false
     - Значение, определяющее, разрешено ли автозавершение ввода
   * - ExpandOnEnter
     - ``Boolean``
     - true
     - Значение, определяющее, раскрывать ли выпадающий список по нажатию на клавишу Enter
   * - AutocompleteProperty
     - ``String``
     - –
     - Свойство, по которому будет выполняться автозавершение ввода. Если не указывать AutocompleteProperty, то автозавершение будет выполняться на основе полнотекстового поиска
   * - ValueTemplate
     - `Element </Core/Elements/Element/Element.metadata.html>`__
     - –
     - Функция шаблонизации выбранного элемента
   * - ValueFormat
     - `DisplayFormat <../../Core/DisplayFormat/>`__
     - –
     - Формат отображения выбранного элемента
   * - ShowClear
     - ``Boolean``
     - true
     - Значение, которое определяет наличие кнопки, очищающей выбранное значение


Examples
~~~~~~~~

.. code:: json

    {
      "ComboBox": {
        "LabelText": "Type",
        "LabelFloating": true,
        "Autocomplete": true,
        "AutocompleteProperty": "Description",
        "ItemFormat": "${Description}",
        "ValueFormat": "${Description}",
        "ShowClear": false,
        "Value": {
          "Source": "MainDataSource",
          "Property": "$.my_type"
        },
        "Items": {
          "Source": "Types",
          "Property": ""
        }
      }
    }
