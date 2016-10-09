Collection.take
===============

Возвращает указанный диапазон элементов коллекции.

Syntax
------

.. code:: js

    Collection.take(fromIndex, count)

Parameters
~~~~~~~~~~

.. list-table::
   :header-rows: 1

   * - Name
     - Type
     - Description
   * - ``fromIndex``\*
     - ``Integer``
     - Индекс начала диапазона элементов, которые необходимо выбрать из коллекции.
   * - ``count``
     - ``Integer``
     - Количество выбираемых элементов. Если количество элементов не определено, из коллекции будут выбраны все элементы, начиная с позиции, указанной в параметре ``fromIndex``.


\* Обязательный аргумент.

Returns
~~~~~~~

Массив элементов коллекции из указанного диапазона.

Examples
--------

.. code:: js

    var collection = new Collection([ 'A', 'B', 'C', 'D' ]);
    collection.take(1, 2); // [ 'B', 'C' ]
    collection.take(2);    // [ 'C', 'D' ]

See Also
--------

-  `forEach() <../Collection.forEach.html>`__
-  `take() <../Collection.take.html>`__
-  `toArray() <../Collection.toArray.html>`__
