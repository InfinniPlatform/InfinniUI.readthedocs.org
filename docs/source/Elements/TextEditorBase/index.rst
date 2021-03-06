TextEditorBase
==============

Базовый тип редакторов текстовых значений.

Extends
-------

`Element <../../Core/Elements/Element>`__,
`EditorBase <../EditorBase/>`__

Syntax
------

.. code:: js

    new TextEditorBase(parent)

Parameters
~~~~~~~~~~

.. list-table::
   :header-rows: 1

   * - Name
     - Type
     - Description
   * - ``parent``
     - `Element <../../Core/Elements/Element>`__
     - Родительский `элемент <../../Core/Elements/Element>`__.


Methods
-------

.. list-table::
   :header-rows: 1

   * - Name
     - Description
   * - `getLabelText <TextEditorBase.getLabelText.html>`__
     - Возвращает текст метки.
   * - `setLabelText <TextEditorBase.setLabelText.html>`__
     - Устанавливает текст метки.
   * - `getLabelTextTitle <TextEditorBase.getLabelTextTitle.html>`__
     - Возвращает значение, которое показывает, копируется текст метки в атрибут title или нет.
   * - `setLabelTextTitle <TextEditorBase.setLabelTextTitle.html>`__
     - Устанавливает значение, которое показывает, копируется текст метки в атрибут title или нет.
   * - `getLabelFloating <TextEditorBase.getLabelFloating.html>`__
     - Возвращает значение, определяющее, является ли метка плавающей.
   * - `setLabelFloating <TextEditorBase.setLabelFloating.html>`__
     - Устанавливает значение, определяющее, является ли метка плавающей.
   * - `getDisplayFormat <TextEditorBase.getDisplayFormat.html>`__
     - Возвращает `функцию <../../Core/Script/>`__ форматирования `значения <../EditorBase/EditorBase.getValue.html>`__ для отображения.
   * - `setDisplayFormat <TextEditorBase.setDisplayFormat.html>`__
     - Устанавливает `функцию <../../Core/Script/>`__ форматирования `значения <../EditorBase/EditorBase.getValue.html>`__ для отображения.
   * - `getEditMask <TextEditorBase.getEditMask.html>`__
     - Возвращает `маску ввода данных </Core/EditMask/>`__.
   * - `setEditMask <TextEditorBase.setEditMask.html>`__
     - Устанавливает `маску ввода данных </Core/EditMask/>`__.



.. include:: TextEditorBase.metadata.rst

.. toctree::
   :hidden:

   TextEditorBase.getDisplayFormat.rst
   TextEditorBase.getEditMask.rst
   TextEditorBase.getLabelFloating.rst
   TextEditorBase.getLabelText.rst
   TextEditorBase.getLabelTextTitle.rst
   TextEditorBase.metadata.rst
   TextEditorBase.setDisplayFormat.rst
   TextEditorBase.setEditMask.rst
   TextEditorBase.setLabelFloating.rst
   TextEditorBase.setLabelText.rst
   TextEditorBase.setLabelTextTitle.rst