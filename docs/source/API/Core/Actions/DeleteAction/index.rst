DeleteAction
============

Удаляет элемент из `источника данных <../../DataSources>`__.

Extends
-------

`BaseAction <../BaseAction/>`__

Syntax
------

.. code:: js

    new DeleteAction(parentView)

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
     - Default
     - Description
   * - destinationSource*
     - ``String``
   * - Название источника данных, из которого производится удаление
   * - destinationProperty*
     - ``String``
   * - Путь до документа в источнике данных, который будет удалятся
   * - canClose
     - ``Boolean``
     - true
     - Значение, определяющее, нужно ли перед удалением спросить согласие пользователя на удаление


\* Обязательное свойство.

Examples
--------

.. code:: js

    var deleteAction = new DeleteAction(parentView);
    deleteAction.setProperty('destinationSource', 'Patients');
    deleteAction.setProperty('destinationProperty', '$.Hospitalizations.0');
    deleteAction.execute(); // удалит первую госпитализацию у текущего пациента

See Also
--------

-  `AddAction <../AddAction/>`__
-  `EditAction <../EditAction/>`__
-  `getProperty <../BaseAction/BaseAction.getProperty.html>`__
-  `setProperty <../BaseAction/BaseAction.setProperty.html>`__
