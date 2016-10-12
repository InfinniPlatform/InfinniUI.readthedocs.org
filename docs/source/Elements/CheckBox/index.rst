CheckBox
========

Переключатель в виде флажка.

Description
-----------

Для отображения переключателя в виде флажка можно использовать
  CheckBox и `IndeterminateCheckBox <../IndeterminateCheckBox/>`__.
Отличие в том, что
  `IndeterminateCheckBox <../IndeterminateCheckBox/>`__ поддерживает ещё
  и неопределенное состояние.
CheckBox может принимать значение ``false``/``true``,
`IndeterminateCheckBox <../IndeterminateCheckBox/>`__ -
  ``"unchecked"``/``"checked"``/``"indeterminate"``.

Extends
-------

`Element <../../Core/Elements/Element>`__,
`EditorBase <../EditorBase/>`__

Syntax
------

.. code:: js

    new CheckBox([parent])

Parameters
~~~~~~~~~~

.. list-table::
   :header-rows: 1

   * - Name
     - Type
     - Description
   * - ``parent``
     - `Element <../../Core/Elements/Element>`__
     - Родительский `элемент <../../Core/Elements/Element>`__



.. include:: CheckBox.metadata.rst