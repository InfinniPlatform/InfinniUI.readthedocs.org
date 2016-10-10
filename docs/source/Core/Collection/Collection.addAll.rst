Collection.addAll
=================

Добавляет элементы в конец коллекции.

Description
-----------

Метод `addAll() <Collection.addAll.html>`__ добавляет указанные элементы
в конец коллекции. Успешное выполнение данного метода приводит к
возникновению события `onAdd <Collection.onAdd.html>`__. Вместе с этим
событием также генерируется событие
`onChange <Collection.onChange.html>`__, которое информирует о наличии
любых изменений. Аргументы обеих событий в данном случае будут
идентичны.

Syntax
------

.. code:: js

    Collection.addAll(newItems)

Parameters
~~~~~~~~~~

.. list-table::
   :header-rows: 1

   * - Name
     - Type
     - Description
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
    collection.addAll([ 'A', 'B' ]); // [ 'A', 'B' ]
    collection.addAll([ 'C', 'D' ]); // [ 'A', 'B', 'C', 'D' ]

See Also
--------

-  `push() <Collection.push.html>`__
-  `add() <Collection.add.html>`__
-  `insert() <Collection.insert.html>`__
-  `insertAll() <Collection.insertAll.html>`__
-  `onAdd <Collection.onAdd.html>`__
-  `onChange <Collection.onChange.html>`__
