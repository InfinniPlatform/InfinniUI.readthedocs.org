NotificationSubscriptions
=========================

Сервис, позволяющий подписаться на уведомления от сервера. Основу
NotificationSubscriptions составляет signalR - набор серверных и
клиентских библиотек, облегчающих двухстороннее взаимодействие реального
времени между сервером и клиентом.

Description
-----------

Обычно, при работе с вэб-страницей, запрос и передача данных
инициируется клиентом. Однако в некоторых случаях требуется
актуализировать данные на странице без задержек. Для возможности
оповещать клиентов об изменении данных используются так называемые
push-уведомления. Один из способов организовать такие уведомления
является библиотека SignalR. Сервис NotificationSubscriptions позволяет
подписываться на уведомления внешних сервисов, реализованных на SignalR.

Parameters
~~~~~~~~~~

Нет.

Methods
-------

.. list-table::
   :header-rows: 1

   * - Name
     - Description
   * - `subscribe <NotificationSubscriptions.subscribe.html>`__
     - Добавляет подписку на событие
   * - `unsubscribe <NotificationSubscriptions.unsubscribe.html>`__
     - Удаляет подписку на событие
   * - `startConnection <NotificationSubscriptions.startConnection.html>`__
     - Устанавливает соединение с сервером и добавляет слушателей по заданым ключам
   * - `stopConnection <NotificationSubscriptions.stopConnection.html>`__
     - Разрывает соединение с сервером
   * - `reconnection <NotificationSubscriptions.reconnection.html>`__
     - Повторно устанавливает соединение с сервером с ранее указанными параметрами
   * - `isDisconnected <NotificationSubscriptions.isDisconnected.html>`__
     - Проверяет, разорвано ли соединение с сервером
   * - `on <NotificationSubscriptions.on.html>`__
     - Выполняет подписку на события signalR

