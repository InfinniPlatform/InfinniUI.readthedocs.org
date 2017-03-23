ValidationResult.error()
==================================

Добавление информации об ошибке

Description
-----------

Добавлет элемент с информацией об ошибке в массив ``Items`` и устанавливает значение IsValid в false.

Syntax
------

.. code:: js

    ValidationResult.error(message, pathToProperty)

Parameters
~~~~~~~~~~

.. list-table::
   :header-rows: 1

   * - Name
     - Type
     - Description
   * - message
     - ``String``
     - Сообщение об ошибке
   * - pathToProperty
     - ``String``
     - Путь до property


Returns
~~~~~~~

Метод ничего не возвращает

Examples
--------

.. code:: js

    var validationResult = new window.InfinniUI.ValidationResult();
    validationResult.error('some mesage', 'path to property');

See Also
--------

-  `getErrorValidator() <BaseDataSource.getErrorValidator.html>`__
-  `getValidationResult() <BaseDataSource.getValidationResult.html>`__
-  `saveItem() <BaseDataSource.saveItem.html>`__
-  `ValidationResult <ValidationResult.html>`__
