DataProvider.deleteItem()
=========================

Удаляет элемент.

Syntax
------

.. code:: js

    DataProvider.deleteItem(item, success, error)

Parameters
~~~~~~~~~~

.. list-table::
   :header-rows: 1

   * - Name
     - Description
   * - item\*
     - Элемент источника данных
   * - success
     - Обработчик события о том, что элемент удален
   * - error
     - Обработчик события о том, что при удалении элемента произошла ошибка


\* Обязательный аргумент.

Returns
~~~~~~~

Метод ничего не возвращает.

Examples
--------

.. code:: js

    DataProvider.getItems(
        function (items) {
            DataProvider.deleteItem(items[0]);
        });
