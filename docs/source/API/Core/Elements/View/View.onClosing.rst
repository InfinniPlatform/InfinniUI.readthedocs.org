View.onClosing
==============

Устанавливает `обработчик события <../../../Script/>`__ о том, что
представление закрывается.

Description
-----------

Вызов метода `close() <../View.close.html>`__ приводит к возникновению
события ``onClosing``. Представление будет закрыто, если нет ни одного
обработчика, подписанного на событие ``onClosing``, либо если все
обработчики этого события вернули значение, отличное от ``false``.
Закрытие представления приводит к возникновению события
`onClosed <../View.onClosed.html>`__. В обработчике события
`onClosed <../View.onClosed.html>`__ можно зарегистрировать факт закрытия
представления.

Syntax
------

.. code:: js

    view.onClosing(callback)

Parameters
~~~~~~~~~~

.. list-table::
   :header-rows: 1

   * - Name
     - Type
     - Description
   * - ``callback``
     - `Script <../../../Script/>`__
     - Обработчик события о том, что представление закрывается


Examples
--------

.. code:: js

    view.onClosing(
      function(context, argument) { alert('View is closing!'); }
    );

See Also
--------

-  `close() <../View.close.html>`__
-  `onClosed <../View.onClosed.html>`__
