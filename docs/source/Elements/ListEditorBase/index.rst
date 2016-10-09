ListEditorBase
==============

Базовый тип редакторов коллекций данных.

Extends
-------

`Container <../../Core/Elements/Container>`__,
`EditorBase <../EditorBase/>`__

Syntax
------

.. code:: js

    new ListEditorBase(parent)

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
   * - `getMultiSelect <ListEditorBase.getMultiSelect.html>`__
     - Возвращает значение, определяющее, разрешен ли выбор нескольких элементов.
   * - `setMultiSelect <ListEditorBase.setMultiSelect.html>`__
     - Устанавливает значение, определяющее, разрешен ли выбор нескольких элементов.
   * - `getValueSelector <ListEditorBase.getValueSelector.html>`__
     - Возвращает `функцию <../../Core/Script/>`__ выборки из элемента коллекции значимой части.
   * - `setValueSelector <ListEditorBase.setValueSelector.html>`__
     - Устанавливает `функцию <../../Core/Script/>`__ выборки из элемента коллекции значимой части.
   * - `getSelectedItem <ListEditorBase.getSelectedItem.html>`__
     - Возвращает выделенный элемент коллекции.
   * - `setSelectedItem <ListEditorBase.setSelectedItem.html>`__
     - Устанавливает выделенный элемент коллекции.
   * - `getDisabledItemCondition <ListEditorBase.getDisabledItemCondition.html>`__
     - Возвращает `функцию <../../Core/Script/>`__, определяющую запрет на выбор элемента.
   * - `setDisabledItemCondition <ListEditorBase.setDisabledItemCondition.html>`__
     - Устанавливает `функцию <../../Core/Script/>`__, определяющую запрет на выбор элемента.
   * - `setValueItem <ListEditorBase.setValueItem.html>`__
     - Устанавливает значение элемента по элементу коллекции.


Events
------

.. list-table::
   :header-rows: 1

   * - Name
     - Description
   * - `onSelectedItemChanged <ListEditorBase.onSelectedItemChanged.html>`__
     - Устанавливает `обработчик события <../../Core/Script/>`__ о том, что выделенный элемент изменился.

