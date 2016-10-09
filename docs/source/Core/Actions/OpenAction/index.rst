OpenAction
==========

Открывает `представление <../../Elements/View/>`__.

Extends
-------

`BaseAction <../BaseAction/>`__

Syntax
------

.. code:: js

    new OpenAction(parentView)

Parameters
~~~~~~~~~~

.. list-table::
   :header-rows: 1

   * - Name
     - Type
     - Description
   * - parentView
     - `View <../../Elements/View/>`__
     -  Родительское представление 


Properties
----------

Для работы с данными свойствами используйте методы
`getProperty <../BaseAction/BaseAction.getProperty.html>`__ и
`setProperty <../BaseAction/BaseAction.setProperty.html>`__.

.. list-table::
   :header-rows: 1

   * - Name
     - Type
     - Description
   * - linkView
     - `LinkView <../../Elements/View/LinkView/>`__
     - Объект, который будет создавать и настраивать `представление <../../Elements/View/>`__


Метод execute
-------------

Если при вызове метода `execute <../BaseAction/BaseAction.execute.html>`__
указан параметр callback, то вызов данного обработчика осуществляется с
параметром view.

.. list-table::
   :header-rows: 1

   * - Name
     - Type
     - Description
   * - view
     - `Представление <../../Elements/View/>`__
     - Открытое представление


Examples
--------

.. code:: js

    var linkView = (new InlineViewBuilder()).build(null, {
                                                            builder: args.builder, 
                                                            metadata: {View: viewMetadata}, 
                                                            parentView: args.parentView
                                                        });
    var openActionCallback = function(view){
        console.log('%s was opened', view.name);
    };

    var openAction = new OpenAction(args.parentView);
    openAction.setProperty('linkView', linkView);
    openAction.execute(openActionCallback);

See Also
--------

-  `getProperty <../BaseAction/BaseAction.getProperty.html>`__
-  `setProperty <../BaseAction/BaseAction.setProperty.html>`__
