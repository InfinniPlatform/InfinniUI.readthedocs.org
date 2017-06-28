ViewPanel.metadata
------------------

Метаданные типа `ViewPanel <./>`__.

Properties
~~~~~~~~~~

.. list-table::
   :header-rows: 1

   * - Name
     - Type
     - Description
   * - LinkView
     - `LinkView </Core/Elements/LinkView/LinkView.metadata/>`__
     - Объект, который создает и настраивает представление, отображаемое внутри ViewPanel


Examples
~~~~~~~~

.. code:: json

    {
        "ViewPanel": {
            "LinkView": {
                "AutoView": {
                    "Path": "/view/patients/listView.json"
                }
            }
        }
    }
