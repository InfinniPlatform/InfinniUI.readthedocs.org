Collection.push
===============

Добавляет элемент в конец коллекции.

Description
-----------

Метод `push() <Collection.push.html>`__ добавляет указанный элемент в
конец коллекции. Успешное выполнение данного метода приводит к
возникновению события `onAdd <Collection.onAdd.html>`__. Вместе с этим
событием также генерируется событие
`onChange <Collection.onChange.html>`__, которое информирует о наличии
любых изменений. Аргументы обеих событий в данном случае будут
идентичны.

Syntax
------

.. code:: js

    Collection.push(newItem)

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
    collection.push('A'); // [ 'A' ]
    collection.push('B'); // [ 'A', 'B' ]
    collection.push('C'); // [ 'A', 'B', 'C' ]

See Also
--------

-  `add() <Collection.add.html>`__
-  `addAll() <Collection.addAll.html>`__
-  `insert() <Collection.insert.html>`__
-  `insertAll() <Collection.insertAll.html>`__
-  `onAdd <Collection.onAdd.html>`__
-  `onChange <Collection.onChange.html>`__
