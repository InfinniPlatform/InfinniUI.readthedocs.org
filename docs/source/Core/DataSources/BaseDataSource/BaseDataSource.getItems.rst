BaseDataSource.getItems()
=========================

Возвращает список элементов источника данных.

Description
-----------

Вызов метода `getItems() <BaseDataSource.getItems.html>`__ возвращает
список элементов источника данных, который был загружен ранее. Список
элементов содержит актуальное состояние источника данных, включая все
изменения, которые производились над элементами.

Syntax
------

.. code:: js

    BaseDataSource.getItems()

Parameters
~~~~~~~~~~

Нет

Returns
~~~~~~~

Массив элементов источника данных.

Examples
--------

.. code:: js

    var items = BaseDataSource.getItems();

See Also
--------

-  `updateItems() <BaseDataSource.updateItems.html>`__
