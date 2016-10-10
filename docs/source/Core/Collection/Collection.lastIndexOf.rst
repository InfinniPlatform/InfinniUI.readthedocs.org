Collection.lastIndexOf
======================

Возвращает индекс первого найденного элемента коллекции при поиске с
конца.

Syntax
------

.. code:: js

    Collection.lastIndexOf(item, fromIndex)

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
     - ``Index``
     - Collection.length - 1
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
    var index1 = collection.lastIndexOf('C');    // index1 === 5
    var index2 = collection.lastIndexOf('C', 4); // index2 === 2
    var index3 = collection.lastIndexOf('D');    // index3 === -1

See Also
--------

-  `getById() <../Collection.getById.html>`__
-  `getByIndex() <../Collection.getByIndex.html>`__
-  `find() <../Collection.find.html>`__
-  `indexOf() <../Collection.indexOf.html>`__
-  `findIndex() <../Collection.findIndex.html>`__
