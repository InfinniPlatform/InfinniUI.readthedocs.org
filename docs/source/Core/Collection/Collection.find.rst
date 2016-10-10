Collection.find
===============

Возвращает первый найденный элемент коллекции, удовлетворяющий условию.

Syntax
------

.. code:: js

    Collection.find(predicate, thisArg)

Parameters
~~~~~~~~~~

.. list-table::
   :header-rows: 1

   * - Name
     - Type
     - Description
   * - ``predicate``\*
     - ``Function``
     - Предикат, определяющий условие поиска элемента. Предикат принимает три параметра: ● ``item`` - проверяемый элемент коллекции, ● ``index`` - индекс проверяемого элемента коллекции, ● ``collection`` - обрабатываемая коллекция. Предикат возвращает ``true``, если проверяемый элемент удовлетворяет условию, иначе - ``false``.
   * - ``thisArg``
     - \*
     - Объект, используемый как контекст исполнения ``this`` предиката ``predicate``.


\* Обязательный аргумент.

Returns
~~~~~~~

Первый найденный элемент коллекции, удовлетворяющий указанному условию.

Examples
--------

.. code:: js

    var collection = new Collection([ 1, 3, 5, 6, 7, 9, 11, 12 ]);

    var result = collection.find(function(item, index, collection) {
      return item % 2 === 0;
    }); // result === 6

See Also
--------

-  `getById() <Collection.getById.html>`__
-  `getByIndex() <Collection.getByIndex.html>`__
-  `indexOf() <Collection.indexOf.html>`__
-  `lastIndexOf() <Collection.lastIndexOf.html>`__
-  `findIndex() <Collection.findIndex.html>`__
