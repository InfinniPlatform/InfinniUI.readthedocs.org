Collection.onRemove
===================

Устанавливает `обработчик события <../Script/>`__ о том, что
произошло удаление элементов.

Description
-----------

Успешное выполнение методов `pop() <Collection.pop.html>`__,
`remove() <Collection.remove.html>`__,
`removeById() <Collection.removeById.html>`__,
`removeAt() <Collection.removeAt.html>`__,
`removeAll() <Collection.removeAll.html>`__,
`removeRange() <Collection.removeRange.html>`__,
`removeEvery() <Collection.removeEvery.html>`__ и
`clear() <Collection.clear.html>`__ приводит к возникновению события
`onRemove <Collection.onRemove.html>`__. Вместе с этим событием также
генерируется событие `onChange <Collection.onChange.html>`__, которое
информирует о наличии любых изменений. Аргументы обеих событий в данном
случае будут идентичны.

Syntax
------

.. code:: js

    Collection.onRemove(callback)

Parameters
~~~~~~~~~~

.. list-table::
   :header-rows: 1

   * - Name
     - Type
     - Description
   * - ``callback``
     - `Script <../Script/>`__
     - `Обработчик события <../Script/>`__ о том, что произошло удаление одного или нескольких элементов из коллекции. В параметре ``argument`` передается информация о произошедшем событии. Свойство ``argument.action`` содержит тип действия и в данном случае равно ``'remove'`` (удаление); ``argument.oldItems`` - массив элементов, которые были удалены; ``argument.oldStartingIndex`` - индекс, начиная с которого были удалены элементы (или ``-1``, если элементы удалялись не подряд).


Examples
--------

.. code:: js

    var collection = new Collection([ 'A' ]);

    collection.onRemove(function(context, argument) {
      alert('Some items are removed!');
    });

    collection.remove('A');

See Also
--------

-  `pop() <Collection.pop.html>`__
-  `remove() <Collection.remove.html>`__
-  `removeById() <Collection.removeById.html>`__
-  `removeAt() <Collection.removeAt.html>`__
-  `removeAll() <Collection.removeAll.html>`__
-  `removeRange() <Collection.removeRange.html>`__
-  `removeEvery() <Collection.removeEvery.html>`__
-  `clear() <Collection.clear.html>`__
-  `onChange <Collection.onChange.html>`__
