Collection.move
===============

Перемещает элемент коллекции в позицию с указанным индексом.

Description
-----------

Метод `move() <../Collection.move.html>`__ перемещает элемент коллекции в
позицию с указанным индексом. Успешное выполнение данного метода
приводит к возникновению события `onMove <../Collection.onMove.html>`__.
Вместе с этим событием также генерируется событие
`onChange <../Collection.onChange.html>`__, которое информирует о наличии
любых изменений. Аргументы обеих событий в данном случае будут
идентичны.

Syntax
------

.. code:: js

    Collection.move(oldIndex, newIndex)

Parameters
~~~~~~~~~~

.. list-table::
   :header-rows: 1

   * - Name
     - Type
     - Description
   * - ``oldIndex``
     - ``Integer``
     - Индекс элемента, который необходимо переместить.
   * - ``newIndex``
     - ``Integer``
     - Индекс нового местоположения элемента.


Returns
~~~~~~~

Возвращает ``true``, если коллекция была изменена, иначе - ``false``.

Examples
--------

.. code:: js

    var collection = new Collection([ 'A', 'B', 'C' ]);
    collection.move(2, 0); // [ 'C', 'A', 'B' ]
    collection.move(2, 1); // [ 'C', 'B', 'A' ]

See Also
--------

-  `sort() <../Collection.sort.html>`__
-  `onMove <../Collection.onMove.html>`__
-  `onChange <../Collection.onChange.html>`__
