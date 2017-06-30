.. |br| raw:: html

   <br />

DataProvider.createItem()
=========================

Создает новый элемент.

Description
-----------

Для создания нового элемента в DataProvider используются 2 метода:|br|
`createLocalItem <DataProvider.createLocalItem.html>`__ и ``createItem``. |br|
Существенное отличие методов в том, что 
`createLocalItem <DataProvider.createLocalItem.html>`__ создает новый 
элемент локально, в то время как при вызове ``createItem`` создание 
происходит на сервере. |br|
Для сохранения нового элемента используйте 
метод `saveItem <DataProvider.saveItem.html>`__.

Syntax
------

.. code:: js

    DataProvider.createItem(callback, idProperty)

Parameters
~~~~~~~~~~

.. list-table::
   :header-rows: 1

   * - Name
     - Description
   * - callback
     - Обработчик события о том, что элемент создан. Первым параметром получает новый элемент
   * - idProperty
     - Наименование свойства, хранящего идентификатор элемента


Returns
~~~~~~~

Метод ничего не возвращает.

Examples
--------

.. code:: js

    BaseDataSource.createItem(
      function(newItem) { alert('Id:' + newItem['_id']); },
      "_id"
    );

See Also
--------

-  `createLocalItem <DataProvider.createLocalItem.html>`__
-  `saveItem <DataProvider.saveItem.html>`__
