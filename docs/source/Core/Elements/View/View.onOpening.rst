View.onOpening
==============

Устанавливает `обработчик события <../../Script/>`__ о том, что
представление открывается.

Description
-----------

Вызов метода `open() <View.open.html>`__ приводит к возникновению события
``onOpening``. Представление будет открыто, если нет ни одного
обработчика, подписанного на событие ``onOpening``, либо если все
обработчики этого события вернули значение, отличное от ``false``.
Открытие представления приводит к возникновению события
`onOpened <View.onOpened.html>`__. В обработчике события
`onOpened <View.onOpened.html>`__ можно зарегистрировать факт открытия
представления.

Syntax
------

.. code:: js

    view.onOpening(callback)

Parameters
~~~~~~~~~~

.. list-table::
   :header-rows: 1

   * - Name
     - Type
     - Description
   * - ``callback``
     - `Script <../../Script/>`__
     - Обработчик события о том, что представление открывается


Examples
--------

.. code:: js

    view.onOpening(
      function(context, argument) { alert('View is opening!'); }
    );

See Also
--------

-  `open() <View.open.html>`__
-  `onOpened <View.onOpened.html>`__
