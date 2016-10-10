Element.onDoubleClick
=====================

Устанавливает `обработчик события <../../Script/>`__ о том, что по
элементу сделали двойной клик мыши.

Syntax
------

.. code:: js

    element.onDoubleClick(callback)

Parameters
~~~~~~~~~~

.. list-table::
   :header-rows: 1

   * - Name
     - Type
     - Description
   * - ``callback``
     - `Script <../../Script/>`__
     - Обработчик события о том, что по элементу сделали двойной клик мыши. В параметре ``args`` передается информация о произошедшем событии - объект типа `MouseEvent <MouseEvent/>`__.


Examples
--------

.. code:: js

    element.onDoubleClick(
      function(context, args) { alert('onDoubleClick'); }
    );

See Also
--------

-  `onBeforeClick <Element.onBeforeClick.html>`__
-  `onClick <Element.onClick.html>`__
