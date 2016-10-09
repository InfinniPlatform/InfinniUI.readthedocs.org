Collection.length
=================

Возвращает количество элементов в коллекции.

Syntax
------

.. code:: js

    Collection.length

Returns
~~~~~~~

Количество элементов в коллекции.

Examples
--------

.. code:: js

    var collection = new Collection(); // Collection.length === 0
    collection.add('A'); // Collection.length === 1
    collection.add('B'); // Collection.length === 2
    collection.add('C'); // Collection.length === 3

See Also
--------

-  `size() <../Collection.size.html>`__
