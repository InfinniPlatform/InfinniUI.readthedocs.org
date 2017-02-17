BaseDataSource.onErrorValidator
===============================

Устанавливает `обработчик события <../../Script/>`__ о том, что произошла ошибка валидации.

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
     - `Script <../../Script/>`__
     - Обработчик события о том, что проверка на ошибки завершена. Параметр args данного обработчика в поле value содержит результаты проверки в `предопределенном формате <ValidationResult.html>`__


Examples
--------

.. code:: js

    BaseDataSource.onErrorValidator(
      function(context, args) {
        alert('Validation result does not have any errors: ' + args.value.IsValid);
      }
    );

See Also
--------

-  `getValidationResult() <BaseDataSource.getValidationResult.html>`__
