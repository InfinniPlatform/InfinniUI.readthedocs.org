ValidationResult
================

Результат проверки объекта.

Description
-----------

Результатом работы любой функции проверки элемента источника данных
должен быть объект указанного ниже формата. Свойство ``isValid``
содержит логическое значение, указывающее на признак успешности
проверки. Если ``isValid`` равен ``true``, считается, что объект прошел
проверку; если ``isValid`` равен ``false`` - объект не прошел проверку.
В случае, если объект не прошел проверку, массив ``items`` необходимо
заполнить результатами проверки объекта - информацией об ошибках.

Properties
----------

.. list-table::
   :header-rows: 1

   * - Name
     - Description
   * - isValid
     - Признак успешности проверки
   * - items
     - Список результатов проверки свойств объекта


Examples
--------

.. code:: js

    {
      isValid: false,
      items: [
        {
          property: 'FirstName',
          message: 'First name should contains Latin symbols only'
        }
      ]
    }

See Also
--------

-  `getErrorValidator() <BaseDataSource.getErrorValidator.html>`__
-  `setErrorValidator() <BaseDataSource.setErrorValidator.html>`__
-  `validateOnErrors() <BaseDataSource.validateOnErrors.html>`__
