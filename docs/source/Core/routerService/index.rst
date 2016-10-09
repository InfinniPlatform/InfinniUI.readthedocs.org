RouterService
=============

RouterService позволяет настроить маршрутизацию для Single Page
Application

Description
-----------

RouterService предоставляет возможность настройки маршрутизации на
стороне клиента, а также связывания этих действий с событиями. Для
браузеров, которые не поддерживают History API, RouterService проделает
то же самое, используя фрагментарную структуру URL.

Во время загрузки страницы, после того, как ваше приложение откроет
HomePage view и будут созданы все роуты описанные в
`InfinniUI.config.Routes <../InfinniUI/InfinniUI.config>`__,
автоматически будет запущен роутер используя настройки History API из
`InfinniUI.config.HistoryAPI <../InfinniUI/InfinniUI.config>`__.
RouterService представляет собой обертку над Backbone.Router.

Parameters
~~~~~~~~~~

Нет.

Methods
-------

.. list-table::
   :header-rows: 1

   * - Name
     - Description
   * - `getLinkByName() <RouterService.getLinkByName.html>`__
     - Возвращает путь соответсвующий переданому имени
   * - `startRouter() <RouterService.startRouter.html>`__
     - Запускает роутинг

