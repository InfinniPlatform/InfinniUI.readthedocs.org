BaseDataSource.createItem()
===========================

Создает новый элемент в источнике данных.

Description
-----------

Вызов метода `createItem() <../BaseDataSource.createItem.html>`__ приводит к
созданию нового элемента в источнике данных, однако этот элемент
создается только в оперативной памяти на стороне клиента, иначе говоря
не сохраняется на сервере до тех пор, пока явно не будет вызван метод
`saveItem() <../BaseDataSource.saveItem.html>`__. При создании нового
элемента в источнике данных может происходить предзаполнение нового
элемента. Необходимость предзаполнения можно установить с помощью метода
`setFillCreatedItem() <../BaseDataSource.setFillCreatedItem.html>`__.
Успешное создание нового нового элемента в источнике данных приводит к
возникновению события
`onItemCreated <../BaseDataSource.onItemCreated.html>`__.

Syntax
------

.. code:: js

    BaseDataSource.createItem(success, error)

Parameters
~~~~~~~~~~

.. list-table::
   :header-rows: 1

   * - Name
     - Description
   * - success
     - `Обработчик события <../../../Script/>`__ о том, что элемент создан. Параметр args данного обработчика содержит поле value, в котором хранится ссылка на созданный элемент
   * - error
     - `Обработчик события <../../../Script/>`__ о том, что при создании элемента произошла ошибка


Returns
~~~~~~~

Метод ничего не возвращает.

Examples
--------

.. code:: js

    BaseDataSource.createItem(
      function(context, args) { alert('New item is created!'); }
    );

See Also
--------

-  `onItemCreated <../BaseDataSource.onItemCreated.html>`__
-  `saveItem() <../BaseDataSource.saveItem.html>`__
-  `deleteItem() <../BaseDataSource.deleteItem.html>`__
-  `getFillCreatedItem() <../BaseDataSource.getFillCreatedItem.html>`__
-  `setFillCreatedItem() <../BaseDataSource.setFillCreatedItem.html>`__
