BaseDataSource.setErrorValidator()
==================================

Устанавливает `функцию <../../../Script/>`__ проверки элемента на
ошибки.

Description
-----------

`Функция <../../../Script/>`__ проверки элемента на ошибки в параметре
``args`` принимает элемент источника данных, который необходимо
проверить. Результатом работы функции является объект `предопределенного
формата <../ValidationResult/>`__.

Syntax
------

.. code:: js

    BaseDataSource.setErrorValidator(value)

Parameters
~~~~~~~~~~

.. list-table::
   :header-rows: 1

   * - Name
     - Type
     - Description
   * - value
     - `Script <../../../Script/>`__
     - Функция проверки элемента на ошибки


Returns
~~~~~~~

Метод ничего не возвращает

Examples
--------

.. code:: js

    BaseDataSource.setErrorValidator(
      function(context, args) {
        if (/^[a-z]+$/i.test(args.FirstName)) {
          return {
            isValid: true
          };
        }
        else {
          return {
            isValid: false,
            items: [
              {
                property: 'FirstName',
                message: 'First name should contains Latin symbols only'
              }
            ]
          };
        }
      }
    );

See Also
--------

-  `getErrorValidator() <../BaseDataSource.getErrorValidator.html>`__
-  `getWarningValidator() <../BaseDataSource.getWarningValidator.html>`__
-  `setWarningValidator() <../BaseDataSource.setWarningValidator.html>`__
-  `validateOnErrors() <../BaseDataSource.validateOnErrors.html>`__
-  `saveItem() <../BaseDataSource.saveItem.html>`__
-  `ValidationResult <../ValidationResult/>`__
