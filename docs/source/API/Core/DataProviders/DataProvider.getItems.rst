DataProvider.getItems()
=======================

Запрашивает список элементов.

Syntax
------

.. code:: js

    DataProvider.getItems(success, error)

Parameters
~~~~~~~~~~

.. list-table::
   :header-rows: 1

   * - Name
     - Description
   * - success
     - Обработчик события о том, что список элементов получен. Первым параметром получает список элементов
   * - error
     - Обработчик события о том, что получить список элементов не удалось


Returns
~~~~~~~

Метод ничего не возвращает.

Examples
--------

.. code:: js

    DataProvider.getItems(
        function (data) {
            console.log(data);
        }, 
        function () {
            console.log('error');
        });
