TabPage
=======

Страница панели закладок `TabPanel <../>`__.

Description
-----------

Страница панели закладок - `контейнер визуальных
элементов <../../../Core/Elements/Container/>`__ в виде прямоугольной
области, отображаемой в рамках `панели закладок <../>`__. Дочерние
элементы страницы располагаются внутри контейнера и визуально не могут
выходить за его пределы.

Extends
-------

`Container <../../../Core/Elements/Container/>`__

Syntax
------

.. code:: js

    new TabPage(parent)

Parameters
~~~~~~~~~~

.. list-table::
   :header-rows: 1

   * - Name
     - Type
     - Description
   * - parent
     - `Element <../../../Core/Elements/Element>`__
     - Родительский элемент


Methods
-------

.. list-table::
   :header-rows: 1

   * - Name
     - Description
   * - `getCanClose <TabPage.getCanClose.html>`__
     - Возвращает значение, определяющее, разрешено ли закрытие страницы
   * - `setCanClose <TabPage.setCanClose.html>`__
     - Устанавливает значение, определяющее, разрешено ли закрытие страницы
   * - `close <TabPage.close.html>`__
     - Закрывает страницу


Events
------

.. list-table::
   :header-rows: 1

   * - Name
     - Description
   * - `onClosing <TabPage.onClosing.html>`__
     - Устанавливает `обработчик события <../../../Core/Script/>`__ о том, что страница закрывается
   * - `onClosed <TabPage.onClosed.html>`__
     - Устанавливает `обработчик события <../../../Core/Script/>`__ о том, что страница была закрыта




.. include:: TabPage.metadata.rst

See Also
--------

-  `TabPanel <../>`__
-  `Container <../../../Core/Elements/Container/>`__
