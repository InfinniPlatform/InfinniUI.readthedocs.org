Collection.replace
==================

Заменяет элемент коллекции на указанный.

Description
-----------

Метод `replace() <../Collection.replace.html>`__ заменяет элемент коллекции
на указанный. При этом новый элемент помещается в ту же позицию, в
которой находился существующий элемент. Успешное выполнение данного
метода приводит к возникновению события
`onReplace <../Collection.onReplace.html>`__. Вместе с этим событием также
генерируется событие `onChange <../Collection.onChange.html>`__, которое
информирует о наличии любых изменений. Аргументы обеих событий в данном
случае будут идентичны.

Syntax
------

.. code:: js

    Collection.replace(oldItem, newItem)

Parameters
~~~~~~~~~~

.. list-table::
   :header-rows: 1

   * - Name
     - Type
     - Description
   * - ``oldItem``
     - \*
     - Существующий элемент коллекции, который нужно заменить.
   * - ``newItem``
     - \*
     - Новый элемент коллекции, которым нужно заменить существующий.


Returns
~~~~~~~

Возвращает ``true``, если коллекция была изменена, иначе - ``false``.

Examples
--------

.. code:: js

    var collection = new Collection([ 'A', 'B', 'C' ]);
    collection.replace('C', 'D'); // [ 'A', 'B', 'D' ]

See Also
--------

-  `onReplace <../Collection.onReplace.html>`__
-  `onChange <../Collection.onChange.html>`__
