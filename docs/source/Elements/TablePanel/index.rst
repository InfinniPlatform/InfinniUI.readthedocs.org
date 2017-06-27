TablePanel
==========

Контейнер в виде таблицы.

Description
-----------

Таблица - `контейнер <../../Core/Elements/Container/>`__ визуальных
элементов, который делит свою рабочую область на `строки <Row/>`__ и
столбцы, на пересечении которых располагаются `ячейки <Cell/>`__.
Визуально сетка никак не отображается, однако задает правила
расположения дочерних элементов. Количество столбцов всегда фиксировано
и равно ``12``, количество строк - неограничено. Ячейки располагаются
внутри строки, слева направо, строки следуют сверху вниз. Для каждой
ячейки можно `задать размер <Cell/Cell.setColumnSpan.html>`__ - целое число
от ``1`` до ``12`` включительно, определяющее то, сколько колонок по
горизонтали будет занимать ячейка. Высота ячейки определяется высотой
самого высокого элемента, высота строки определяется высотой самой
высокой ячейки данной строки.

Extends
-------

`Container <../../Core/Elements/Container/>`__

Syntax
------

.. code:: js

    new TablePanel(parent)

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

Нет

Events
------

Нет



.. include:: TablePanel.metadata.rst

See Also
--------

-  `GridPanel <../GridPanel/>`__
-  `Row <Row/>`__
-  `Cell <Cell/>`__
-  `Container <../../Core/Elements/Container/>`__

.. toctree::
   :hidden:

   TablePanel.metadata.rst
   Cell/index.rst
   Row/index.rst
