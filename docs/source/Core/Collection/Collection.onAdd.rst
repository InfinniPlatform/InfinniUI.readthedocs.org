Collection.onAdd
================

Устанавливает `обработчик события <../../Script/>`__ о том, что
произошло добавление элементов.

Description
-----------

Успешное выполнение методов `push() <../Collection.push.html>`__,
`add() <../Collection.add.html>`__, `addAll() <../Collection.addAll.html>`__,
`insert() <../Collection.insert.html>`__ и
`insertAll() <../Collection.insertAll.html>`__ приводит к возникновению
события `onAdd <../Collection.onAdd.html>`__. Вместе с этим событием также
генерируется событие `onChange <../Collection.onChange.html>`__, которое
информирует о наличии любых изменений. Аргументы обеих событий в данном
случае будут идентичны.

Syntax
------

.. code:: js

    Collection.onAdd(callback)

Parameters
~~~~~~~~~~

.. list-table::
   :header-rows: 1

   * - Name
     - Type
     - Description
   * - ``callback``
     - `Script <../../Script/>`__
     - `Обработчик события <../../Script/>`__ о том, что произошло добавление одного или нескольких элементов в коллекцию. В параметре ``argument`` передается информация о произошедшем событии. Свойство ``argument.action`` содержит тип действия и в данном случае равно ``'add'`` (добавление); ``argument.newItems`` - массив добавленных элементов; ``argument.newStartingIndex`` - индекс, по которому были добавлены элементы (или ``-1``, если элементы были добавлены в конец коллекции).


Examples
--------

.. code:: js

    var collection = new Collection();

    collection.onAdd(function(context, argument) {
      alert('New items are added!');
    });

    collection.add('A');

See Also
--------

-  `push() <../Collection.push.html>`__
-  `add() <../Collection.add.html>`__
-  `addAll() <../Collection.addAll.html>`__
-  `insert() <../Collection.insert.html>`__
-  `insertAll() <../Collection.insertAll.html>`__
-  `onChange <../Collection.onChange.html>`__
