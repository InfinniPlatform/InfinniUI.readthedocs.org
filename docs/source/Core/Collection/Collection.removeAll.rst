Collection.removeAll
====================

Удаляет указанные элементы из коллекции.

Description
-----------

Метод `removeAll() <Collection.removeAll.html>`__ удаляет указанные
элементы из коллекции. Успешное выполнение данного метода приводит к
возникновению события `onRemove <Collection.onRemove.html>`__. Вместе с
этим событием также генерируется событие
`onChange <Collection.onChange.html>`__, которое информирует о наличии
любых изменений. Аргументы обеих событий в данном случае будут
идентичны.

Syntax
------

.. code:: js

    Collection.removeAll(items)

Parameters
~~~~~~~~~~

.. list-table::
   :header-rows: 1

   * - Name
     - Type
     - Description
   * - ``items``
     - ``Array``
     - Массив элементов, которые необходимо удалить из коллекции.


Returns
~~~~~~~

Возвращает ``true``, если коллекция была изменена, иначе - ``false``.

Examples
--------

.. code:: js

    var collection = new Collection([ 'A', 'B', 'C', 'D' ]);
    collection.removeAll([ 'A', 'C' ]); // [ 'B', 'D' ]
    collection.removeAll([ 'B', 'D' ]); // [ ]

See Also
--------

-  `pop() <Collection.pop.html>`__
-  `remove() <Collection.remove.html>`__
-  `removeById() <Collection.removeById.html>`__
-  `removeAt() <Collection.removeAt.html>`__
-  `removeRange() <Collection.removeRange.html>`__
-  `removeEvery() <Collection.removeEvery.html>`__
-  `clear() <Collection.clear.html>`__
-  `onRemove <Collection.onRemove.html>`__
-  `onChange <Collection.onChange.html>`__
