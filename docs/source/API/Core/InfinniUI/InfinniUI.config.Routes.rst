InfinniUI.config.Routes
=======================

Массив конфигураций маршрутов приложения. Каждый маршрут описывается
объектом с обязательными параметрами Name, Path, Action.

Syntax
------

.. code:: js

    window.InfinniUI.config.Routes = [
      {
        Name: routeName,
        Path: path,
        Action: action
      }
    ];

Properties
----------

.. list-table::
   :header-rows: 1

   * - Name
     - Type
     - Description
   * - ``routeName``
     - ``String``
     - Уникальное имя пути.
   * - ``path``
     - ``String``
     - Путь. Путь должен начинаться со слеша "/". Возможно содержание параметров.
   * - ``action``
     - ``Script``
     - Функция которая будет вызваны при переходе на указанный путь


Example
-------

.. code:: js

    window.InfinniUI.config.Routes = [
      {
        Name: "HomePageRoute",
        Path: "/",
        Action: "{ routeCallback(context, args) }"
      },
      {
        Name: "UserPageRoute",
        Path: "/user/<% userId %>/<% pageNumber %>?query1=<% query1 %>&query2=<% query2 %>",
        Action: "{ routeCallback2(context, args) }"
      }
    ];

See Also
--------

-  `InfinniUI.config <../InfinniUI.config>`__
