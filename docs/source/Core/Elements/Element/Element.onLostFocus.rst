Element.onLostFocus
===================

Устанавливает `обработчик события <../../Script/>`__ о том, что
элемент потерял фокус ввода.

Syntax
------

.. code:: js

    Element.onLostFocus(callback)

Parameters
~~~~~~~~~~

.. list-table::
   :header-rows: 1

   * - Name
     - Type
     - Description
   * - ``callback``
     - `Script <../../Script/>`__
     - Обработчик события о том, что элемент потерял фокус ввода.


Examples
--------

.. code:: js

    Element.onLostFocus(
      function(context, args) { alert('Element lost focus!'); }
    );

See Also
--------

-  `onGotFocus <Element.onGotFocus.html>`__
