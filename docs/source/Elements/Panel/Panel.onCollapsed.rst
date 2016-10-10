Panel.onCollapsed
=================

Устанавливает `обработчик события <../../Core/Script/>`__ о том, что
панель была свернута.

Description
-----------

Если панель была развернута и ее `можно
свернуть <Panel.getCollapsible.html>`__, вызов метод
`setCollapsed() <Panel.setCollapsed.html>`__ с параметром ``true``
означает необходимость свернуть панель. В этом случае возникает событие
`onCollapsing <Panel.onCollapsing.html>`__. В итоге панель будет
свернута, если нет ни одного обработчика, подписанного на событие
`onCollapsing <Panel.onCollapsing.html>`__, либо если все обработчики
этого события вернули значение, отличное от ``false``. Если панель в
конечном счете была свернута, возникает событие
`onCollapsed <Panel.onCollapsed.html>`__. В обработчике события
`onCollapsed <Panel.onCollapsed.html>`__ можно зарегистрировать факт
того, что панель была свернута.

Syntax
------

.. code:: js

    panel.onCollapsed(callback)

Parameters
~~~~~~~~~~

.. list-table::
   :header-rows: 1

   * - Name
     - Type
     - Description
   * - callback
     - `Script <../../Core/Script/>`__
     - Обработчик события о том, что панель была свернута


Returns
~~~~~~~

Метод ничего не возвращает

Examples
--------

.. code:: js

    panel.setCollapsible(true);
    panel.setCollapsed(false);

    panel.onCollapsed(
      function(context, argument) { alert('Panel is collapsed!'); }
    );

    panel.setCollapsed(true);

See Also
--------

-  `setCollapsed() <Panel.setCollapsed.html>`__
-  `onCollapsing <Panel.onCollapsing.html>`__
