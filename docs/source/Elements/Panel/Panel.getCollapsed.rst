Panel.getCollapsed()
====================

Возвращает значение, определяющее, свернута ли панель.

Description
-----------

Вызов метода `setCollapsible() <Panel.setCollapsible.html>`__ управляет
возможностью сворачивания панели. Если сворачивание запрещено, панель
нельзя свернуть ни визуально, ни программно - с помощью метода
`setCollapsed() <Panel.setCollapsed.html>`__. Если сворачивание было
запрещено в то время, как панель была свернута, панель разворачивается
автоматически.

Syntax
------

.. code:: js

    panel.getCollapsed()

Parameters
~~~~~~~~~~

Нет

Returns
~~~~~~~

Логическое значение, определяющее, свернута ли панель.
Значение ``false`` говорит о том, что панель развернута (значение по
  умолчанию),
значение ``true`` - свернута.

Examples
--------

.. code:: js

    var isCollapsed = panel.getCollapsed();

See Also
--------

-  `setCollapsed() <Panel.setCollapsed.html>`__
-  `getCollapsible() <Panel.getCollapsible.html>`__
-  `setCollapsible() <Panel.setCollapsible.html>`__
