Collection.getById
==================

Возвращает элемент коллекции с заданным идентификатором.

Syntax
------

.. code:: js

    Collection.getById(id)

Parameters
~~~~~~~~~~

.. list-table::
   :header-rows: 1

   * - Name
     - Type
     - Description
   * - ``id``
     - \*
     - Идентификатор элемента.


Returns
~~~~~~~

Элемент коллекции с заданным идентификатором.

Examples
--------

.. code:: js

    var collection = new Collection([
      { key: 1, value: 'A' },
      { key: 2, value: 'B' },
      { key: 3, value: 'C' }
    ], 'key');

    var item1 = collection.getById(1); // { key: 1, value: 'A' }
    var item2 = collection.getById(2); // { key: 2, value: 'B' }
    var item3 = collection.getById(3); // { key: 3, value: 'C' }

See Also
--------

-  `getByIndex() <Collection.getByIndex.html>`__
-  `find() <Collection.find.html>`__
-  `indexOf() <Collection.indexOf.html>`__
-  `lastIndexOf() <Collection.lastIndexOf.html>`__
-  `findIndex() <Collection.findIndex.html>`__
-  `idProperty <Collection.idProperty.html>`__
