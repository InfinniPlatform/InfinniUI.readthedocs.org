GlobalContext
=============

Глобальный контекст приложения. Контекст предоставляет доступ (API) к
совместно используемым методам и свойствам приложения.

Глобальный контекст приложения доступен через ``InfinniUI.global``.

Properties
----------

.. list-table::
   :header-rows: 1

   * - Name
     - Type
     - Description
   * - ``containers``
     - ``Object``
     - Список доступных контейнеров для открытия представлений в режиме ``OpenMode="Container"``.
   * - ``localizations``
     - ``Object``
     - Ассоциативный массив, связвающий `локали <../Localizations/>`_ с их названиями.
   * - ``localized``
     - `Localization <../Localizations/>`__
     - Текущие языковые и региональные настройки. В нем хранится значение InfinniUI.global.localizations соответсвующее InfinniUI.config.lang.
   * - ``factory``
     - `ApplicationBuilder <../Builders/>`__
     - Общий `билдер <../Builders/>`__ приложения.
   * - ``logger``
     - `Logger <../Logger/>`__
     - `Сервис регистрации сообщений <../Logger/>`__.
   * - ``messageBus``
     - `MessageBus <../MessageBus/>`__
     - `Шина сообщений <../MessageBus/>`__ приложения.
   * - ``session``
     - `Session <../Session/>`__
     - Провайдер для работы `сессией пользователя <../Session/>`__.
   * - ``notificationSubsription``
     - `NotificationSubscriptions <../NotificationSubscriptions/>`__
     - Сервис, позволяющий подписаться на уведомления от сервера.


Methods
-------

.. list-table::
   :header-rows: 1

   * - Name
     - Description
   * - `executeAction <GlobalContext.executeAction.html>`__
     - Запускает выполнение указанного `действия <../Actions/>`__.



.. toctree::
   :hidden:

   GlobalContext.executeAction.rst
