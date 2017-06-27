DataGridColumn.metadata
-----------------------

Метаданные типа `DataGridColumn <./>`__.

Properties
~~~~~~~~~~

.. list-table::
   :header-rows: 1

   * - Name
     - Type
     - Description
   * - HeaderTemplate
     - `Element <../../../Core/Elements/Element/>`__
     - Шаблон отображения заголовка колонки.
   * - Header
     - ``String``
     - Заголовок колонки.
   * - CellSelector
     - `Script <../../../Core/Script/>`__
     - Функция выборки из элемента коллеции значения для ячейки.
   * - CellProperty
     - ``String``
     - Свойство элемента коллекции со значением для ячейки.
   * - CellFormat
     - ``String`` | `Format <../../../Core/DisplayFormat/>`__
     - Правила форматирования элемента коллекции для ячейки.
   * - CellTemplate
     - `Element <../../../Core/Elements/Element/>`__
     - Шаблон отображения элемента коллекции для ячейки.
   * - Width
     - ``String``
     - Ширина колонки (напр. "100px", "25%").
   * - Sortable
     - ``Boolean``
     - Возможность сортировки колонки.
   * - SortedDefault
     - ``String``
     - Направление сортировки колонки по умолчанию (напр. "asc" или "desc").
   * - SortFunction
     - ``Script``
     - Функция сортировки колонки.


Examples
~~~~~~~~

.. code:: json

    {
      "Header": "Kingdom",
      "CellProperty": "Kingdom",
      "Sortable": true,
      "SortedDefault": "asc",
      "SortFunction": "{ console.log( args.sortDirection ) }"
    }
