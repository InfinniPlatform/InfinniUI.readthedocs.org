Collection.sort
===============

Сортирует список элементов коллекции.

Description
-----------

Метод `sort() <Collection.sort.html>`__ сортирует список элементов
коллекции. Успешное выполнение данного метода приводит к возникновению
события `onReset <Collection.onReset.html>`__. Вместе с этим событием
также генерируется событие `onChange <Collection.onChange.html>`__,
которое информирует о наличии любых изменений. Аргументы обеих событий в
данном случае будут идентичны.

Syntax
------

.. code:: js

    Collection.sort(comparator)

Parameters
~~~~~~~~~~

.. list-table::
   :header-rows: 1

   * - Name
     - Type
     - Description
   * - ``comparator``
     - ``Function``
     - `Функция сравнения элементов коллекции <Comparator.html>`__. Если не указана, то используется функция `Collection.comparator <Collection.comparator.html>`__, которая была указана при создании коллекции.


Returns
~~~~~~~

Возвращает ``true``, если коллекция была изменена, иначе - ``false``.

Examples
--------

.. code:: js

    var collection = new Collection([ 3, 30, 2, 20, 1, 10 ]);
    collection.sort(function(a, b) { return a - b }); // [ 1, 2, 3, 10, 20, 30 ]

See Also
--------

-  `move() <Collection.sort.html>`__
-  `onReset <Collection.onReset.html>`__
-  `onChange <Collection.onChange.html>`__
