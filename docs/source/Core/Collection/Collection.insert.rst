Collection.insert
=================

Вставляет элемент в указанную позицию коллекции.

Description
-----------

Метод `insert() <Collection.insert.html>`__ добавляет указанный элемент в
заданную позицию коллекции. Успешное выполнение данного метода приводит
к возникновению события `onAdd <Collection.onAdd.html>`__. Вместе с этим
событием также генерируется событие
`onChange <Collection.onChange.html>`__, которое информирует о наличии
любых изменений. Аргументы обеих событий в данном случае будут
идентичны.

Syntax
------

.. code:: js

    Collection.insert(index, newItem)

Parameters
~~~~~~~~~~

.. list-table::
   :header-rows: 1

   * - Name
     - Type
     - Description
   * - ``index``
     - ``Integer``
     - Индекс вставляемого элемента.
   * - ``newItem``
     - \*
     - Элемент, который необходимо добавить в коллекцию.


Returns
~~~~~~~

Возвращает ``true``, если коллекция была изменена, иначе - ``false``.

Examples
--------

.. code:: js

    var collection = new Collection();
    collection.insert(0, 'A'); // [ 'A' ]
    collection.insert(0, 'B'); // [ 'B', 'A' ]
    collection.insert(0, 'C'); // [ 'C', 'B', 'A' ]

See Also
--------

-  `push() <Collection.push.html>`__
-  `add() <Collection.add.html>`__
-  `addAll() <Collection.addAll.html>`__
-  `insertAll() <Collection.insertAll.html>`__
-  `onAdd <Collection.onAdd.html>`__
-  `onChange <Collection.onChange.html>`__
