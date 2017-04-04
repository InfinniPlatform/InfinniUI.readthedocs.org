DataGrid.metadata
-----------------

Метаданные типа `DataGrid <./>`__.

Properties
~~~~~~~~~~

.. list-table::
   :header-rows: 1

   * - Name
     - Type
     - Default
     - Description
   * - Columns
     - Array.<`DataGridColumn <DataGridColumn/>`__>
     - –
     - Список колонок таблицы.
   * - ShowSelectors
     - Boolean
     - ``true``
     - Определяет показывать ли колонку с CheckBox/Radio для выбора элементов.
   * - CheckAllVisible
     - Boolean
     - ``false``
     - Определяет виден ли элемент "Выбрать все" в шапке таблицы.
   * - OnCheckAllChanged
     - `Script <../../Core/Script/>`__
     - –
     - Устанавливает обработчик изменения состоняие элемента "Выбрать все" в шапке таблицы.
   * - VerticalAlignment
     - ``String`` (⇔)
     - –
     - Вертикальное выравнивание таблицы.
   * - RowBackground
     - `Color </Core/Style/ColorStyle/>`__ (⇔)
     - –
     - Цвет фона строки
   * - RowForeground
     - `Color </Core/Style/ColorStyle/>`__ (⇔)
     - –
     - Цвет текста строки
   * - RowTextStyle
     - `TextStyle <../../Style/TextStyle/>`__ (⇔)
     - –
     - Стиль текста строки
   * - RowStyle
     - ``String`` (⇔)
     - –
     - Имя кастомного стиля, применяемого к строке
   * - onRowClick
     - `Script <../../Core/Script/>`__
     - –
     - Устанавливает `обработчик события <../Core/Script/>`__ на клик по элементам DataGrid.
   * - onRowDoubleClick
     - `Script <../../Core/Script/>`__
     - –
     - Устанавливает `обработчик события <../Core/Script/>`__ на двойной клик по элементам DataGrid.


(⇔) Свойство может быть задано, как
`DataBinding <../../Core/DataBinding/DataBinding.metadata.html>`__.

Examples
~~~~~~~~

.. code:: json

    {
      "DataGrid": {
        "Columns": [
          {
            "Header": "Name",
            "CellProperty": "Name",
            "Sortable": true,
            "SortedDefault": "asc",
            "SortFunction": "{ console.log(args.sortDirection) }"
          },
          {
            "Header": "Family",
            "CellProperty": "Family"
          },
          {
            "Header": "Kingdom",
            "CellProperty": "Kingdom"
          }
        ],
        "VerticalAlignment": "Stretch",
        "Items": {
          "Source": "peopleDataSource"
        },
        "OnRowClick": "{ console.log(args.source) }",
        "OnRowDoubleClick": "{ console.log(args.source) }",
        "RowBackground": {
          "Source": "RowStyleDataSource",
          "Property": "#",
          "Mode": "ToElement",
          "Converter": {
            "ToElement": "{ return args.value.Age > 100 ? 'Accent1' : 'Accent2'; }"
          }
        }
      }
    }
