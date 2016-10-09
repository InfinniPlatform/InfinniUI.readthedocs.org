DataGrid.metadata
=================

Метаданные типа `DataGrid <../>`__.

Properties
----------

+-------+-------+-------+-------------+
Name  | Type  | Defau | Description |
      |       | lt    |             |
+=======+=======+=======+=============+
Colum | Array |       | Список      |
ns    | .<`Da |       | колонок     |
      | taGri |       | таблицы.    |
      | dColu |       |             |
      | mn <. |       |             |
      | ./Dat |       |             |
      | aGrid |       |             |
      | Colum |       |             |
      | n/>`_ |       |             |
      | _>    |       |             |
+-------+-------+-------+-------------+
ShowS | Boole | ``tru | Определяет  |
elect | an    | e``   | показывать  |
ors   |       |       | ли колонку  |
      |       |       | с           |
      |       |       | CheckBox/Ra |
      |       |       | dio         |
      |       |       | для выбора  |
      |       |       | элементов.  |
+-------+-------+-------+-------------+
Check | Boole | ``fal | Определяет  |
AllVi | an    | se``  | виден ли    |
sible |       |       | элемент     |
      |       |       | "Выбрать    |
      |       |       | все" в      |
      |       |       | шапке       |
      |       |       | таблицы.    |
+-------+-------+-------+-------------+
OnChe | `Scri |       | Устанавлива |
ckAll | pt <. |       | ет          |
Chang | ./../ |       | обработчик  |
ed    | ../Co |       | изменения   |
      | re/Sc |       | состоняие   |
      | ript/ |       | элемента    |
      | >`__  |       | "Выбрать    |
      |       |       | все" в      |
      |       |       | шапке       |
      |       |       | таблицы.    |
+-------+-------+-------+-------------+
RowBa | `Colo |       | Цвет фона   |
ckgro | r </d |       | строки      |
und   | ocs/A |       |             |
      | PI/Co |       |             |
      | re/St |       |             |
      | yle/C |       |             |
      | olorS |       |             |
      | tyle/ |       |             |
      | >`__|       |             |
      |  (⇔)  |       |             |
+-------+-------+-------+-------------+
RowFo | `Colo |       | Цвет текста |
regro | r </d |       | строки      |
und   | ocs/A |       |             |
      | PI/Co |       |             |
      | re/St |       |             |
      | yle/C |       |             |
      | olorS |       |             |
      | tyle/ |       |             |
      | >`__|       |             |
      |  (⇔)  |       |             |
+-------+-------+-------+-------------+
RowTe | `Text |       | Стиль       |
xtSty | Style |       | текста      |
le    |  <../ |       | строки      |
      | ../.. |       |             |
      | /Styl |       |             |
      | e/Tex |       |             |
      | tStyl |       |             |
      | e/>`_ |       |             |
      | _(⇔ |       |             |
      | )     |       |             |
+-------+-------+-------+-------------+
RowSt | ``Str |       | Имя         |
yle   | ing`` |       | кастомного  |
      | (⇔) |       | стиля,      |
      |       |       | применяемог |
      |       |       | о           |
      |       |       | к строке    |
+-------+-------+-------+-------------+
onRow | `Scri |       | Устанавлива |
Click | pt <. |       | ет          |
      | ./../ |       | `обработчик |
      | ../Co |       | события <.. |
      | re/Sc |       | /../Core/Sc |
      | ript/ |       | ript/>`__   |
      | >`__  |       | на клик по  |
      |       |       | элементам   |
      |       |       | DataGrid.   |
+-------+-------+-------+-------------+
onRow | `Scri |       | Устанавлива |
Doubl | pt <. |       | ет          |
eClic | ./../ |       | `обработчик |
k     | ../Co |       | события <.. |
      | re/Sc |       | /../Core/Sc |
      | ript/ |       | ript/>`__   |
      | >`__  |       | на двойной  |
      |       |       | клик по     |
      |       |       | элементам   |
      |       |       | DataGrid.   |
+-------+-------+-------+-------------+

(⇔) Свойство может быть задано, как
`DataBinding <../../../Core/DataBinding/DataBinding.metadata.html>`__.

Examples
--------

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
