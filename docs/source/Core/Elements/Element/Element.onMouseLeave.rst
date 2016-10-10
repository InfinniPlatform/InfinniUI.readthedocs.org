Element.onMouseLeave
====================

Устанавливает `обработчик события <../../Script/>`__ о том, что
указатель мыши покинул границы элемента.

Syntax
------

.. code:: js

    Element.onMouseLeave(callback)

Parameters
~~~~~~~~~~

.. list-table::
   :header-rows: 1

   * - Name
     - Type
     - Description
   * - ``callback``
     - `Script <../../Script/>`__
     - Обработчик события о том, что указатель мыши покинул границы элемента. В параметре ``args`` передается информация о произошедшем событии - объект типа `MouseEvent <MouseEvent/>`__.


Examples
--------

.. code:: js

    Element.onMouseLeave(
      function(context, args) { alert('onMouseLeave'); }
    );

See Also
--------

-  `onMouseDoubleClick <Element.onMouseDoubleClick.html>`__
-  `onMouseDown <Element.onMouseDown.html>`__
-  `onMouseUp <Element.onMouseUp.html>`__
-  `onMouseWheel <Element.onMouseWheel.html>`__
-  `onMouseEnter <Element.onMouseEnter.html>`__
-  `onMouseMove <Element.onMouseMove.html>`__
-  `MouseEvent <MouseEvent/>`__
