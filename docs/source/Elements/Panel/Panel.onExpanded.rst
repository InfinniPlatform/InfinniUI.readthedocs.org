Panel.onExpanded
================

Устанавливает `обработчик события <../../Core/Script/>`__ о том, что
панель была развернута.

Description
-----------

Если панель была свернута, вызов метода
`setCollapsed() <Panel.setCollapsed.html>`__ с параметром ``false``
означает необходимость развернуть панель. В этом случае возникает
событие `onExpanding <Panel.onExpanding.html>`__. В итоге панель будет
развернута, если нет ни одного обработчика, подписанного на событие
`onExpanding <Panel.onExpanding.html>`__, либо если все обработчики этого
события вернули значение, отличное от ``false``. Если панель в конечном
счете была развернута, возникает событие
`onExpanded <Panel.onExpanded.html>`__. В обработчике события
`onExpanded <Panel.onExpanded.html>`__ можно зарегистрировать факт того,
что панель была развернута.

Syntax
------

.. code:: js

    panel.onExpanded(callback)

Parameters
~~~~~~~~~~

.. list-table::
   :header-rows: 1

   * - Name
     - Type
     - Description
   * - callback
     - `Script <../../Core/Script/>`__
     - Обработчик события о том, что панель была развернута


Returns
~~~~~~~

Метод ничего не возвращает

Examples
--------

.. code:: js

    panel.setCollapsible(true);
    panel.setCollapsed(true);

    panel.onExpanded(
      function(context, argument) { alert('Panel is expanded!'); }
    );

    panel.setCollapsed(false);

See Also
--------

-  `setCollapsed() <Panel.setCollapsed.html>`__
-  `onExpanding <Panel.onExpanding.html>`__
