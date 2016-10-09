Collection.getProperty
======================

Возвращает значение атрибута для заданного элемента коллекции.

Syntax
------

.. code:: js

    collection.getProperty(index, propertyName);

Parameters
~~~~~~~~~~

.. list-table::
   :header-rows: 1

   * - Name
     - Type
     - Description
   * - ``index``
     - ``Integer``
     - Порядковый индекс элемента коллекции
   * - ``propertyName``
     - ``String``
     - Имя атрибута


Returns
~~~~~~~

Значение атрибута или ``undefined``.

Examples
--------

.. code:: js

    var collection = new Collection([3,2,1]);
    collection
        .setProperty(0, 'name', 'three')
        .setProperty(1, 'name', 'two')
        .setProperty(2, 'name', 'one');

    collection.sort();

    console.log(collection.toArray()); // Output:   [1, 2, 3]
    console.log(collection.getProperty(0, 'name')); // Output: 'one';
    console.log(collection.getProperty(1, 'name')); // Output: 'two';
    console.log(collection.getProperty(2, 'name')); // Output: 'three';

See Also
--------

-  `setProperty <../Collection.setProperty.html>`__
