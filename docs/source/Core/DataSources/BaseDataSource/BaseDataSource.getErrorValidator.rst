BaseDataSource.getErrorValidator()
==================================

Возвращает `функцию <../../Script/>`__ проверки элемента на ошибки.

Description
-----------

`Функция <../../Script/>`__ проверки элемента на ошибки в параметре
``args`` принимает элемент источника данных, который необходимо
проверить. Результатом работы функции является объект `предопределенного
формата <ValidationResult.html>`__.

Syntax
------

.. code:: js

    BaseDataSource.getErrorValidator()

Parameters
~~~~~~~~~~

Нет

Returns
~~~~~~~

`Функция <../../Script/>`__ проверки элемента на ошибки.

Examples
--------

.. code:: js

    var errorValidator = BaseDataSource.getErrorValidator();

See Also
--------

-  `setErrorValidator() <BaseDataSource.setErrorValidator.html>`__
-  `getValidationResult() <BaseDataSource.getValidationResult.html>`__
-  `saveItem() <BaseDataSource.saveItem.html>`__
-  `ValidationResult <ValidationResult.html>`__
