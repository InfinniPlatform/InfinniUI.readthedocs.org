Session.addClaim
================

Добавляет "утверждения" пользователя.

Syntax
------

.. code:: js

    Session.addClaim(userName, claimName, claimValue[, resultCallback[, errorCallback]]);

Parameters
~~~~~~~~~~

.. list-table::
   :header-rows: 1

   * - Name
     - Type
     - Description
   * - ``userName``
     - ``String``
     - Имя пользователя.
   * - ``claimName``
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

    session.addClaim(userName, TenantId, Code, function (result) {
        update();    
    });
