Collection.insertAll
====================

Вставляет элементы, начиная с указанной позиции коллекции.

Description
-----------

Метод `insertAll() <Collection.insertAll.html>`__ добавляет указанные
элементы, начиная с заданной позиции. Успешное выполнение данного метода
приводит к возникновению события `onAdd <Collection.onAdd.html>`__.
Вместе с этим событием также генерируется событие
`onChange <Collection.onChange.html>`__, которое информирует о наличии
любых изменений. Аргументы обеих событий в данном случае будут
идентичны.

Syntax
------

.. code:: js

    Collection.insertAll(index, newItems)

Parameters
~~~~~~~~~~

.. list-table::
   :header-rows: 1

   * - Name
     - Type
     - Description
   * - ``index``
     - ``Integer``
     - Индекс первого вставляемого элемента.
   * - ``newItems``
     - ``Array``
     - Массив элементов, которые необходимо добавить в коллекцию.


Returns
~~~~~~~

Возвращает ``true``, если коллекция была изменена, иначе - ``false``.

Examples
--------

.. code:: js

    var collection = new Collection();
    collection.insertAll(0, [ 'A', 'B' ]); // [ 'A', 'B' ]
    collection.insertAll(0, [ 'C', 'D' ]); // [ 'C', 'D', 'A', 'B' ]

See Also
--------

-  `push() <Collection.push.html>`__
-  `add() <Collection.add.html>`__
-  `addAll() <Collection.addAll.html>`__
-  `insert() <Collection.insert.html>`__
-  `onAdd <Collection.onAdd.html>`__
-  `onChange <Collection.onChange.html>`__
