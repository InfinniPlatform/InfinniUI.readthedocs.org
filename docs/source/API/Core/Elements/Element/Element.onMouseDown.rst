Element.onMouseDown
===================

Устанавливает `обработчик события <../../../Script/>`__ о том, что на
элементе нажали кнопку мыши.

Syntax
------

.. code:: js

    Element.onMouseDown(callback)

Parameters
~~~~~~~~~~

.. list-table::
   :header-rows: 1

   * - Name
     - Type
     - Description
   * - ``callback``
     - `Script <../../../Script/>`__
     - Обработчик события о том, что на элементе нажали кнопку мыши. В параметре ``args`` передается информация о произошедшем событии - объект типа `MouseEvent <../MouseEvent/>`__.


Examples
--------

.. code:: js

    Element.onMouseDown(
      function(context, args) { alert('onMouseDown'); }
    );

See Also
--------

-  `onMouseDoubleClick <Element.onMouseDoubleClick.html>`__
-  `onMouseUp <Element.onMouseUp.html>`__
-  `onMouseWheel <Element.onMouseWheel.html>`__
-  `onMouseEnter <Element.onMouseEnter.html>`__
-  `onMouseLeave <Element.onMouseLeave.html>`__
-  `onMouseMove <Element.onMouseMove.html>`__
-  `MouseEvent <../MouseEvent/>`__
