CreateItemAction
=========

Создает новый элемент в `источнике данных <../../DataSources>`__ не открывая новых view.

Extends
-------

`BaseAction <../BaseAction/>`__

Syntax
------

.. code:: js

    new CreateItemAction()

Parameters
~~~~~~~~~~

Нет.

Properties
----------

Для работы с данными свойствами используйте методы
`getProperty <../BaseAction/BaseAction.getProperty.html>`__ и
`setProperty <../BaseAction/BaseAction.setProperty.html>`__.

.. list-table::
   :header-rows: 1

   * - destinationSource*
     - ``String``
     - Название редактируемого источника данных, куда необходимо добавить новый пустой элемент
   * - destinationProperty
     - ``String``
     - Путь до поля в источнике данных, куда необходимо добавить новый пустой элемент. Данное поле должно быть представлено массивом


\* Обязательное свойство.

Обратите внимание, что если не указать destinationProperty, то новый
элемент будет добавляться непосредственно в источник данных,
соответствующий destinationSource, иначе - добавиться в список
элементов, соответствующий destinationProperty.

Examples
--------

.. code:: js

    var view = new InfinniUI.View();
    var builder = new InfinniUI.ApplicationBuilder();

    var metadata = {
        CreateItemAction: {
            DestinationValue: {
                Source: 'SomeDS'
            }
        }
    };

    var createItemAction = builder.build( metadata, {parentView: view} );

    createItemAction.execute();

.. include:: CreateItemAction.metadata.rst

See Also
--------

-  `AddAction <../AddAction/>`__
-  `getProperty <../BaseAction/BaseAction.getProperty.html>`__
-  `setProperty <../BaseAction/BaseAction.setProperty.html>`__


.. toctree::
   :hidden:

   CreateItemAction.metadata.rst
