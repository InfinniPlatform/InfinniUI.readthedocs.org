Collection.removeById
=====================

Удаляет элемент с указанным идентификатором из коллекции.

Description
-----------

Метод `removeById() <Collection.removeById/>`__ удаляет элемент с
указанным идентификатором из коллекции. Успешное выполнение данного
метода приводит к возникновению события
`onRemove <Collection.onRemove/>`__. Вместе с этим событием также
генерируется событие `onChange <Collection.onChange/>`__, которое
информирует о наличии любых изменений. Аргументы обеих событий в данном
случае будут идентичны.

Syntax
------

.. code:: js

    Collection.removeById(id)

Parameters
~~~~~~~~~~

\|Name\|Type\|Description\| \|\ ``id``\ \|\*\|Идентификатор элемента,
который необходимо удалить из коллекции.

Returns
~~~~~~~

Возвращает ``true``, если коллекция была изменена, иначе - ``false``.

Examples
--------

.. code:: js

    var collection = new Collection([
      { key: 1, value: 'A' },
      { key: 2, value: 'B' },
      { key: 3, value: 'C' }
    ], 'key');

    collection.removeById(2);
    collection.removeById(1);
    collection.removeById(3);

See Also
--------

-  `pop() <Collection.pop/>`__
-  `remove() <Collection.remove/>`__
-  `removeAt() <Collection.removeAt/>`__
-  `removeAll() <Collection.removeAll/>`__
-  `removeRange() <Collection.removeRange/>`__
-  `removeEvery() <Collection.removeEvery/>`__
-  `clear() <Collection.clear/>`__
-  `idProperty <Collection.idProperty/>`__
-  `onRemove <Collection.onRemove/>`__
-  `onChange <Collection.onChange/>`__
