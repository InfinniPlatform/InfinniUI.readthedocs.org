Collection.remove
=================

Удаляет указанный элемент из коллекции.

Description
-----------

Метод `remove() <Collection.remove.html>`__ удаляет указанный элемент из
коллекции. Успешное выполнение данного метода приводит к возникновению
события `onRemove <Collection.onRemove.html>`__. Вместе с этим событием
также генерируется событие `onChange <Collection.onChange.html>`__,
которое информирует о наличии любых изменений. Аргументы обеих событий в
данном случае будут идентичны.

Syntax
------

.. code:: js

    Collection.remove(item)

Parameters
~~~~~~~~~~

.. list-table::
   :header-rows: 1

   * - Name
     - Type
     - Description
   * - ``item``
     - \*
     - Элемент, который необходимо удалить из коллекции.


Returns
~~~~~~~

Возвращает ``true``, если коллекция была изменена, иначе - ``false``.

Examples
--------

.. code:: js

    var collection = new Collection([ 'A', 'B', 'C' ]);
    collection.remove('B'); // [ 'A', 'C' ]
    collection.remove('A'); // [ 'C' ]
    collection.remove('C'); // [ ]

See Also
--------

-  `pop() <Collection.pop.html>`__
-  `removeById() <Collection.removeById.html>`__
-  `removeAt() <Collection.removeAt.html>`__
-  `removeAll() <Collection.removeAll.html>`__
-  `removeRange() <Collection.removeRange.html>`__
-  `removeEvery() <Collection.removeEvery.html>`__
-  `clear() <Collection.clear.html>`__
-  `onRemove <Collection.onRemove.html>`__
-  `onChange <Collection.onChange.html>`__
