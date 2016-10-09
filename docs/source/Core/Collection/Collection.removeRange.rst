Collection.removeRange
======================

Удаляет диапазон элементов из коллекции.

Description
-----------

Метод `removeRange() <../Collection.removeRange.html>`__ удаляет диапазон
элементов из коллекции. Успешное выполнение данного метода приводит к
возникновению события `onRemove <../Collection.onRemove.html>`__. Вместе с
этим событием также генерируется событие
`onChange <../Collection.onChange.html>`__, которое информирует о наличии
любых изменений. Аргументы обеих событий в данном случае будут
идентичны.

Syntax
------

.. code:: js

    Collection.removeRange(fromIndex, count)

Parameters
~~~~~~~~~~

.. list-table::
   :header-rows: 1

   * - Name
     - Type
     - Description
   * - ``fromIndex``\*
     - ``Integer``
     - Индекс начала диапазона элементов, которые необходимо удалить из коллекции.
   * - ``count``
     - ``Integer``
     - Количество удаляемых элементов. Если количество элементов не определено, из коллекции будут удалены все элементы, начиная с позиции, указанной в параметре ``fromIndex``.


\* Обязательный аргумент.

Returns
~~~~~~~

Возвращает ``true``, если коллекция была изменена, иначе - ``false``.

Examples
--------

.. code:: js

    var collection = new Collection([ 'A', 'B', 'C', 'D' ]);
    collection.removeRange(1, 2); // [ 'A', 'D' ]
    collection.removeRange(0);    // [ ]

See Also
--------

-  `pop() <../Collection.pop.html>`__
-  `remove() <../Collection.remove.html>`__
-  `removeById() <../Collection.removeById.html>`__
-  `removeAt() <../Collection.removeAt.html>`__
-  `removeAll() <../Collection.removeAll.html>`__
-  `removeEvery() <../Collection.removeEvery.html>`__
-  `clear() <../Collection.clear.html>`__
-  `onRemove <../Collection.onRemove.html>`__
-  `onChange <../Collection.onChange.html>`__
