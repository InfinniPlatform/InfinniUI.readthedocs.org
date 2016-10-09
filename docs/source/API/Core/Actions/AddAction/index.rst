AddAction
=========

Создает новый элемент в `источнике данных <../../DataSources>`__.

Extends
-------

`BaseAction <../BaseAction/>`__

Syntax
------

.. code:: js

    new AddAction(parentView)

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
   * - linkView*
     - `LinkView <../../Elements/View/LinkView/>`__
     - Объект, который будет создавать и настраивать `представление <../../Elements/View/>`__ для создания нового элемента
   * - sourceSource*
     - ``String``
     - Название редактируемого источника данных на представлении создания
   * - destinationSource\*
     - ``String``
     - Название редактируемого источника данных, на представлении, откуда создание было вызвано
   * - destinationProperty
     - ``String``
     - Путь до поля в источнике данных, которое будет редактироваться. Данное поле должно быть представлено массивом


\* Обязательное свойство.

Обратите внимание, что если не указать destinationProperty, то новый
элемент будет добавляться непосредственно в источник данных,
соответствующий destinationSource, иначе - добавиться в список
элементов, соответствующий destinationProperty.

.. figure:: Scheme.png
   :alt: 

Examples
--------

Рассмотрим вариант, когда на представлении parentView, нужно задать
действие добавления пациента (пациенты хранятся в источнике данных
Patients):

.. code:: js

    var linkView = (new InlineViewBuilder()).build(null, {
                                                            builder: args.builder, 
                                                            metadata: {View: editPatientView}, 
                                                            parentView: parentView
                                                        });

    var addAction = new AddAction(parentView);

    addAction.setProperty('linkView', linkView);
    addAction.setProperty('sourceSource', 'MainDataSource');
    addAction.setProperty('destinationSource', 'Patients');

    addAction.execute(); 

Теперь рассмотрим случай, когда текущему пациенту необходимо добавлять
госпитализации (поле Hospitalizations):

.. code:: js

    var linkView = (new InlineViewBuilder()).build(null, {
                                                            builder: args.builder, 
                                                            metadata: {View: editHospitalizationView}, 
                                                            parentView: parentView
                                                        });

    var addAction = new AddAction(parentView);

    addAction.setProperty('linkView', linkView);
    addAction.setProperty('sourceSource', 'MainDataSource');
    addAction.setProperty('destinationSource', 'Patients');
    addAction.setProperty('destinationProperty', '$.Hospitalizations');

    addAction.execute(); 

See Also
--------

-  `EditAction <../EditAction/>`__
-  `DeleteAction <../DeleteAction/>`__
-  `getProperty <../BaseAction/BaseAction.getProperty.html>`__
-  `setProperty <../BaseAction/BaseAction.setProperty.html>`__
