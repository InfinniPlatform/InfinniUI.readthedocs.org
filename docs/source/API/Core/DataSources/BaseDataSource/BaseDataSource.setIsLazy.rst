BaseDataSource.setIsLazy()
==========================

Устанавливает значение, является ли прогрузка данных в источнике
"ленивой" или нет.

Description
-----------

Если источник ленивый, то данные не будут загружаться автоматически.
  Инициировать запрос за данными можно либо создав соответсвующий
  `DataBinding <../../../DataBinding>`__, либо с помощью вызова
  `updateItems <../BaseDataSource.updateItems.html>`__.
По умолчанию источник данных является ленивым.

Syntax
------

.. code:: js

    BaseDataSource.setIsLazy(value)

Parameters
~~~~~~~~~~

.. list-table::
   :header-rows: 1

   * - Name
     - Description
   * - value
     - Логическое значение, определяющее, является ли прогрузка данных в источнике "ленивой" или нет


Returns
~~~~~~~

Метод ничего не возвращает.

Examples
--------

.. code:: js

    BaseDataSource.setIsLazy(false);

See Also
--------

-  `isLazy() <../BaseDataSource.isLazy.html>`__
