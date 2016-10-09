Collection.toArray
==================

Возвращает массив всех элементов коллекции.

Syntax
------

.. code:: js

    Collection.toArray()

Returns
~~~~~~~

Массив, содержащий все элементы коллекции в том же порядке, в котором
они были представлены на момент вызова данной функции. Массив хранит
ссылки на элементы соответствующей коллекции, но его модификация не
меняет внутреннее состояние коллекции также, как и модификация коллекции
не меняет состав массива.

Examples
--------

.. code:: js

    var collection = new Collection([ 'A', 'B', 'C' ]);
    var array = collection.toArray();

    collection.push('X');
    array.push('Y');

    collection.forEach(function(item) {
      console.log(item);
    });

    // Output:
    // A
    // B
    // C
    // X

    array.forEach(function(item) {
      console.log(item);
    });

    // Output:
    // A
    // B
    // C
    // Y

See Also
--------

-  `forEach() <../Collection.forEach.html>`__
-  `filter() <../Collection.filter.html>`__
-  `take() <../Collection.take.html>`__
-  `clone() <../Collection.clone.html>`__
