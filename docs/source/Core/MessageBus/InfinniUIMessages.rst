MessageBus.InfinniUIMessages
============================

Для работы с платформенными сообщениями используется
InfinniUI.global.messageBus.

MessageTypes
------------

.. list-table::
   :header-rows: 1

   * - Name
     - Description
     - messageBody
   * - onViewBuildError
     - Ошибка при создании `view <../Elements/View/>`__
     - {error: ``string``, metadata: {`путь до метаданных <../Elements/View/LinkView/LinkView.metadata/AutoView/>`__}}
   * - onViewCreated
     - Создана `view <../Elements/View/>`__
     - {openMode: `openMode <../Elements/View/LinkView/OpenMode/>`__, view: `view <../Elements/View/>`__}
   * - onNotifyUser
     - Оповещение пользователя
     - {messageText: ``string``, messageType: ``string``}
   * - onDataLoading
     - Отправлен запрос
     - –
   * - onDataLoaded
     - Полечен результат запроса
     - {success: ``boolean``}


Examples
--------

.. code:: js

    InfinniUI.global.messageBus.subscribe('onViewCreated', function (context, args) {
        var view = args.value.view;
        alert('Open ' + view.getName());
    });

See Also
--------

-  `send() <MessageBus.send.html>`__
-  `subscribe() <MessageBus.subscribe.html>`__
