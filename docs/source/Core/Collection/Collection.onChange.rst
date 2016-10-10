Collection.onChange
===================

Устанавливает `обработчик события <../Script/>`__ о том, что
произошли какие-то изменения.

Description
-----------

Любые операции над коллекцией, которые приводят к ее изменению
(добавление новых элементов, замена существующих элементов, удаление
существующих элементов, изменение порядка элементов), приводят к
возникновению события `onChange <Collection.onChange.html>`__.

Syntax
------

.. code:: js

    Collection.onChange(callback)

Parameters
~~~~~~~~~~

.. list-table::
   :header-rows: 1

   * - Name
     - Type
     - Description
   * - ``callback``
     - `Script <../Script/>`__
     - `Обработчик события <../Script/>`__ о том, что в коллекции произошли какие-то изменения. В параметре ``argument`` передается информация о произошедшем событии. Свойство ``argument.action`` содержит тип действия (``'add'``, ``'replace'``, ``'remove'``, ``'move'`` или ``'reset'``). Значение остальных возможных свойств (``argument.oldItems``, ``argument.newItems``, ``argument.oldStartingIndex`` и ``argument.newStartingIndex``) интерпретируются в зависимости от типа действия (см. описание обработчиков соответствующих событий).


Examples
--------

.. code:: js

    var collection = new Collection();

    collection.onChange(function(context, argument) {
      alert('Collection is changed!');
    });

    collection.add('A');
    collection.remove('A');

See Also
--------

-  `onAdd <Collection.onAdd.html>`__
-  `onReplace <Collection.onReplace.html>`__
-  `onRemove <Collection.onRemove.html>`__
-  `onMove <Collection.onMove.html>`__
-  `onReset <Collection.onReset.html>`__
