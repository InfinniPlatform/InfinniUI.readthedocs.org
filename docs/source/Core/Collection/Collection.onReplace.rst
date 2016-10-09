Collection.onReplace
====================

Устанавливает `обработчик события <../../Script/>`__ о том, что
произошла замена элементов.

Description
-----------

Успешное выполнение метода `replace() <../Collection.replace.html>`__
приводит к возникновению события
`onReplace <../Collection.onReplace.html>`__. Вместе с этим событием также
генерируется событие `onChange <../Collection.onChange.html>`__, которое
информирует о наличии любых изменений. Аргументы обеих событий в данном
случае будут идентичны.

Syntax
------

.. code:: js

    Collection.onReplace(callback)

Parameters
~~~~~~~~~~

.. list-table::
   :header-rows: 1

   * - Name
     - Type
     - Description
   * - ``callback``
     - `Script <../../Script/>`__
     - `Обработчик события <../../Script/>`__ о том, что произошла замена одного или нескольких элементов в коллекции. В параметре ``argument`` передается информация о произошедшем событии. Свойство ``argument.action`` содержит тип действия и в данном случае равно ``'replace'`` (замена); ``argument.oldItems`` - массив старых элементов, которые были заменены; ``argument.newItems`` - массив новых элементов, которыми были заменены старые элементы.


Examples
--------

.. code:: js

    var collection = new Collection([ 'A' ]);

    collection.onReplace(function(context, argument) {
      alert('Some items are replaced!');
    });

    collection.replace('A', 'B');

See Also
--------

-  `replace() <../Collection.replace.html>`__
-  `onChange <../Collection.onChange.html>`__
