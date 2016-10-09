SelectAction
============

Заполняет поле элемента в `источнике данных <../../DataSources>`__
данными из другого элемента `источника данных <../../DataSources>`__.

Extends
-------

`BaseAction <../BaseAction/>`__

Syntax
------

.. code:: js

    new SelectAction(parentView)

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
     - Объект, который будет создавать и настраивать `представление <../../Elements/View/>`__ для выбора нового значения поля
   * - sourceSource
     - ``String``
     - Название источника данных, из которого будет заполняться редактируемый источник данных
   * - sourceProperty
     - ``String``
     - Путь до поля в источнике данных, которое будет копироваться
   * - destinationSource
     - ``String``
     - Название редактируемого источника данных
   * - destinationProperty
     - ``String``
     - Путь до поля в источнике данных, которое будет редактироваться


.. figure:: Scheme.png
   :alt: 

Метод execute
-------------

Если при вызове метода `execute <../BaseAction/BaseAction.execute.html>`__
указан параметр callback, то вызов данного обработчика осуществляется с
параметром value.

.. list-table::
   :header-rows: 1

   * - Name
     - Description
   * - value
     - Выбранное значение


Examples
--------

.. code:: js

    var linkView = (new InlineViewBuilder()).build(null, {
                                                            builder: args.builder, 
                                                            metadata: {View: selectPatientView}, 
                                                            parentView: parentView
                                                        });
    var selectActionCallback = function(value) {
        console.log(value);
    };

    var selectAction = new SelectAction(parentView);

    selectAction.setProperty('linkView', linkView);
    selectAction.setProperty('destinationSource', 'Hospitalizations');
    selectAction.setProperty('destinationProperty', '$.Patient');
    selectAction.setProperty('sourceSource', 'Patients');
    selectAction.setProperty('sourceProperty', '$');

    selectAction.execute(selectActionCallback);//откроет окно выбора пациента. Выбранный пацент будет записан в текущей госпитализации

See Also
--------

-  `getProperty <../BaseAction/BaseAction.getProperty.html>`__
-  `setProperty <../BaseAction/BaseAction.setProperty.html>`__
