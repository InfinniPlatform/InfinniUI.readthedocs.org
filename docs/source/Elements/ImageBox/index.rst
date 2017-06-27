ImageBox
========

Редактор изображений.

Extends
-------

`Element <../../Core/Elements/Element>`__,
`EditorBase <../EditorBase/>`__

Syntax
------

.. code:: js

    new ImageBox([parent])

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
   * - `getMaxSize <ImageBox.getMaxSize.html>`__
     - Возвращает максимальный размер данных в байтах.
   * - `setMaxSize <ImageBox.setMaxSize.html>`__
     - Устанавливает максимальный размер данных в байтах.
   * - `getAcceptTypes <ImageBox.getAcceptTypes.html>`__
     - Возвращает `коллекцию <../../Core/Collection/>`__ допустимых форматов данных.
   * - `setAcceptTypes <ImageBox.setAcceptTypes.html>`__
     - Устанавливает список допустимых форматов данных.



.. include:: ImageBox.metadata.rst

.. toctree::
   :hidden:

   ImageBox.getAcceptTypes.rst
   ImageBox.getMaxSize.rst
   ImageBox.metadata.rst
   ImageBox.setAcceptTypes.rst
   ImageBox.setMaxSize.rst