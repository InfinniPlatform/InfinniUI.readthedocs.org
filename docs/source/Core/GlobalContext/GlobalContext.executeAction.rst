GlobalContext.executeAction
===========================

Запускает выполнение указанного `действия <../Actions/>`__.

Syntax
------

.. code:: js

    ViewContext.executeAction(context, executeActionMetadata[, resultCallback]);

Parameters
----------

.. list-table::
   :header-rows: 1

   * - Name
     - Type
     - Description
   * - ``context``
     - `ViewContext <../Context/>`__
     - Контекст представления.
   * - ``executeActionMetadata``
     - `ActionMetadata <../Actions/>`__
     - Метеданные `действия <../Actions/>`__
   * - ``resultCallback``
     - `Script <../Script/>`__
     - Обработчик события о том, что Action был выполнен


Examples
--------

.. code:: js

    var metadata = {
        "OpenAction": {
            "OpenMode": "Dialog",
            /** Athoter metadata **/
        }
    };
    InfinniUI.global.executeAction(context, metadata, functino (context, args) {
        console.log('Done');
    });

See Also
--------

-  `Actions <../Actions/>`__
