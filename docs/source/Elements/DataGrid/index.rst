DataGrid
========

Таблица.

Extends
-------

`ListEditorBase <../ListEditorBase/>`__

Syntax
------

.. code:: js

    new DataGrid([parent])

Parameters
~~~~~~~~~~

.. list-table::
   :header-rows: 1

   * - Name
     - Type
     - Description
   * - ``parent``
     - `Element <../../Core/Elements/Element>`__
     - Родительский элемент


Methods
-------

.. list-table::
   :header-rows: 1

   * - Name
     - Description
   * - `getColumns <DataGrid.getColumns.html>`__
     - Возвращает `коллекцию <../../Core/Collection/>`__ колонок таблицы.
   * - `getShowSelectors <DataGrid.getShowSelectors.html>`__
     - Возвращает значение, определяющее показывать ли колонку с CheckBox/Radio для выбора элементов.
   * - `setShowSelectors <DataGrid.setShowSelectors.html>`__
     - Устанавливает значение, определяющее показывать ли колонку с CheckBox/Radio для выбора элементов.
   * - `getCheckAllVisible <DataGrid.getCheckAllVisible.html>`__
     - Возвращает значение, определяющее виден ли элемент "Выбрать все" в шапке таблицы.
   * - `setCheckAllVisible <DataGrid.setCheckAllVisible.html>`__
     - Устанавливает значение, определяющее виден ли элемент "Выбрать все" в шапке таблицы.
   * - `getCheckAll <DataGrid.getCheckAll.html>`__
     - Возвращает состояние элемента "Выбрать все" из шапки таблицы.
   * - `getVerticalAlignment <DataGrid.getVerticalAlignment.html>`__
     - Возвращает вертикальное выравнивание элемент.
   * - `setVerticalAlignment <DataGrid.setVerticalAlignment.html>`__
     - Устанавливает вертикальное выравнивание элемента.


Events
------

.. list-table::
   :header-rows: 1

   * - Name
     - Description
   * - `onCheckAllChanged <DataGrid.onCheckAllChanged.html>`__
     - Устанавливает `обработчик события <../../Core/Script/>`__ о том, что состоняие элемента "Выбрать все" в шапке таблицы изменилось.
   * - `onRowClick <DataGrid.onRowClick.html>`__
     - Устанавливает `обработчик события <../../Core/Script/>`__ на клик по элементам DataGrid.
   * - `onRowDoubleClick <DataGrid.onRowDoubleClick.html>`__
     - Устанавливает `обработчик события <../../Core/Script/>`__ на двойной клик по элементам DataGrid.



.. include:: DataGrid.metadata.rst

.. toctree::
   :hidden:

   DataGrid.getCheckAll.rst
   DataGrid.getCheckAllVisible.rst
   DataGrid.getColumns.rst
   DataGrid.getShowSelectors.rst
   DataGrid.getVerticalAlignment.rst
   DataGrid.metadata.rst
   DataGrid.onCheckAllChanged.rst
   DataGrid.onRowClick.rst
   DataGrid.onRowDoubleClick.rst
   DataGrid.setCheckAllVisible.rst
   DataGrid.setShowSelectors.rst
   DataGrid.setVerticalAlignment.rst
   DataGridColumn/index.rst
