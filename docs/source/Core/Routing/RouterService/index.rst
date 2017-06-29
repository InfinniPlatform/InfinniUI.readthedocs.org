RouterService
=============

RouterService позволяет настроить маршрутизацию для Single Page Application

Объект доступен через ``InfinniUI.RouterService``.

Description
-----------

RouterService предоставляет возможность настройки маршрутизации на
стороне клиента, а также связывания этих действий с событиями. Для
браузеров, которые не поддерживают History API, RouterService проделает
то же самое, используя фрагментарную структуру URL.

Во время загрузки страницы, после того, как ваше приложение откроет
HomePage view и будут созданы все роуты описанные в
`InfinniUI.config.routes <../../Config/>`_,
автоматически будет запущен роутер используя настройки History API из
`InfinniUI.config.historyAPI <../../Config/>`_.
RouterService представляет собой обертку над `Backbone.Router <http://backbonejs.org/#Router>`_.

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
   * - `setContext() <RouterService.setContext.html>`__
     - Устанавливает контекст, передающийся в скрипты роутинга
   * - `setParams() <RouterService.setParams.html>`__
     - Устанавливает параметры, передающиеся в скрипты роутинга
   * - `addParams() <RouterService.addParams.html>`__
     - Добавляет параметры, передаваемые в скрипты роутинга


.. toctree::
   :hidden:

   RouterService.getLinkByName.rst
   RouterService.startRouter.rst
   RouterService.setContext.rst
   RouterService.setParams.rst
   RouterService.addParams.rst
