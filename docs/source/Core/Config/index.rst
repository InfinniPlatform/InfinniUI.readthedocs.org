Config
=======

Параметры конфигурации приложения.

Объект доступен через ``InfinniUI.config``.

Properties
----------

.. list-table::
   :header-rows: 1

   * - Name
     - Type
     - Default
     - Description
   * - ``serverUrl``
     - ``String``
     - 
     - Адрес сервера.
   * - ``configName``
     - ``String``
     - 
     - Название конфигурации.
   * - ``lang``
     - ``String``
     - ``en-US``
     - Текущая локаль.
   * - ``homePage``
     - ``String``
     - 
     - Путь для получения домашней страницы.
   * - ``enableAutoHeightService``
     - ``Boolean``
     - false
     - Флаг, определяющий запуск сервиса, регулирующего высоту элементов. Если сервис не запущен, `ScrollPanel </Elements/ScrollPanel/>`_ не прокручивается.
   * - ``enableGetCurrentUser``
     - ``Boolean``
     - false
     - Флаг, определяющий, нужно ли при загрузке страницы определять текущего пользователя.
   * - ``HistoryAPI``
     - ``Object``
     - 
     - Параметры History API для запуска роутинга. Принимает такие же параметры как и `Backbone.history.start() <http://backbonejs.org/#History-start>`_
   * - ``Routes``
     - ``Array``
     - 
     - `Массив объектов конфигурации роутинга приложения. <../Routing/Routes/>`__


Example
-------

.. code:: js

    window.InfinniUI.config.serverUrl = 'http://localhost:9900';
    window.InfinniUI.config.configName = 'Хабинет';
    window.InfinniUI.config.lang = 'en-US';
    window.InfinniUI.config.homePage = 'content/metadata/Views/common/homePage.json';
    window.InfinniUI.config.enableAutoHeightService = true;
    window.InfinniUI.config.enableGetCurrentUser = true;
    window.InfinniUI.config.HistoryAPI = {
      pushState: true
    };
    window.InfinniUI.config.Routes = [
      {
        Name: "HomePageRoute",
        Path: "/",
        Action: "{ routeCallback(context, args) }"
      },
      {
        Name: "UserPageRoute",
        Path: "/user/<% userId %>",
        Action: "{ routeCallback2(context, args) }"
      }
    ];

See Also
--------

-  `Routing <../Routing/>`__
-  `InfinniUI.localizations <../Localizations/>`__