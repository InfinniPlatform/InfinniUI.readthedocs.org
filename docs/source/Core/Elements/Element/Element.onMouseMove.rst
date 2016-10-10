Element.onMouseMove
===================

Устанавливает `обработчик события <../../Script/>`__ о том, что
указатель мыши двигался внутри элемента.

Syntax
------

.. code:: js

    Element.onMouseMove(callback)

Parameters
~~~~~~~~~~

.. list-table::
   :header-rows: 1

   * - Name
     - Type
     - Description
   * - ``callback``
     - `Script <../../Script/>`__
     - Обработчик события о том, что указатель мыши двигался внутри элемента. В параметре ``args`` передается информация о произошедшем событии - объект типа `MouseEvent <MouseEvent/>`__.


Examples
--------

.. code:: js

    Element.onMouseMove(
      function(context, args) { alert('onMouseMove'); }
    );

See Also
--------

-  `onMouseDoubleClick <Element.onMouseDoubleClick.html>`__
-  `onMouseDown <Element.onMouseDown.html>`__
-  `onMouseUp <Element.onMouseUp.html>`__
-  `onMouseWheel <Element.onMouseWheel.html>`__
-  `onMouseEnter <Element.onMouseEnter.html>`__
-  `onMouseLeave <Element.onMouseLeave.html>`__
-  `MouseEvent <MouseEvent/>`__
