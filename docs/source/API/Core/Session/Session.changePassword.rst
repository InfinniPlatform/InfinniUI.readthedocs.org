Session.changePassword
======================

Изменяет пароль текущего пользователя.

Syntax
------

.. code:: js

    Session.changePassword(oldPassword, newPassword[, resultCallback[, errorCallback]]);

Parameters
~~~~~~~~~~

.. list-table::
   :header-rows: 1

   * - Name
     - Type
     - Description
   * - ``oldPassword``
     - ``String``
     - Старый пароль.
   * - ``newPassword``
     - ``String``
     -  Новый пароль.
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

    var onSuccess = function () {
        console.log('success');
    };

    var onError = function (err) {
        console.error(err);
    }

    session.changePassword('123', 'abc123', onSuccess, onError);
