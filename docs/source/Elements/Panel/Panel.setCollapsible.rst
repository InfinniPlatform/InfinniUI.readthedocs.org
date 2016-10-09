Panel.setCollapsible()
======================

Устанавливает значение, определяющее, разрешено ли сворачивание панели.

Description
-----------

Вызов метода `setCollapsible() <../Panel.setCollapsible.html>`__ управляет
возможностью сворачивания панели. Если сворачивание запрещено, панель
нельзя свернуть ни визуально, ни программно - с помощью метода
`setCollapsed() <../Panel.setCollapsed.html>`__. Если сворачивание было
запрещено в то время, как панель была свернута, панель разворачивается
автоматически.

Syntax
------

.. code:: js

    panel.setCollapsible(value)

Parameters
~~~~~~~~~~

.. list-table::
   :header-rows: 1

   * - Name
     - Type
     - Description
   * - value
     - ``Boolean``
     - Флаг, определяющий, разрешено ли сворачивание панели. Значение ``false`` говорит о том, что сворачивание запрещено, значение ``true`` - сворачивание разрешено.


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

-  `getCollapsible() <../Panel.getCollapsible.html>`__
-  `getCollapsed() <../Panel.getCollapsed.html>`__
-  `setCollapsed() <../Panel.setCollapsed.html>`__
