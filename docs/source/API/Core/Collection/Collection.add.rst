Collection.add
==============

Добавляет элемент в конец коллекции.

Description
-----------

Метод `add() <../Collection.add.html>`__ добавляет указанный элемент в конец
коллекции. Успешное выполнение данного метода приводит к возникновению
события `onAdd <../Collection.onAdd.html>`__. Вместе с этим событием также
генерируется событие `onChange <../Collection.onChange.html>`__, которое
информирует о наличии любых изменений. Аргументы обеих событий в данном
случае будут идентичны.

Syntax
------

.. code:: js

    Collection.add(newItem)

Parameters
~~~~~~~~~~

.. list-table::
   :header-rows: 1

   * - Name
     - Type
     - Description
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
    collection.add('A'); // [ 'A' ]
    collection.add('B'); // [ 'A', 'B' ]
    collection.add('C'); // [ 'A', 'B', 'C' ]

See Also
--------

-  `push() <../Collection.push.html>`__
-  `addAll() <../Collection.addAll.html>`__
-  `insert() <../Collection.insert.html>`__
-  `insertAll() <../Collection.insertAll.html>`__
-  `onAdd <../Collection.onAdd.html>`__
-  `onChange <../Collection.onChange.html>`__
