Panel
=====

Контейнер в виде прямоугольной области.

Description
-----------

Панель - `контейнер <../../Core/Elements/Container/>`__ визуальных
элементов в виде прямоугольной области. Дочерние элементы панели
располагаются внутри контейнера и визуально не могут выходить за его
пределы.

Extends
-------

`Container <../../Core/Elements/Container/>`__

Syntax
------

.. code:: js

    new Panel(parent)

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
   * - `getCollapsible <Panel.getCollapsible.html>`__
     - Возвращает значение, определяющее, разрешено ли сворачивание панели
   * - `setCollapsible <Panel.setCollapsible.html>`__
     - Устанавливает значение, определяющее, разрешено ли сворачивание панели
   * - `getCollapsed <Panel.getCollapsed.html>`__
     - Возвращает значение, определяющее, свернута ли панель
   * - `setCollapsed <Panel.setCollapsed.html>`__
     - Устанавливает значение, определяющее, свернута ли панель
   * - `getHeaderTemplate <Panel.getHeaderTemplate.html>`__
     - Возвращает `функцию <../../Core/Script/>`__ шаблонизации заголовка панели
   * - `setHeaderTemplate <Panel.setHeaderTemplate.html>`__
     - Устанавливает `функцию <../../Core/Script/>`__ шаблонизации заголовка панели
   * - `getHeader <Panel.getHeader.html>`__
     - Возвращает заголовок панели
   * - `setHeader <Panel.setHeader.html>`__
     - Устанавливает заголовок панели


Events
------

.. list-table::
   :header-rows: 1

   * - Name
     - Description
   * - `onExpanding <Panel.onExpanding.html>`__
     - Устанавливает `обработчик события <../../Core/Script/>`__ о том, что панель разворачивается
   * - `onExpanded <Panel.onExpanded.html>`__
     - Устанавливает `обработчик события <../../Core/Script/>`__ о том, что панель была развернута
   * - `onCollapsing <Panel.onCollapsing.html>`__
     - Устанавливает `обработчик события <../../Core/Script/>`__ о том, что панель сворачивается
   * - `onCollapsed <Panel.onCollapsed.html>`__
     - Устанавливает `обработчик события <../../Core/Script/>`__ о том, что панель была свернута


See Also
--------

-  `Container <../../Core/Elements/Container/>`__
