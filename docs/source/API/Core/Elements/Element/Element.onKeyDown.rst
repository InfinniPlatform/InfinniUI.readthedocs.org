Element.onKeyDown
=================

Устанавливает `обработчик события <../../../Script/>`__ о том, что на
элементе нажали клавишу клавиатуры.

Syntax
------

.. code:: js

    Element.onKeyDown(callback)

Parameters
~~~~~~~~~~

.. list-table::
   :header-rows: 1

   * - Name
     - Type
     - Description
   * - ``callback``
     - `Script <../../../Script/>`__
     - Обработчик события о том, что на элементе нажали клавишу клавиатуры. В параметре ``args`` передается информация о произошедшем событии - объект типа `KeyboardEvent <../KeyboardEvent/>`__.


Examples
--------

.. code:: js

    Element.onKeyDown(
      function(context, args) { alert('onKeyDown'); }
    );

See Also
--------

-  `onKeyUp <../Element.onKeyUp.html>`__
-  `KeyboardEvent <../KeyboardEvent/>`__
