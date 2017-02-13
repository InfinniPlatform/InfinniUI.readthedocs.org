BaseDataSource.getValidationResult()
=================================

Возвращает `результат <ValidationResult.html>`__ проверки на ошибки.

Syntax
------

.. code:: js

    BaseDataSource.getValidationResult([item])

Parameters
~~~~~~~~~~

.. list-table::
   :header-rows: 1

   * - Name
     - Type
     - Description
   * - item
     - –
     - Элемент источника данных. Если указан, на наличие ошибок проверяется только указанный элемент; если не указан на наличие ошибок проверяются все элементы


Returns
~~~~~~~

`Результат <ValidationResult.html>`__ проверки на ошибки

Examples
--------

.. code:: js

    var validationResult = BaseDataSource.getValidationResult(
                            BaseDataSource.getSelectedItem()
                          );

See Also
--------

-  `onErrorValidator <BaseDataSource.onErrorValidator.html>`__
-  `getErrorValidator() <BaseDataSource.getErrorValidator.html>`__
-  `setErrorValidator() <BaseDataSource.setErrorValidator.html>`__
-  `ValidationResult <ValidationResult.html>`__
