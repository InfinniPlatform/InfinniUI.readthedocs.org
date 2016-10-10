BaseDataSource.isLazy()
=======================

Возвращает значение, является ли прогрузка данных в источнике "ленивой"
или нет.

Description
-----------

Если источник ленивый, то данные не будут загружаться автоматически.
  Инициировать запрос за данными можно либо создав соответсвующий
  `DataBinding <../../DataBinding>`__, либо с помощью вызова
  `updateItems <BaseDataSource.updateItems.html>`__.
По умолчанию источник данных является ленивым.

Syntax
------

.. code:: js

    BaseDataSource.isLazy()

Parameters
~~~~~~~~~~

Нет

Returns
~~~~~~~

Возвращает ``true``, если прогрузка данных в источнике является
"ленивой", иначе возвращает ``false``.

Examples
--------

.. code:: js

    var isLazy = BaseDataSource.isLazy();

See Also
--------

-  `setIsLazy() <BaseDataSource.setIsLazy.html>`__
