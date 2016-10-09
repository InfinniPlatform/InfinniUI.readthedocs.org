IndeterminateCheckBox
=====================

Переключатель в виде флажка. Допускает неопределенное состояние.

Description
-----------

Для отображения переключателя в виде флажка можно использовать
  `CheckBox <../CheckBox/>`__ и IndeterminateCheckBox.
Отличие в том, что IndeterminateCheckBox поддерживает ещё и
  неопределенное состояние.
`CheckBox <../CheckBox/>`__ может принимать значение
  ``false``/``true``,
IndeterminateCheckBox -
  ``"unchecked"``/``"checked"``/``"indeterminate"``.

Extends
-------

`CheckBox <../CheckBox/>`__

Syntax
------

.. code:: js

    new IndeterminateCheckBox([parent])

Parameters
~~~~~~~~~~

+--------------+---------------------------------------------+----------------------------------------------------------+
Name         | Type                                        | Description                                              |
+==============+=============================================+==========================================================+
``parent``   | `Element <../../Core/Elements/Element>`__   | Родительский `элемент <../../Core/Elements/Element>`__   |
+--------------+---------------------------------------------+----------------------------------------------------------+


.. toctree::

   IndeterminateCheckBox.metadata.rst
