View.close()
============

Закрывает представление.

Description
-----------

Вызов метода ``close`` приводит к возникновению события
`onClosing <../View.onClosing.html>`__. Представление будет закрыто, если
нет ни одного обработчика, подписанного на событие
`onClosing <../View.onClosing.html>`__, либо если все обработчики этого
события вернули значение, отличное от ``false``. Закрытие представления
приводит к возникновению события `onClosed <../View.onClosed.html>`__. В
обработчике события `onClosed <../View.onClosed.html>`__ можно
зарегистрировать факт закрытия представления.

Syntax
------

.. code:: js

    view.close(success, error)

Parameters
~~~~~~~~~~

.. list-table::
   :header-rows: 1

   * - Name
     - Type
     - Description
   * - success
     - `Script <../../../Script/>`__
     - Обработчик события о том, что представление закрыто
   * - error
     - `Script <../../../Script/>`__
     - Обработчик события о том, что при закрытии произошла ошибка


Returns
~~~~~~~

Метод ничего не возвращает.

Examples
--------

.. code:: js

    view.close();

See Also
--------

-  `onClosing <../View.onClosing.html>`__
-  `onClosed <../View.onClosed.html>`__
-  `open() <../View.open.html>`__
