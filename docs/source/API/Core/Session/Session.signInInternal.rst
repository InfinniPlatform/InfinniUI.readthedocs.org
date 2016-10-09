Session.signInInternal
======================

Изменяет активную роль текущего пользователя.

Syntax
------

.. code:: js

    Session.signInInternal(userName, password, remember[, resultCallback[, errorCallback]]);

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
   * - ``password``
     - ``String``
     - Пароль пользователя.
   * - ``remember``
     - ``Boolean``
     - Запомнить пользователя.
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

    session.signInInternal('user', '123', true);
