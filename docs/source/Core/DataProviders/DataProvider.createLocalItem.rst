.. |br| raw:: html

   <br />

DataProvider.createLocalItem()
==============================

Создает новый элемент.

Description
-----------

Для создания нового элемента в DataProvider используются 2 метода:|br|
``createLocalItem`` и `createItem <DataProvider.createItem.html>`__. |br|
Существенное отличие методов в том, что ``createLocalItem`` создает 
новый элемент локально, в то время как при вызове 
`createItem <DataProvider.createItem.html>`__ создание происходит на сервере. |br|
Для сохранения нового элемента используйте метод `saveItem <DataProvider.saveItem.html>`__.

Syntax
------

.. code:: js

    DataProvider.createLocalItem(idProperty)

Parameters
~~~~~~~~~~

.. list-table::
   :header-rows: 1

   * - Name
     - Description
   * - idProperty
     - Наименование свойства, хранящего идентификатор элемента


Returns
~~~~~~~

Новый элемент.

Examples
--------

.. code:: js

    var newItem = DataProvider.createLocalItem("_id");

See Also
--------

-  `createItem <DataProvider.createItem.html>`__
-  `saveItem <DataProvider.saveItem.html>`__
