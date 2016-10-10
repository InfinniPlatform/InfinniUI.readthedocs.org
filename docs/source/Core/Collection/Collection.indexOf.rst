Collection.indexOf
==================

Возвращает индекс первого найденного элемента коллекции при поиске с
начала.

Syntax
------

.. code:: js

    Collection.indexOf(item, fromIndex)

Parameters
~~~~~~~~~~

.. list-table::
   :header-rows: 1

   * - Name
     - Type
     - Default
     - Description
   * - ``item``\*
     - \*
     - –
     - Искомый элемент коллекции.
   * - ``fromIndex``
     - ``Integer``
     - 0
     - Индекс элемента, с которого необходимо начать поиск.


\* Обязательный аргумент.

Returns
~~~~~~~

Индекс первого найденного элемента коллекции или ``-1``, если элемент не
найден.

Examples
--------

.. code:: js

    var collection = new Collection([ 'A', 'B', 'C', 'A', 'B', 'C' ]);
    var index1 = collection.indexOf('C');    // index1 === 2
    var index2 = collection.indexOf('C', 3); // index2 === 5
    var index3 = collection.indexOf('D');    // index3 === -1

See Also
--------

-  `getById() <../Collection.getById.html>`__
-  `getByIndex() <../Collection.getByIndex.html>`__
-  `find() <../Collection.find.html>`__
-  `lastIndexOf() <../Collection.lastIndexOf.html>`__
-  `findIndex() <../Collection.findIndex.html>`__
