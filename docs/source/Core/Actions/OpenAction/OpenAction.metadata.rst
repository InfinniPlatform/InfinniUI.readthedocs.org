OpenAction.metadata
-------------------

Метаданные типа `OpenAction <./>`__.

Properties
~~~~~~~~~~

.. list-table::
   :header-rows: 1

   * - Name
     - Type
     - Description
   * - LinkView\*
     - `LinkView.metadata <../../Elements/LinkView/LinkView.metadata/>`__
     - Объект, который будет создавать и настраивать `представление <../../Elements/View/>`__


\* Обязательное свойство.

Examples
~~~~~~~~

.. code:: json

    {
        "OpenAction": {
            "LinkView": {
                "InlineView": {
                    ...
                }
            }
        }
    }
