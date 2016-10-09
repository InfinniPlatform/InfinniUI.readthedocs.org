Collection.onReset
==================

Устанавливает `обработчик события <../../Script/>`__ о том, что
произошли существенные изменения.

Description
-----------

Выполнение некоторых операций может существенно изменять коллекцию. К
таким методам относятся `reset() <../Collection.reset.html>`__,
`set() <../Collection.set.html>`__ и `sort() <../Collection.sort.html>`__.
Успешное выполнение одного из этих методов приводит к возникновению
события `onReset <../Collection.onReset.html>`__. Вместе с этим событием
также генерируется событие `onChange <../Collection.onChange.html>`__,
которое информирует о наличии любых изменений. Аргументы обеих событий в
данном случае будут идентичны.

Syntax
------

.. code:: js

    Collection.onReset(callback)

Parameters
~~~~~~~~~~

.. list-table::
   :header-rows: 1

   * - Name
     - Type
     - Description
   * - ``callback``
     - `Script <../../Script/>`__
     - `Обработчик события <../../Script/>`__ о том, что в коллекции произошли существенные изменения. В параметре ``argument`` передается информация о произошедшем событии. Свойство ``argument.action`` содержит тип действия и в данном случае равно ``'reset'`` (сброс).


Examples
--------

.. code:: js

    var collection = new Collection();

    collection.onReset(function(context, argument) {
      alert('Collection is changed!');
    });

    collection.reset([ 'A', 'B', 'C' ]);

See Also
--------

-  `reset() <../Collection.reset.html>`__
-  `set() <../Collection.set.html>`__
-  `sort() <../Collection.sort.html>`__
-  `onChange <../Collection.onChange.html>`__
