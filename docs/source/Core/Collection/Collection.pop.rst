Collection.pop
==============

Удаляет последний элемент из коллекции.

Description
-----------

Метод `pop() <Collection.pop.html>`__ удаляет последний элемент из
коллекции и возвращает его в качестве результата работы. Успешное
выполнение данного метода приводит к возникновению события
`onRemove <Collection.onRemove.html>`__. Вместе с этим событием также
генерируется событие `onChange <Collection.onChange.html>`__, которое
информирует о наличии любых изменений. Аргументы обеих событий в данном
случае будут идентичны.

Syntax
------

.. code:: js

    Collection.pop()

Returns
~~~~~~~

Возвращает последний элемент коллекции, который был удален.

Examples
--------

.. code:: js

    var collection = new Collection([ 'A', 'B', 'C' ]);
    var item2 = collection.pop(); // 'C'
    var item1 = collection.pop(); // 'B'
    var item0 = collection.pop(); // 'A'

See Also
--------

-  `remove() <Collection.remove.html>`__
-  `removeById() <Collection.removeById.html>`__
-  `removeAt() <Collection.removeAt.html>`__
-  `removeAll() <Collection.removeAll.html>`__
-  `removeRange() <Collection.removeRange.html>`__
-  `removeEvery() <Collection.removeEvery.html>`__
-  `clear() <Collection.clear.html>`__
-  `onRemove <Collection.onRemove.html>`__
-  `onChange <Collection.onChange.html>`__
