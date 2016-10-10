Element.onBeforeClick
=====================

Устанавливает `обработчик события <../../Script/>`__ клика мыши,
который будет срабатывать при захвате события на элементе.

Syntax
------

.. code:: js

    Element.onBeforeClick(callback)

Parameters
~~~~~~~~~~

.. list-table::
   :header-rows: 1

   * - Name
     - Type
     - Description
   * - ``callback``
     - `Script <../../Script/>`__
     - Обработчик события о том, что по элементу сделали одинарный клик мыши. В параметре ``args`` передается информация о произошедшем событии - объект типа `MouseEvent <MouseEvent/>`__.


Examples
--------

.. code:: js

    Element.onBeforeClick(
      function(context, args) { alert('onBeforeClick'); }
    );

See Also
--------

-  `onClick <Element.onClick.html>`__
-  `onDoubleClick <Element.onDoubleClick.html>`__
