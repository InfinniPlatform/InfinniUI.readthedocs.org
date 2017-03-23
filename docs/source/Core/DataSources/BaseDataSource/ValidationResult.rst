ValidationResult
================

Результат проверки объекта.

Description
-----------

Результатом работы любой функции проверки элемента источника данных
должен быть объект указанного ниже формата. Свойство ``IsValid``
содержит логическое значение, указывающее на признак успешности
проверки. Если ``IsValid`` равен ``true``, считается, что объект прошел
проверку; если ``IsValid`` равен ``false`` - объект не прошел проверку.
В случае, если объект не прошел проверку, массив ``Items`` необходимо
заполнить результатами проверки объекта - информацией об ошибках.

Properties
----------

.. list-table::
   :header-rows: 1

   * - Name
     - Description
   * - IsValid
     - Признак успешности проверки
   * - Items
     - Список результатов проверки свойств объекта


Methods
-------

.. list-table::
   :header-rows: 1

   * - Name
     - Description
   * - `error <ValidationResult.error.html>`__
     - Добавлет элемент с информацией об ошибке в массив ``Items``  и устанавливает значение ``IsValid`` в false


Examples
--------

.. code:: json

    {
      IsValid: false,
      Items: [
        {
          Property: 'FirstName',
          Message: 'First name should contains Latin symbols only'
        }
      ]
    }

.. code:: js

    var validationResult = new window.InfinniUI.ValidationResult();
    if (!args.value.requiredProperty) {
        validationResult.error('error message', 'path of required property');
    }
    return validationResult;

See Also
--------

-  `error() <ValidationResult.error.html>`__
-  `getErrorValidator() <BaseDataSource.getErrorValidator.html>`__
-  `setErrorValidator() <BaseDataSource.setErrorValidator.html>`__
-  `getValidationResult() <BaseDataSource.getValidationResult.html>`__
