RouterService.addParams
=======================

Добавляет параметры, которые нужно передавать в скрипты, вызываемые
RouterService.

Syntax
------

.. code:: js

    RouterService.addParams(params)

Parameters
~~~~~~~~~~

.. list-table::
   :header-rows: 1

   * - Name
     - Type
     - Description
   * - params
     - ``Object``
     - Параметры, которые нужно передавать в скрипты, вызываемые RouterService.


Returns
~~~~~~~

Метод ничего не возвращает.

Examples
--------

.. code:: js

    var param = {
        userRole: 'admin'
    };
    RouterService.addParams( param );

See Also
--------

-  `setParams <./RouterService.setParams.html>`__
-  `setContext <./RouterService.setContext.html>`__
