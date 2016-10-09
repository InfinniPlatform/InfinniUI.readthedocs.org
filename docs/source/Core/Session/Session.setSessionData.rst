Session.setSessionData
======================

Устанавливает "утверждения" текущего пользователя.

Syntax
------

.. code:: js

    Session.setSessionData(claimType, claimValue[, resultCallback[, errorCallback]]);

Parameters
~~~~~~~~~~

.. list-table::
   :header-rows: 1

   * - Name
     - Type
     - Description
   * - ``claimType``
     - ``String``
     - Имя "утверждения".
   * - ``claimValue``
     - ``Function``
     - Значение "утверждения".
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

    session.setSessionData(TenantId, Code, function (result) {
        update();    
    });
