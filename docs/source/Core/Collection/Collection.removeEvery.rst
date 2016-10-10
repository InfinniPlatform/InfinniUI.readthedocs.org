Collection.removeEvery
======================

Удаляет все элементы из коллекции, удовлетворяющие указанному условию.

Description
-----------

Метод `removeEvery() <Collection.removeEvery.html>`__ удаляет все
элементы из коллекции, удовлетворяющие указанному условию. Успешное
выполнение данного метода приводит к возникновению события
`onRemove <Collection.onRemove.html>`__. Вместе с этим событием также
генерируется событие `onChange <Collection.onChange.html>`__, которое
информирует о наличии любых изменений. Аргументы обеих событий в данном
случае будут идентичны.

Syntax
------

.. code:: js

    Collection.removeEvery(predicate, thisArg)

Parameters
~~~~~~~~~~

.. list-table::
   :header-rows: 1

   * - Name
     - Type
     - Description
   * - ``predicate``\*
     - ``Function``
   * - Предикат, определяющий условие удаление элемента. Предикат принимает три параметра: ● ``item`` - проверяемый элемент коллекции, ● ``index`` - индекс проверяемого элемента коллекции, ● ``collection`` - обрабатываемая коллекция. Предикат возвращает ``true``, если проверяемый элемент удовлетворяет условию, иначе - ``false``.
   * - ``thisArg``
     - \*
     - Объект, используемый как контекст исполнения ``this`` предиката ``predicate``.


\* Обязательный аргумент.

Returns
~~~~~~~

Возвращает ``true``, если коллекция была изменена, иначе - ``false``.

Examples
--------

.. code:: js

    var collection = new Collection([ 1, 10, 2, 20, 3, 30 ]);

    collection.removeEvery(function(item, index, collection) {
      return item >= 10;
    }); // [ 1, 2, 3 ]

See Also
--------

-  `pop() <Collection.pop.html>`__
-  `remove() <Collection.remove.html>`__
-  `removeById() <Collection.removeById.html>`__
-  `removeAt() <Collection.removeAt.html>`__
-  `removeAll() <Collection.removeAll.html>`__
-  `removeRange() <Collection.removeRange.html>`__
-  `clear() <Collection.clear.html>`__
-  `onRemove <Collection.onRemove.html>`__
-  `onChange <Collection.onChange.html>`__
