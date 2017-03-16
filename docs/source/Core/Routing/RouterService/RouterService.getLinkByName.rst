RouterService.getLinkByName
===========================

Возвращает полный путь соответствующий переданому имени.

Syntax
------

.. code:: js

    RouterService.getLinkByName(RouteName)

Parameters
~~~~~~~~~~

.. list-table::
   :header-rows: 1

   * - Name
     - Type
     - Description
   * - RouteName
     - ``String``
     - Имя маршрута заданного в конфигурации.

Returns
~~~~~~~

Возвращает полный путь соответствующий переданому имени.

Examples
--------

.. code:: js

    RouterService.getLinkByName("HomePageRoute");

See Also
--------

-  `startRouter() <RouterService.startRouter.html>`__
