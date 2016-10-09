ButtonEdit
==========

Текстовое поле с кнопкой.

Extends
-------

`TextBox <../TextBox>`__

Syntax
------

.. code:: js

    new ButtonEdit(parent)

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


Returns
~~~~~~~

Элемент ButtonEdit.

Methods
-------

.. list-table::
   :header-rows: 1

   * - Name
     - Description
   * - `getIcon <ButtonEdit.getIcon.html>`__
     - Возвращает название иконки, отображаемой на кнопке
   * - `setIcon <ButtonEdit.setIcon.html>`__
     - Устанавливает название иконки, отображаемой на кнопке
   * - `getReadOnly <ButtonEdit.getReadOnly.html>`__
     - Возвращает значение, определяющее, возможно ли редактирование текстового поля
   * - `setReadOnly <ButtonEdit.setReadOnly.html>`__
     - Устанавливает значение, определяющее, возможно ли редактирование текстового поля
   * - `getShowClear <ButtonEdit.getShowClear.html>`__
     - Возвращает значение, определяющее наличие кнопки, очищающей указанное значение
   * - `setShowClear <ButtonEdit.setShowClear.html>`__
     - Устанавливает значение, определяющее наличие наличие кнопки, очищающей указанное значение


Events
------

+-------------------------------------------------+-------------------------------------------------------------------------------+
Name                                            | Description                                                                   |
+=================================================+===============================================================================+
`onButtonClick <ButtonEdit.onButtonClick.html>`__   | Устанавливает `обработчик события <../../Core/Script/>`__ нажатия на кнопку   |
+-------------------------------------------------+-------------------------------------------------------------------------------+
