BaseDataSource.validateOnErrors()
=================================

Осуществляет проверку на ошибки.

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

    BaseDataSource.validateOnErrors(item, callback)

Parameters
~~~~~~~~~~

.. list-table::
   :header-rows: 1

   * - Name
     - Type
     - Description
   * - item
   * - Элемент источника данных. Если указан, на наличие ошибок проверяется только указанный элемент; если не указан на наличие ошибок проверяются все элементы
   * - callback
     - `Script <../../../Script/>`__
     - Обработчик события о том, что проверка на ошибки завершена. Параметр args данного обработчика в поле value содержит результаты проверки в `предопределенном формате <../ValidationResult/>`__


Returns
~~~~~~~

`Результат <../ValidationResult/>`__ проверки на ошибки

Examples
--------

.. code:: js

    BaseDataSource.validateOnErrors(
      BaseDataSource.getSelectedItem(),
      function(context, args) {
        alert('Selected item does not have any errors: ' + args.value.isValid);
      }
    );

See Also
--------

-  `validateOnWarnings() <../BaseDataSource.validateOnWarnings.html>`__
-  `onErrorValidator <../BaseDataSource.onErrorValidator.html>`__
-  `getErrorValidator() <../BaseDataSource.getErrorValidator.html>`__
-  `setErrorValidator() <../BaseDataSource.setErrorValidator.html>`__
-  `saveItem() <../BaseDataSource.saveItem.html>`__
-  `ValidationResult <../ValidationResult/>`__
