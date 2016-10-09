View.onBeforeLoaded
===================

Устанавливает `обработчик события <../../../Script/>`__ о том, что
представление представление было загружено. Данный обработчик сработает
до `onLoaded <../../Element/Element.onLoaded.html>`__.

Syntax
------

.. code:: js

    view.onBeforeLoaded(callback)

Parameters
~~~~~~~~~~

.. list-table::
   :header-rows: 1

   * - Name
     - Type
     - Description
   * - ``callback``
     - `Script <../../../Script/>`__
     - Обработчик события о том, что представление было загружено


Examples
--------

.. code:: js

    view.onBeforeLoaded(
      function(context, argument) { alert('View is loaded! (1)'); }
    );

    view.onLoaded(
      function(context, argument) { alert('View is loaded! (2)'); }
    );

See Also
--------

-  `onLoaded <../../Element/Element.onLoaded.html>`__
