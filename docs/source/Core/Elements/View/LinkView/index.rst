LinkView
========

Объект, который создает и настраивает `представление <../>`__.

Syntax
------

.. code:: js

    new LinkView(parent)

Parameters
~~~~~~~~~~

.. list-table::
   :header-rows: 1

   * - Name
     - Type
     - Description
   * - parent
     - `Element <../../Element/>`__
     - Родительский элемент


Methods
-------

.. list-table::
   :header-rows: 1

   * - Name
     - Description
   * - `getOpenMode <LinkView.getOpenMode.html>`__
     - Возвращает название стратегии отображения представления
   * - `setOpenMode <LinkView.setOpenMode.html>`__
     - Устанавливает название стратегии отображения представления
   * - `setViewTemplate <LinkView.setViewTemplate.html>`__
     - Устанавливает `функцию <../../../Script/>`__ шаблонизации представления
   * - `createView <LinkView.createView.html>`__
     - Создает представление
   * - `setDialogWidth <LinkView.setDialogWidth.html>`__
     - Устанавливает ширину диалогового окна (для случая OpenMode = 'Dialog')
   * - `setContainer <LinkView.setContainer.html>`__
     - Устанавливает название контейнера (для случая OpenMode = 'Container')


Events
------

Нет


.. toctree::
   :hidden:

   LinkView.metadata/index.rst
   LinkView.createView.rst
   LinkView.getOpenMode.rst
   LinkView.setContainer.rst
   LinkView.setDialogWidth.rst
   LinkView.setOpenMode.rst
   LinkView.setViewTemplate.rst
   OpenMode.rst
