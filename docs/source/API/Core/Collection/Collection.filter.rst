Collection.filter
=================

Возвращает элементы коллекции, удовлетворяющие указанному условию.

Syntax
------

.. code:: js

    Collection.filter(predicate, thisArg)

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

Массив элементов коллекции, удовлетворяющих указанному условию.

Examples
--------

.. code:: js

    var isBigEnough = function(item, index, collection) {
      return element >= 10;
    };

    var collection = new Collection([ 12, 5, 8, 130, 44 ]);
    var filtered = collection.filter(isBigEnough); // [ 12, 130, 44 ]

See Also
--------

-  `forEach() <../Collection.forEach.html>`__
-  `take() <../Collection.take.html>`__
-  `toArray() <../Collection.toArray.html>`__
