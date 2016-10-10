Collection.removeAt
===================

Удаляет элемент с указанным индексом из коллекции.

Description
-----------

Метод `removeAt() <Collection.removeAt.html>`__ удаляет элемент с
указанным индексом из коллекции. Успешное выполнение данного метода
приводит к возникновению события `onRemove <Collection.onRemove.html>`__.
Вместе с этим событием также генерируется событие
`onChange <Collection.onChange.html>`__, которое информирует о наличии
любых изменений. Аргументы обеих событий в данном случае будут
идентичны.

Syntax
------

.. code:: js

    Collection.removeAt(index)

Parameters
~~~~~~~~~~

.. list-table::
   :header-rows: 1

   * - Name
     - Type
     - Description
   * - ``index``
     - ``Integer``
     - Индекс элемента, который необходимо удалить из коллекции.


Returns
~~~~~~~

Возвращает ``true``, если коллекция была изменена, иначе - ``false``.

Examples
--------

.. code:: js

    var collection = new Collection([ 'A', 'B', 'C' ]);
    collection.removeAt(1); // [ 'A', 'C' ]
    collection.removeAt(0); // [ 'C' ]
    collection.removeAt(0); // [ ]

See Also
--------

-  `pop() <Collection.pop.html>`__
-  `remove() <Collection.remove.html>`__
-  `removeById() <Collection.removeById.html>`__
-  `removeAll() <Collection.removeAll.html>`__
-  `removeRange() <Collection.removeRange.html>`__
-  `removeEvery() <Collection.removeEvery.html>`__
-  `clear() <Collection.clear.html>`__
-  `onRemove <Collection.onRemove.html>`__
-  `onChange <Collection.onChange.html>`__
