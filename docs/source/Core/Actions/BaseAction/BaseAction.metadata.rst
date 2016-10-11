BaseAction.metadata
===================

Метаданные, которые реализованы во `всех действиях
InfinniUI <./>`__.

Properties
----------

.. list-table::
   :header-rows: 1

   * - Name
     - Type
     - Description
   * - OnExecuted
     - `Script <../../Script/>`__
     -  Устанавливает обработчик завершения действия.


Examples
--------

.. code:: json

    {
        "CancelAction": {
            "OnExecuted": "{ alert('OnCancel'); }"
        }
    }
