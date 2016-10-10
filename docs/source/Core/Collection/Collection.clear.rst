Collection.clear
================

Удаляет все элементы из коллекции.

Description
-----------

Метод `clear() <Collection.clear.html>`__ удаляет все элементы из
коллекции. Успешное выполнение данного метода приводит к возникновению
события `onRemove <Collection.onRemove.html>`__. Вместе с этим событием
также генерируется событие `onChange <Collection.onChange.html>`__,
которое информирует о наличии любых изменений. Аргументы обеих событий в
данном случае будут идентичны.

Syntax
------

.. code:: js

    Collection.clear()

Returns
~~~~~~~

Возвращает ``true``, если коллекция была изменена, иначе - ``false``.

Examples
--------

.. code:: js

    var collection = new Collection([ 'A', 'B', 'C' ]);
    collection.clear(); // [ ]

See Also
--------

-  `pop() <Collection.pop.html>`__
-  `remove() <Collection.remove.html>`__
-  `removeById() <Collection.removeById.html>`__
-  `removeAt() <Collection.removeAt.html>`__
-  `removeAll() <Collection.removeAll.html>`__
-  `removeRange() <Collection.removeRange.html>`__
-  `removeEvery() <Collection.removeEvery.html>`__
-  `onRemove <Collection.onRemove.html>`__
-  `onChange <Collection.onChange.html>`__
