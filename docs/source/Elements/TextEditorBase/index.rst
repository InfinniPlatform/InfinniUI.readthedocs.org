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
   * - `getLabelFloating <TextEditorBase.getLabelFloating.html>`__
     - Возвращает значение, определяющее, является ли метка плавающей.
   * - `setLabelFloating <TextEditorBase.setLabelFloating.html>`__
     - Устанавливает значение, определяющее, является ли метка плавающей.
   * - `getDisplayFormat <TextEditorBase.getDisplayFormat.html>`__
     - Возвращает `функцию <../../Core/Script/>`__ форматирования `значения <../EditorBase/EditorBase.getValue.html>`__ для отображения.
   * - `setDisplayFormat <TextEditorBase.setDisplayFormat.html>`__
     - Устанавливает `функцию <../../Core/Script/>`__ форматирования `значения <../EditorBase/EditorBase.getValue.html>`__ для отображения.
   * - `getEditMask <TextEditorBase.getEditMask.html>`__
     - Возвращает `маску ввода данных </docs/API/Core/EditMask/>`__.
   * - `setEditMask <TextEditorBase.setEditMask.html>`__
     - Устанавливает `маску ввода данных </docs/API/Core/EditMask/>`__.



.. include:: TextEditorBase.metadata.rst