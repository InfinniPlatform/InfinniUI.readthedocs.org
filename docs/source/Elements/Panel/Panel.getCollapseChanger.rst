Panel.getCollapseChanger()
==========================

Возвращает имя элемента, при клике на который раскрывается панель.

Description
------------

Чтобы разрешить сворачивание панели воспользуйтесь методом `setCollapsible <Panel.setCollapsible.html>`_.    
По умолчанию панел сворачивается/разворачивается при клике на заголовок. 
C помощью метода `setCollapseChanger <Panel.setCollapseChanger.html>`_ можно установить элемент заголовка, клик на который будет регулировать состояние панели. 

Syntax
------

.. code:: js

    panel.getCollapseChanger()

Parameters
~~~~~~~~~~

Нет

Returns
~~~~~~~

Имя элемента при клике на который раскрывается панель.

Examples
--------

.. code:: js

    var collapseChangerName = panel.getCollapseChanger();

See Also
--------

-  `setCollapseChanger() <Panel.setCollapseChanger.html>`__
-  `getCollapsible() <Panel.getCollapsible.html>`__
-  `setCollapsible() <Panel.setCollapsible.html>`__
