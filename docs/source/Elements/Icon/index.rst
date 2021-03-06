Icon
====

Элемент для отображения изображения.

Для отображения используется библиотека значков `Font
Awesome <http://fontawesome.io.html>`__.

Для отображения нужной картинки, в ``Value`` элемента необходимо
установить имя соотвествующей картинки (напр. "fa-battery-empty").

Полный список доступных картинок:
`Icons <http://fontawesome.io/icons/>`__.

Extends
-------

`Element <../../Core/Elements/Element>`__,
`EditorBase <../EditorBase/>`__

Syntax
------

.. code:: js

    new Icon([parent])

Parameters
~~~~~~~~~~

.. list-table::
   :header-rows: 1

   * - Name
     - Type
     - Default
     - Description
   * - ``parent``
     - `Element <../../Core/Elements/Element>`__
     - -
     - Родительский элемент


Methods
-------

.. list-table::
   :header-rows: 1

   * - Name
     - Description
   * - `getSize <Icon.getSize.html>`__
     - Возвращает размер иконки
   * - `setSize <Icon.setSize.html>`__
     - Устанавливает размер иконки


.. include:: Icon.metadata.rst

.. toctree::
   :hidden:

   Icon.getSize.rst
   Icon.metadata.rst
   Icon.setSize.rst
