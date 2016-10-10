Panel.getHeader()
=================

Возвращает значение заголовка панели.

Syntax
------

.. code:: js

    panel.getHeader()

Parameters
~~~~~~~~~~

Нет

Returns
~~~~~~~

Заголовок панели. Если у панели не задан `шаблонизатор
  заголовка <Panel.setHeaderTemplate.html>`__, то в качестве заголовка
  будет использоваться текст, возвращаемый ``Panel.getHeader()``.
Если же шаблонизатор заголовка задан, то данное значение будет
  передаваться в шаблонизатор в качестве ``args.value``.

Examples
--------

.. code:: js

    var header = panel.getHeader();

See Also
--------

-  `setHeader() <Panel.setHeader.html>`__
-  `getHeaderTemplate() <Panel.getHeaderTemplate.html>`__
-  `setHeaderTemplate() <Panel.setHeaderTemplate.html>`__
