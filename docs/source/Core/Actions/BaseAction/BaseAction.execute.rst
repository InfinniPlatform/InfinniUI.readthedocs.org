BaseAction.execute()
====================

Выполняет заданное действие.

Syntax
------

.. code:: js

    action.execute(callback);

Parameters
~~~~~~~~~~

.. list-table::
   :header-rows: 1

   * - Name
     - Type
     - Description
   * - callback
     - `Script <../../../Script/>`__
     - Обработчик события о том, что Action был выполнен


Returns
~~~~~~~

Метод ничего не возвращает

Examples
--------

.. code:: js

    var updateAction = new UpdateAction(parentView);
    updateAction.setProperty('dataSource', parentView.context.dataSources['DataSource1']);
    updateAction.execute(function(){ alert('DataSource1 was updated'); }); // обновит DataSource1
