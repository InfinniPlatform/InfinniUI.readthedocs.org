Session.unlinkExternalLogin
===========================

Удаляет у текущего пользователя имя входа у внешнего провайдера.

Syntax
------

.. code:: js

    Session.unlinkExternalLogin(provider, providerKey[, resultCallback[, errorCallback]]);

Parameters
~~~~~~~~~~

.. list-table::
   :header-rows: 1

   * - Name
     - Type
     - Description
   * - ``provider``
     - ``String``
     - Название провайдера.
   * - ``providerKey``
     - ``String``
     - Ключ провайдера.
   * - ``successCallback``
     - ``Function``
     - Обработчик результата выполнения операции.
   * - ``errorCallback``
     - ``Function``
     - Обработчик ошибки выполнения операции.


Returns
-------

Нет

Examples
--------

.. code:: js

    session.unlinkExternalLogin(provider, providerKey, function (result) {
        updateUser()    
    });
