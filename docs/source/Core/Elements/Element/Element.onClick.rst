Element.onClick
===============

Устанавливает `обработчик события <../../../Script/>`__ о том, что по
элементу сделали одинарный клик мыши.

Syntax
------

.. code:: js

    element.onClick(callback)

Parameters
~~~~~~~~~~

.. list-table::
   :header-rows: 1

   * - Name
     - Type
     - Description
   * - ``callback``
     - `Script <../../../Script/>`__
     - Обработчик события о том, что по элементу сделали одинарный клик мыши. В параметре ``args`` передается информация о произошедшем событии - объект типа `MouseEvent <../MouseEvent/>`__.


Examples
--------

.. code:: js

    element.onClick(
      function(context, args) { alert('onClick'); }
    );

See Also
--------

-  `onBeforeClick <../Element.onBeforeClick.html>`__
-  `onDoubleClick <../Element.onDoubleClick.html>`__
