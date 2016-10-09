Session.changeActiveRole
========================

Изменяет активную роль текущего пользователя.

Syntax
------

.. code:: js

    Session.changeActiveRole(activeRole[, resultCallback[, errorCallback]]);

Parameters
~~~~~~~~~~

.. list-table::
   :header-rows: 1

   * - Name
     - Type
     - Description
   * - ``activeRole``
     - ``String``
     - Наименование роли.
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

    session.changeActiveRole('admin', onSuccess, onError);
