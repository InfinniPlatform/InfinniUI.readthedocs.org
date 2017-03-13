RouterService.setContext
========================

Устанавливает контекст, который будет передаваться в скрипты, вызываемые
RouterService.

Syntax
------

.. code:: js

    RouterService.setContext(context)

Parameters
~~~~~~~~~~

.. list-table::
   :header-rows: 1

   * - Name
     - Type
     - Description
   * - context
     - ``String``
     - Контекст, который будет передан в скрипты, вызываемые RouterService.


Returns
~~~~~~~

Метод ничего не возвращает.

Examples
--------

.. code:: js

    RouterService.setContext( view.getContext() );

See Also
--------

-  `setParams <./RouterService.setParams.html>`__
-  `addParams <./RouterService.addParams.html>`__
