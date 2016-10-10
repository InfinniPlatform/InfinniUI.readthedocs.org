View.onOpened
=============

Устанавливает `обработчик события <../../Script/>`__ о том, что
представление было открыто.

Description
-----------

Вызов метода `open() <View.open.html>`__ приводит к возникновению события
`onOpening <View.onOpening.html>`__. Представление будет открыто, если
нет ни одного обработчика, подписанного на событие
`onOpening <View.onOpening.html>`__, либо если все обработчики этого
события вернули значение, отличное от ``false``. Открытие представления
приводит к возникновению события ``onOpened``. В обработчике события
``onOpened`` можно зарегистрировать факт открытия представления.

Syntax
------

.. code:: js

    view.onOpened(callback)

Parameters
~~~~~~~~~~

.. list-table::
   :header-rows: 1

   * - Name
     - Type
     - Description
   * - ``callback``
     - `Script <../../Script/>`__
     - Обработчик события о том, что представление было открыто


Examples
--------

.. code:: js

    view.onOpened(
      function(context, argument) { alert('View is opened!'); }
    );

See Also
--------

-  `open() <View.open.html>`__
-  `onOpening <View.onOpening.html>`__
