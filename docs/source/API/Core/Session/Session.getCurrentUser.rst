Session.getCurrentUser
======================

Возвращает информацию о текущем пользователе.

Syntax
------

.. code:: js

    Session.getCurrentUser(successCallback, errorCallback);

Parameters
~~~~~~~~~~

.. list-table::
   :header-rows: 1

   * - Name
     - Type
     - Description
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

    var onSuccess = function (user) {
        console.log('Current user: %s', JSON.stringify(user));
    };

    var name = Session.getCurrentUser(onSuccess);
