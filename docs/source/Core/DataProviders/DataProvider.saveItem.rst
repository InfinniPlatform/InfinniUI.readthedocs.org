DataProvider.saveItem()
=======================

Сохраняет элемент.

Syntax
------

.. code:: js

    DataProvider.saveItem(item, success, error)

Parameters
~~~~~~~~~~

.. list-table::
   :header-rows: 1

   * - Name
     - Description
   * - item\*
     - Элемент источника данных
   * - success
     - Обработчик события о том, что элемент сохранен
   * - error
     - Обработчик события о том, что при сохранении элемента произошла ошибка


\* Обязательный аргумент.

Returns
~~~~~~~

Метод ничего не возвращает.

Examples
--------

.. code:: js

    var item = DataProvider.createLocalItem();
    DataProvider.saveItem(item);

See Also
--------

-  `createItem <DataProvider.createItem.html>`__
-  `createLocalItem <DataProvider.createLocalItem.html>`__
