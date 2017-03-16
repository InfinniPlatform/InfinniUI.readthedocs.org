ScrollPanel
===========

Контейнер в виде прокручиваемой области. Для корректной работы параметр `InfinniUI.config.enableAutoHeightService </Core/Config/>`_ должен иметь значение true, либо нужно задать высоту панели самостоятельно с помощью `стилей </Core/Elements/Element/Element.metadata.html>`_.

Description
-----------

Прокручиваемая область - `контейнер <../../Core/Elements/Container/>`__
визуальных элементов, который позволяет отображать содержимое в области,
размер которой меньше размера содержимого. Когда содержимое контейнера
не отображается полностью, отображаются полосы прокрутки, с помощью
которых можно перемещать видимую область содержимого.

Extends
-------

`Container <../../Core/Elements/Container/>`__

Syntax
------

.. code:: js

    new ScrollPanel(parent)

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
   * - `getHorizontalScroll <ScrollPanel.getHorizontalScroll.html>`__
     - Возвращает `видимость полосы прокрутки <ScrollVisibility.html>`__ по горизонтали
   * - `setHorizontalScroll <ScrollPanel.setHorizontalScroll.html>`__
     - Устанавливает `видимость полосы прокрутки <ScrollVisibility.html>`__ по горизонтали
   * - `getVerticalScroll <ScrollPanel.getVerticalScroll.html>`__
     - Возвращает `видимость полосы прокрутки <ScrollVisibility.html>`__ по вертикали
   * - `setVerticalScroll <ScrollPanel.setVerticalScroll.html>`__
     - Устанавливает `видимость полосы прокрутки <ScrollVisibility.html>`__ по вертикали


Events
------

Нет



.. include:: ScrollPanel.metadata.rst

See Also
--------

-  `ScrollVisibility <ScrollVisibility.html>`__
-  `Container <../../Core/Elements/Container/>`__
