RouterService.setParams
=======================

Устанавливает параметры, который будут передаваться в скрипты,
вызываемые RouterService.

Syntax
------

.. code:: js

    RouterService.setParams(params)

Parameters
~~~~~~~~~~

.. list-table::
   :header-rows: 1

   * - Name
     - Type
     - Description
   * - params
     - ``Object``
     - Параметры, которые будут передаваться в скрипты, вызываемые RouterService.


Returns
~~~~~~~

Метод ничего не возвращает.

Examples
--------

.. code:: js

    var param = {
        user: {
            id: 1,
            name: 'Иванов Иван Иванович'
        }
    };
    RouterService.setParams( param );

See Also
--------

-  `addParams <./RouterService.addParams.html>`__
-  `setContext <./RouterService.setContext.html>`__
