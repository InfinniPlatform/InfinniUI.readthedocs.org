Element.onGotFocus
==================

Устанавливает `обработчик события <../../Script/>`__ о том, что
элемент получил фокус ввода.

Syntax
------

.. code:: js

    Element.onGotFocus(callback)

Parameters
~~~~~~~~~~

.. list-table::
   :header-rows: 1

   * - Name
     - Type
     - Description
   * - ``callback``
     - `Script <../../Script/>`__
     - Обработчик события о том, что элемент получил фокус ввода.


Examples
--------

.. code:: js

    Element.onGotFocus(
      function(context, args) { alert('Element got focus!'); }
    );

See Also
--------

-  `onLostFocus <Element.onLostFocus.html>`__
