Collection.getByIndex
=====================

Возвращает элемент коллекции с заданным индексом.

Syntax
------

.. code:: js

    Collection.getByIndex(index)

Parameters
~~~~~~~~~~

.. list-table::
   :header-rows: 1

   * - Name
     - Type
     - Description
   * - ``index``
     - ``Integer``
     - Индекс элемента.


Returns
~~~~~~~

Элемент коллекции с заданным индексом.

Examples
--------

.. code:: js

    var collection = new Collection([ 'A', 'B', 'C' ]);
    var item0 = collection.getByIndex(0); // 'A'
    var item1 = collection.getByIndex(1); // 'B'
    var item2 = collection.getByIndex(2); // 'C'

See Also
--------

-  `getById() <../Collection.getById.html>`__
-  `find() <../Collection.find.html>`__
-  `indexOf() <../Collection.indexOf.html>`__
-  `lastIndexOf() <../Collection.lastIndexOf.html>`__
-  `findIndex() <../Collection.findIndex.html>`__
