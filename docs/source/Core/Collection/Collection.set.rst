Collection.set
==============

Обновляет список элементов коллекции.

Description
-----------

Метод `set() <Collection.set.html>`__ осуществляет интеллектуальное
обновление списка элементов коллекции на основе заданного массива.
Элементы, которые не содержатся в коллекции, но не содержатся в заданном
массиве, будут добавлены. Элементы, которые содержатся и в коллекции и в
заданном массиве, будут заменены на соответствующие элементы из массива.
Элементы, которые содержатся в коллекции, но не содержатся в заданном
массиве, будут удалены.

Успешное выполнение данного метода приводит к возникновению события
`onReset <Collection.onReset.html>`__. Вместе с этим событием также
генерируется событие `onChange <Collection.onChange.html>`__, которое
информирует о наличии любых изменений. Аргументы обеих событий в данном
случае будут идентичны.

Syntax
------

.. code:: js

    Collection.set(newItems)

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

    var collection = new Collection([
      { key: 1, value: 'Apple' },
      { key: 2, value: 'Banana' },
      { key: 3, value: 'Pineapple' },
    ], 'key');

    collection.forEach(function(item) {
      console.log(item.value);
    });

    // Output:
    // Apple
    // Banana
    // Pineapple

    collection.set([
      { key: 1, value: 'Apple' },
      { key: 2, value: 'Melon' }
    ]);

    collection.forEach(function(item) {
      console.log(item.value);
    });

    // Output:
    // Apple
    // Melon

See Also
--------

-  `reset() <Collection.reset.html>`__
-  `idProperty <Collection.idProperty.html>`__
-  `onReset <Collection.onReset.html>`__
-  `onChange <Collection.onChange.html>`__
