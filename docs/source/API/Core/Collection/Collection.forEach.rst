Collection.forEach
==================

Перечисляет все элементы коллекции.

Syntax
------

.. code:: js

    Collection.forEach(callback, thisArg)

Parameters
~~~~~~~~~~

.. list-table::
   :header-rows: 1

   * - Name
     - Type
     - Description
   * - ``predicate``\*
     - ``Function``
     - Функция для обработки очередного элемента коллекции. Функция принимает три параметра: ● ``item`` - очередной элемент коллекции, ● ``index`` - индекс очередного элемента коллекции, ● ``collection`` - обрабатываемая коллекция.
   * - ``thisArg``
     - \*
     - Объект, используемый как контекст исполнения ``this`` предиката ``predicate``.


\* Обязательный аргумент.

Examples
--------

.. code:: js

    var collection = new Collection([ 'A', 'B', 'C' ]);

    collection.forEach(function(item, index, collection) {
      console.log(item);
    });

    // Output:
    // A
    // B
    // C

See Also
--------

-  `filter() <../Collection.filter.html>`__
-  `take() <../Collection.take.html>`__
-  `toArray() <../Collection.toArray.html>`__
