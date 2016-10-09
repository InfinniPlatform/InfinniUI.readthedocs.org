Session.getSignInExternalForm
=============================

Возвращает форму входа пользователя в систему через внешний провайдер.

Syntax
------

.. code:: js

    Session.getSignInExternalForm(successUrl, failureUrl[, resultCallback[, errorCallback]]);

Parameters
~~~~~~~~~~

.. list-table::
   :header-rows: 1

   * - Name
     - Type
     - Description
   * - ``successUrl``
     - ``String``
     - URL для перехода в случае успешного выполнения операции.
   * - ``failureUrl``
     - ``String``
     - URL для перехода в случае ошибки выполнения операции.
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

    var successUrl = window.location.href + "&socialAuth=true";
    var failureUrl = window.location.href;
    var $form = $("#LoginForm");

    session.getSignInExternalForm(successUrl, failureUrl, function (result) {
        $form.empty();
        $form.append(result);    
    });
