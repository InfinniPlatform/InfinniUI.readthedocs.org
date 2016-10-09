GlobalContext
=============

Глобальный контекст приложения. Контекст предоставляет доступ (API) к
совместно используемым методам и свойствам приложения.

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
   * - ``culture``
     - `Culture <../Culture/>`__
     - Языковые и региональные настройки.
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

