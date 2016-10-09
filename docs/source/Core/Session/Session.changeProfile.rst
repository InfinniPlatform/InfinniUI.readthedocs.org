Session.changeProfile
=====================

Изменяет персональную информацию текущего пользователя.

Syntax
------

.. code:: js

    Session.changeProfile(displayName[, description[, resultCallback[, errorCallback]]]);

Parameters
~~~~~~~~~~

.. list-table::
   :header-rows: 1

   * - Name
     - Type
     - Description
   * - ``displayName``
     - ``String``
     - Отображаемое имя пользователя.
   * - ``description``
     - ``String``
     - Описание пользователя.
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

    session.changeProfile('user name');
