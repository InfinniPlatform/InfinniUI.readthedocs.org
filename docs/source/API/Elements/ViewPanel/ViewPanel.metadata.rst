ViewPanel.metadata
==================

Метаданные типа `ViewPanel <../>`__.

Properties
----------

.. list-table::
   :header-rows: 1

   * - Name
     - Type
     - Description
   * - LinkView
     - `LinkView </docs/API/Core/Elements/View/LinkView/LinkView.metadata.html>`__
     - Объект, который создает и настраивает представление, отображаемое внутри ViewPanel


Examples
--------

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
