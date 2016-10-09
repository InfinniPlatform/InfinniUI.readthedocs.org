Element.onMouseWheel
====================

Устанавливает `обработчик события <../../../Script/>`__ о том, что на
элементе прокрутили колесо мыши.

Syntax
------

.. code:: js

    Element.onMouseWheel(callback)

Parameters
~~~~~~~~~~

.. list-table::
   :header-rows: 1

   * - Name
     - Type
     - Description
   * - ``callback``
     - `Script <../../../Script/>`__
     - Обработчик события о том, что на элементе прокрутили колесо мыши. В параметре ``args`` передается информация о произошедшем событии - объект типа `MouseEvent <../MouseEvent/>`__.


Examples
--------

.. code:: js

    Element.onMouseWheel(
      function(context, args) { alert('onMouseWheel'); }
    );

See Also
--------

-  `onMouseDoubleClick <Element.onMouseDoubleClick.html>`__
-  `onMouseDown <Element.onMouseDown.html>`__
-  `onMouseUp <Element.onMouseUp.html>`__
-  `onMouseEnter <Element.onMouseEnter.html>`__
-  `onMouseLeave <Element.onMouseLeave.html>`__
-  `onMouseMove <Element.onMouseMove.html>`__
-  `MouseEvent <../MouseEvent/>`__
