ImageBox.getAcceptTypes
=======================

Возвращает `коллекцию <../../Core/Collection/>`__ допустимых форматов
данных.

Syntax
------

.. code:: js

    ImageBox.getAcceptTypes()

Parameters
~~~~~~~~~~

Нет

Returns
~~~~~~~

`Коллекция <../../Core/Collection/>`__ допустимых форматов данных.

Examples
--------

.. code:: js

    var collection = imageBox.getAcceptTypes();
    console.log(collection.toArray().join(','));

See Also
--------

-  `setAcceptTypes <ImageBox.setAcceptTypes.html>`__
-  `Collection <../../Core/Collection/>`__
