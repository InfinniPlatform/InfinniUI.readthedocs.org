View.onClosed
=============

Устанавливает `обработчик события <../../../Script/>`__ о том, что
представление было закрыто.

Description
-----------

Вызов метода `close() <../View.close.html>`__ приводит к возникновению
события `onClosing <../View.onClosing.html>`__. Представление будет закрыто,
если нет ни одного обработчика, подписанного на событие
`onClosing <../View.onClosing.html>`__, либо если все обработчики этого
события вернули значение, отличное от ``false``. Закрытие представления
приводит к возникновению события ``onClosed``. В обработчике события
``onClosed`` можно зарегистрировать факт закрытия представления.

Syntax
------

.. code:: js

    view.onClosed(callback)

Parameters
~~~~~~~~~~

.. list-table::
   :header-rows: 1

   * - Name
     - Type
     - Description
   * - ``callback``
     - `Script <../../../Script/>`__
     - Обработчик события о том, что представление было закрыто


Examples
--------

.. code:: js

    view.onClosed(
      function(context, argument) { alert('View is closed!'); }
    );

See Also
--------

-  `close() <../View.close.html>`__
-  `onClosing <../View.onClosing.html>`__
