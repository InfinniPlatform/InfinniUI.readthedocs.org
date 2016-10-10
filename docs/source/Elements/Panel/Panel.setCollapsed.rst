Panel.setCollapsed()
====================

Устанавливает значение, определяющее, свернута ли панель.

Description
-----------

Вызов метода `setCollapsible() <Panel.setCollapsible.html>`__ управляет
возможностью сворачивания панели. Если сворачивание запрещено, панель
нельзя свернуть ни визуально, ни программно - с помощью метода
`setCollapsed() <Panel.setCollapsed.html>`__. Если сворачивание было
запрещено в то время, как панель была свернута, панель разворачивается
автоматически.

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

Если панель была развернута и ее `можно
свернуть <Panel.getCollapsible.html>`__, вызов метода
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

    panel.setCollapsed(value)

Parameters
~~~~~~~~~~

.. list-table::
   :header-rows: 1

   * - Name
     - Type
     - Description
   * - value
     - ``Boolean``
     - Флаг, определяющий, свернута ли панель. Значение ``false`` говорит о том, что панель развернута, значение ``true`` - свернута.


Returns
~~~~~~~

Метод ничего не возвращает.

Examples
--------

.. code:: js

    // Disable collapsing
    panel.setCollapsible(false);
    panel.setCollapsed(false);   // No effect, panel.getCollapsed() === false
    panel.setCollapsed(true);    // No effect, panel.getCollapsed() === false

    // Enable collapsing
    panel.setCollapsible(true);
    panel.setCollapsed(true);    // Collapsed, panel.getCollapsed() === true
    panel.setCollapsed(false);   // Expanded, panel.getCollapsed() === false
    panel.setCollapsed(true);    // Collapsed, panel.getCollapsed() === true

    // Disable collapsing
    panel.setCollapsible(false); // Expanded, panel.getCollapsed() === false

See Also
--------

-  `getCollapsed() <Panel.getCollapsed.html>`__
-  `getCollapsible() <Panel.getCollapsible.html>`__
-  `setCollapsible() <Panel.setCollapsible.html>`__
-  `onExpanding <Panel.onExpanding.html>`__
-  `onExpanded <Panel.onExpanded.html>`__
-  `onCollapsing <Panel.onCollapsing.html>`__
-  `onCollapsed <Panel.onCollapsed.html>`__
