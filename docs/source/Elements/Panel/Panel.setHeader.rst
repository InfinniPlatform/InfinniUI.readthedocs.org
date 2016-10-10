Panel.setHeader()
=================

Устанавливает заголовок панели.

Syntax
------

.. code:: js

    panel.setHeader(value)

Parameters
~~~~~~~~~~

.. list-table::
   :header-rows: 1

   * - Name
     - Description
   * - value
     - Заголовок панели. Если у панели не задан `шаблонизатор заголовка <Panel.setHeaderTemplate.html>`__, то в качестве заголовка будет использоваться текст, возвращаемый ``Panel.getHeader()``. Если же шаблонизатор заголовка задан, то данное значение будет передаваться в шаблонизатор в качестве ``args.value``.


Returns
~~~~~~~

Метод ничего не возвращает.

Examples
--------

.. code:: js

    panel.setHeader('Header text');

See Also
--------

-  `getHeader() <Panel.getHeader.html>`__
-  `getHeaderTemplate() <Panel.getHeaderTemplate.html>`__
-  `setHeaderTemplate() <Panel.setHeaderTemplate.html>`__
