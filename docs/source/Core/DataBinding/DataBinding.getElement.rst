DataBinding.getElement()
========================

Возвращает элемент привязки.

Syntax
------

.. code:: js

    dataBinding.getElement()

Parameters
~~~~~~~~~~

Нет

Returns
~~~~~~~

Элемент привязки, установленный вызовом метода
`bindElement() <DataBinding.bindElement.html>`__.

Examples
--------

.. code:: js

    dataBinding.bindElement(context.controls['TextBox1'], 'Value');
    var element = dataBinding.getElement(); // element === context.controls['TextBox1']

See Also
--------

-  `bindElement() <DataBinding.bindElement.html>`__
-  `getElementProperty() <DataBinding.getElementProperty.html>`__
