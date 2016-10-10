Element.onKeyUp
===============

Устанавливает `обработчик события <../../Script/>`__ о том, что на
элементе отпустили клавишу клавиатуры.

Syntax
------

.. code:: js

    Element.onKeyUp(callback)

Parameters
~~~~~~~~~~

.. list-table::
   :header-rows: 1

   * - Name
     - Type
     - Description
   * - ``callback``
     - `Script <../../Script/>`__
     - Обработчик события о том, что на элементе отпустили клавишу клавиатуры. В параметре ``args`` передается информация о произошедшем событии - объект типа `KeyboardEvent <KeyboardEvent/>`__.


Examples
--------

.. code:: js

    Element.onKeyUp(
      function(context, args) { alert('onKeyUp'); }
    );

See Also
--------

-  `onKeyDown <Element.onKeyDown.html>`__
-  `KeyboardEvent <KeyboardEvent/>`__
