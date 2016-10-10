Collection.contains
===================

Проверяет наличие указанного элемента в коллекции.

Syntax
------

.. code:: js

    Collection.contains(item, fromIndex)

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

Возвращает ``true``, если указанный элемент содержится в коллекции,
иначе - ``false``.

Examples
--------

.. code:: js

    var collection = new Collection([ 'A', 'B', 'C' ]);
    collection.contains('A'); // true
    collection.contains('B'); // true
    collection.contains('C'); // true
    collection.contains('A', 1); // false
    collection.contains('B', 2); // false
    collection.contains('C', 3); // false

See Also
--------

-  `every() <Collection.every.html>`__
-  `some() <Collection.some.html>`__
