BaseDataSource.onErrorValidator
===============================

Устанавливает `обработчик события <../../../Script/>`__ о том, что
проверка на ошибки завершена.

Description
-----------

Вызов метода
`validateOnErrors() <../BaseDataSource.validateOnErrors.html>`__ начинает
проверку указанного элемента или всех элементов источника данных на
наличие ошибок. Завершение проверки приводит к возникновению события
`onErrorValidator <../BaseDataSource.onErrorValidator.html>`__.

Syntax
------

.. code:: js

    BaseDataSource.onErrorValidator(callback)

Parameters
~~~~~~~~~~

.. list-table::
   :header-rows: 1

   * - Name
     - Type
     - Description
   * - callback
     - `Script <../../../Script/>`__
     - Обработчик события о том, что проверка на ошибки завершена. Параметр args данного обработчика в поле value содержит результаты проверки в `предопределенном формате <../ValidationResult/>`__


Examples
--------

.. code:: js

    BaseDataSource.onErrorValidator(
      function(context, args) {
        alert('Validation result does not have any errors: ' + args.value.isValid);
      }
    );

See Also
--------

-  `validateOnErrors() <../BaseDataSource.validateOnErrors.html>`__
