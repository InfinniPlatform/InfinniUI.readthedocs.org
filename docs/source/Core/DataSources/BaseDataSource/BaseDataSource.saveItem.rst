BaseDataSource.saveItem()
=========================

Сохраняет элемент в источнике данных.

Description
-----------

Вызов метода `saveItem() <BaseDataSource.saveItem.html>`__ производит
сохранение всех изменений указанного элемента в соответствующем
источнику данных хранилище. Сохранение производится только в том случае,
если указанный элемент `не содержит
ошибок <BaseDataSource.validateOnErrors.html>`__. Успешное сохранение
элемента приводит к возникновению события
`onItemSaved <BaseDataSource.onItemSaved.html>`__.

Syntax
------

.. code:: js

    BaseDataSource.saveItem(item, success, error)

Parameters
~~~~~~~~~~

.. list-table::
   :header-rows: 1

   * - Name
     - Description
   * - item\*
     - Элемент источника данных
   * - success
     - `Обработчик события <../../Script.html>`__ о том, что элемент сохранен. Параметр ``args`` данного обработчика содержит поля: source - ссылка на `источник данных <...html>`__, value - сохраненный элемент, result - информация о сохранении
   * - error
     - `Обработчик события <../../Script/>`__ о том, что при сохранении элемента произошла ошибка. Параметр args данного обработчика содержит поле value, хранящее сообщение об ошибке


\* Обязательный аргумент.

Returns
~~~~~~~

Метод ничего не возвращает.

Examples
--------

.. code:: js

    var items = BaseDataSource.getItems();
    BaseDataSource.saveItem(items[0]);

See Also
--------

-  `onItemSaved <BaseDataSource.onItemSaved.html>`__
-  `createItem() <BaseDataSource.createItem.html>`__
-  `deleteItem() <BaseDataSource.deleteItem.html>`__
-  `validateOnErrors() <BaseDataSource.validateOnErrors.html>`__
