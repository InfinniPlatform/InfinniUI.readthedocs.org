BaseDataSource.onItemCreated
============================

Устанавливает `обработчик события <../../../Script/>`__ о том, что
элемент создан.

Description
-----------

Вызов метода `createItem() <../BaseDataSource.createItem.html>`__ приводит к
созданию нового элемента в источнике данных, однако этот элемент
создается только в оперативной памяти на стороне клиента, иначе говоря
не сохраняется на сервере до тех пор, пока явно не будет вызван метод
`saveItem() <../BaseDataSource.saveItem.html>`__. Успешное создание нового
нового элемента в источнике данных приводит к возникновению события
`onItemCreated <../BaseDataSource.onItemCreated.html>`__.

Syntax
------

.. code:: js

    BaseDataSource.onItemCreated(callback)

Parameters
~~~~~~~~~~

.. list-table::
   :header-rows: 1

   * - Name
     - Type
     - Description
   * - callback
     - `Script <../../../Script/>`__
     - Обработчик события о том, что элемент создан. Параметр ``args`` данного обработчика содержит поле value - созданный элемент


Examples
--------

.. code:: js

    BaseDataSource.onItemCreated(
      function(context, args) { alert('New item is created!'); }
    );

See Also
--------

-  `createItem() <../BaseDataSource.createItem.html>`__
-  `isModified() <../BaseDataSource.isModified.html>`__
-  `getFillCreatedItem() <../BaseDataSource.getFillCreatedItem.html>`__
-  `setFillCreatedItem() <../BaseDataSource.setFillCreatedItem.html>`__
