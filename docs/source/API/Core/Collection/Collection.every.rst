Collection.every
================

Проверяет, что каждый элемент коллекции удовлетворяет указанному
условию.

Syntax
------

.. code:: js

    Collection.every(predicate, thisArg)

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

Возвращает ``true``, если каждый элемент удовлетворяют указанному
условию, иначе - ``false``.

Examples
--------

.. code:: js

    var isBigEnough = function(item, index, collection) {
      return element >= 10;
    };

    new Collection([ 12, 5, 8, 130, 44 ]).every(isBigEnough);   // false
    new Collection([ 12, 54, 18, 130, 44 ]).every(isBigEnough); // true

See Also
--------

-  `contains() <../Collection.contains.html>`__
-  `some() <../Collection.some.html>`__
