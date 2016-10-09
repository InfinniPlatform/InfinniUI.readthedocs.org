DataBinding.getElementProperty()
================================

Возвращает путь к свойству элемента привязки.

Syntax
------

.. code:: js

    dataBinding.getElementProperty()

Parameters
~~~~~~~~~~

Нет

Returns
~~~~~~~

Путь к свойству элемента привязки, установленный вызовом метода
`bindElement() <../DataBinding.bindElement.html>`__.

Examples
--------

.. code:: js

    dataBinding.bindElement(context.controls['TextBox1'], 'Value');
    var elementProperty = dataBinding.getElementProperty(); // elementProperty === 'Value'

See Also
--------

-  `bindElement() <../DataBinding.bindElement.html>`__
-  `getElement() <../DataBinding.getElement.html>`__
