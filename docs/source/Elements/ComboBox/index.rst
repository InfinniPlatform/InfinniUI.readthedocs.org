ComboBox
========

Выпадающий список.

Extends
-------

`ListEditorBase <../ListEditorBase/>`__

Syntax
------

.. code:: js

    new ComboBox(parent)

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
   * - `getLabelText <ComboBox.getLabelText.html>`__
     - Возвращает текст метки
   * - `setLabelText <ComboBox.setLabelText.html>`__
     - Устанавливает текст метки
   * - `getLabelFloating <ComboBox.getLabelFloating.html>`__
     - Возвращает значение, определяющее, является ли метка плавающей
   * - `setLabelFloating <ComboBox.setLabelFloating.html>`__
     - Устанавливает значение, определяющее, является ли метка плавающей
   * - `getAutocomplete <ComboBox.getAutocomplete.html>`__
     - Возвращает значение, определяющее, разрешено ли автозавершение ввода
   * - `setAutocomplete <ComboBox.setAutocomplete.html>`__
     - Устанавливает значение, определяющее, разрешено ли автозавершение ввода
   * - `getValueTemplate <ComboBox.getValueTemplate.html>`__
     - Возвращает `функцию <../../../Core/Script/>`__ шаблонизации выбранного значения
   * - `setValueTemplate <ComboBox.setValueTemplate.html>`__
     - Устанавливает `функцию <../../../Core/Script/>`__ шаблонизации выбранного значения
   * - `getShowClear <ComboBox.getShowClear.html>`__
     - Возвращает значение, которое определяет наличие кнопки, очищающей выбранное значение
   * - `setShowClear <ComboBox.setShowClear.html>`__
     - Устанавливает значение, которое определяет наличие кнопки, очищающей выбранное значение
   * - `getAutocompleteValue <ComboBox.getAutocompleteValue.html>`__
     - Возвращает значение, для поиска в выпадающем списке значений
   * - `setAutocompleteValue <ComboBox.setAutocompleteValue.html>`__
     - Устанавливает значение, для поиска в выпадающем списке значений
   * - `setNoItemsMessage <ComboBox.setNoItemsMessage.html>`__
     - Устанавивает значение, которое будет использоваться для отображения, когда не найден не один элемент.
   * - `getExpandOnEnter <ComboBox.getExpandOnEnter.html>`__
     - Возвращает значение, определяющее, будет ли открываться выпадающий список по клавише Enter.
   * - `setExpandOnEnter <ComboBox.setExpandOnEnter.html>`__
     - Устанавивает значение, определяющее, будет ли открываться выпадающий список по клавише Enter.


Events
------

Нет


.. include:: ComboBox.metadata.rst

.. toctree::
   :hidden:

   ComboBox.getAutocomplete.rst
   ComboBox.getAutocompleteValue.rst
   ComboBox.getExpandOnEnter.rst
   ComboBox.getLabelFloating.rst
   ComboBox.getLabelText.rst
   ComboBox.getShowClear.rst
   ComboBox.getValueTemplate.rst
   ComboBox.metadata.rst
   ComboBox.setAutocomplete.rst
   ComboBox.setAutocompleteValue.rst
   ComboBox.setExpandOnEnter.rst
   ComboBox.setLabelFloating.rst
   ComboBox.setLabelText.rst
   ComboBox.setNoItemsMessage.rst
   ComboBox.setShowClear.rst
   ComboBox.setValueTemplate.rst