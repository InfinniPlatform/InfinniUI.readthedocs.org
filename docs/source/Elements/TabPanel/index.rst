TabPanel
========

Контейнер в виде набора закладок.

Description
-----------

Панель закладок - `контейнер <../../Core/Elements/Container/>`__
визуальных элементов в виде прямоугольной области с набором закладок,
которые позволяют переключаться между связанными с ними
`страницами <TabPage/>`__. При переключении на какую-либо страницу, она
занимает все пространство контейнера, перекрывая при этом все остальные
страницы панели.

Extends
-------

`Container <../../Core/Elements/Container/>`__

Syntax
------

.. code:: js

    new TabPanel(parent)

Parameters
~~~~~~~~~~

.. list-table::
   :header-rows: 1

   * - Name
     - Type
     - Description
   * - parent
     - `Element <../../Core/Elements/Element>`__
     - Родительский элемент


Methods
-------

.. list-table::
   :header-rows: 1

   * - Name
     - Description
   * - `getHeaderLocation <TabPanel.getHeaderLocation.html>`__
     - Возвращает `расположение закладок <TabHeaderLocation/>`__
   * - `setHeaderLocation <TabPanel.setHeaderLocation.html>`__
     - Устанавливает `расположение закладок <TabHeaderLocation/>`__
   * - `getHeaderTemplate <TabPanel.getHeaderTemplate.html>`__
     - Возвращает `функцию <../../Core/Script/>`__ шаблонизации закладок дочерних элементов панели
   * - `setHeaderTemplate <TabPanel.setHeaderTemplate.html>`__
     - Устанавливает `функцию <../../Core/Script/>`__ шаблонизации закладок дочерних элементов панели
   * - `getSelectedItem <TabPanel.getSelectedItem.html>`__
     - Возвращает выделенный `дочерний элемент панели <TabPage/>`__
   * - `setSelectedItem <TabPanel.setSelectedItem.html>`__
     - Устанавливает выделенный `дочерний элемент панели <TabPage/>`__


Events
------

.. list-table::
   :header-rows: 1

   * - Name
     - Description
   * - `onSelectedItemChanged <TabPanel.onSelectedItemChanged.html>`__
     - Устанавливает `обработчик события <../../Core/Script/>`__ о том, что выделенный элемент изменился


See Also
--------

-  `TabPage <TabPage/>`__
-  `TabHeaderLocation <TabHeaderLocation/>`__
-  `Container <../../Core/Elements/Container/>`__


.. toctree::

   TabPage/index.rst
   TabHeaderLocation.rst
   TabPanel.getHeaderLocation.rst
   TabPanel.getHeaderTemplate.rst
   TabPanel.getSelectedItem.rst
   TabPanel.metadata.rst
   TabPanel.onSelectedItemChanged.rst
   TabPanel.setHeaderLocation.rst
   TabPanel.setHeaderTemplate.rst
   TabPanel.setSelectedItem.rst
