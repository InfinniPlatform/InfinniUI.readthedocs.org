BaseDataSource.onItemSaved
==========================

Устанавливает `обработчик события <../../Script/>`__ о том, что
элемент сохранен.

Description
-----------

Вызов метода `saveItem() <BaseDataSource.saveItem.html>`__ производит
сохранение всех изменений указанного элемента в соответствующем
источнику данных хранилище. Успешное сохранение элемента приводит к
возникновению события `onItemSaved <BaseDataSource.onItemSaved.html>`__.

Syntax
------

.. code:: js

    BaseDataSource.onItemSaved(callback)

Parameters
~~~~~~~~~~

.. list-table::
   :header-rows: 1

   * - Name
     - Type
     - Description
   * - callback
     - `Script <../../Script/>`__
     - Обработчик события о том, что элемент сохранен. Параметр ``args`` данного обработчика содержит поля: source - ссылка на `источник данных <./>`__, value - сохраненный элемент, result - информация о сохранении


Examples
--------

.. code:: js

    BaseDataSource.onItemSaved(
      function(context, args) { alert('Item is saved!'); }
    );

See Also
--------

-  `saveItem() <BaseDataSource.saveItem.html>`__
-  `isModified() <BaseDataSource.isModified.html>`__
