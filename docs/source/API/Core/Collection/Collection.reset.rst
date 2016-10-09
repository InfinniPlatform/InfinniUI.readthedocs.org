Collection.reset
================

Устанавливает список элементов коллекции.

Description
-----------

Метод `reset() <../Collection.reset.html>`__ заменяет элементы коллекции
новым набором элементов. Успешное выполнение данного метода приводит к
возникновению события `onReset <../Collection.onReset.html>`__. Вместе с
этим событием также генерируется событие
`onChange <../Collection.onChange.html>`__, которое информирует о наличии
любых изменений. Аргументы обеих событий в данном случае будут
идентичны.

Syntax
------

.. code:: js

    Collection.reset(newItems)

Parameters
~~~~~~~~~~

.. list-table::
   :header-rows: 1

   * - Name
     - Type
     - Description
   * - ``newItems``
     - ``Array``
     - Массив новых элементов коллекции.


Returns
~~~~~~~

Возвращает ``true``, если коллекция была изменена, иначе - ``false``.

Examples
--------

.. code:: js

    var collection = new Collection();
    collection.reset([ 'A', 'B' ]); // [ 'A', 'B' ]
    collection.reset([ 'C', 'D' ]); // [ 'C', 'D' ]

See Also
--------

-  `set() <../Collection.set.html>`__
-  `onReset <../Collection.onReset.html>`__
-  `onChange <../Collection.onChange.html>`__
