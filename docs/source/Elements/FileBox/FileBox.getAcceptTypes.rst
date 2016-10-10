FileBox.getAcceptTypes
======================

Возвращает `коллекцию <../../Core/Collection/>`__ допустимых форматов
данных.

Syntax
------

.. code:: js

    FileBox.getAcceptTypes()

Parameters
~~~~~~~~~~

Нет

Returns
~~~~~~~

`Коллекция <../../Core/Collection/>`__ допустимых форматов данных.

Examples
--------

.. code:: js

    var collection = fileBox.getAcceptTypes();
    console.log(collection.toArray().join(','));

See Also
--------

-  `setAcceptTypes <FileBox.setAcceptTypes.html>`__
-  `Collection <../../Core/Collection/>`__
