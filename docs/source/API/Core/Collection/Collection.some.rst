Collection.some
===============

Проверяет, что некоторый элемент коллекции удовлетворяет указанному
условию.

Syntax
------

.. code:: js

    Collection.some(predicate, thisArg)

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

Возвращает ``true``, если есть элемент, удовлетворяющий указанному
условию, иначе - ``false``.

Examples
--------

.. code:: js

    var isBigEnough = isBiggerThan10(item, index, collection) {
      return element > 10;
    };

    new Collection([ 2, 5, 8, 1, 4 ]).some(isBiggerThan10);  // false
    new Collection([ 12, 5, 8, 1, 4 ]).some(isBiggerThan10); // true

See Also
--------

-  `contains() <../Collection.contains.html>`__
-  `every() <../Collection.every.html>`__
