View.open()
===========

Открывает представление.

Description
-----------

Вызов метода ``open`` приводит к возникновению события
`onOpening <View.onOpening.html>`__. Представление будет открыто, если
нет ни одного обработчика, подписанного на событие
`onOpening <View.onOpening.html>`__, либо если все обработчики этого
события вернули значение, отличное от ``false``. Открытие представления
приводит к возникновению события `onOpened <View.onOpened.html>`__. В
обработчике события `onOpened <View.onOpened.html>`__ можно
зарегистрировать факт открытия представления.

Syntax
------

.. code:: js

    view.open(success, error)

Parameters
~~~~~~~~~~

.. list-table::
   :header-rows: 1

   * - Name
     - Type
     - Description
   * - success
     - `Script <../../Script/>`__
     - Обработчик события о том, что представление открыто
   * - error
     - `Script <../../Script/>`__
     - Обработчик события о том, что при открытии произошла ошибка


Returns
~~~~~~~

Метод ничего не возвращает.

Examples
--------

.. code:: js

    view.open();

See Also
--------

-  `onOpening <View.onOpening.html>`__
-  `onOpened <View.onOpened.html>`__
-  `close() <View.close.html>`__
