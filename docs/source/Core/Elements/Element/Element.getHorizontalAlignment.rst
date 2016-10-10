Element.getHorizontalAlignment()
================================

Возвращает `горизонтальное
выравнивание <ElementHorizontalAlignment/>`__ в родительском
элементе.

Syntax
------

.. code:: js

    Element.getHorizontalAlignment()

Parameters
~~~~~~~~~~

Нет

Returns
~~~~~~~

`Горизонтальное выравнивание <ElementHorizontalAlignment/>`__ в
родительском элементе.

Examples
--------

.. code:: js

    //js-demo
    var label = new Label();
    var $label = label.render();

    var div = document.createElement("div");
    div.innerHTML = label.getHorizontalAlignment();

    $elementForExample.prepend(div);

See Also
--------

-  `setHorizontalAlignment() <Element.setHorizontalAlignment.html>`__
-  `ElementHorizontalAlignment <ElementHorizontalAlignment/>`__
