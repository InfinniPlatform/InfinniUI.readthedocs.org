Panel.getCollapsible()
======================

Возвращает значение, определяющее, разрешено ли сворачивание панели.

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

    panel.getCollapsible()

Parameters
~~~~~~~~~~

Нет

Returns
~~~~~~~

Логическое значение, определяющее, разрешено ли сворачивание панели.
Значение ``false`` говорит о том, что сворачивание запрещено (значение
  по умолчанию),
значение ``true`` - сворачивание разрешено.

Examples
--------

.. code:: js

    var isCollapsible = panel.getCollapsible();

See Also
--------

-  `setCollapsible() <Panel.setCollapsible.html>`__
-  `getCollapsed() <Panel.getCollapsed.html>`__
-  `setCollapsed() <Panel.setCollapsed.html>`__
