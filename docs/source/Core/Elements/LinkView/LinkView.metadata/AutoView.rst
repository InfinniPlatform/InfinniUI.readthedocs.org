AutoView
========

Метаданные типа `LinkView <../>`__. Позволяет задать содержимое
представления, указав путь (названия конфигурации и документа, где
хранится представление, и название представления) до соответсвующий
метаданных.

Properties
----------

.. list-table::
   :header-rows: 1

   * - Name
     - Type
     - Default
     - Description
   * - OpenMode
     - ``String``
     - 'Default'
     - Название `стратегии отображения <../OpenMode.html>`__ представления
   * - DialogWidth
     - ``String``
     - –
     - Ширина диалогового окна (актуально в случае OpenMode = 'Dialog')
   * - Container
     - ``String``
     - –
     - Название контейнера (актуально в случае OpenMode = 'Container')
   * - Path
     - ``String``
     - –
     - Путь до метаданных. Полный путь до метаданных будет выглядеть так: `InfinniUI.config </Core/Config/>`__.serverUrl + '/' + Path.
   * - Parameters
     - ``Array``
     - –
     - Коллекция `параметров представления </Core/Parameters/>`__


Examples
--------

.. code:: json

    {
        "LinkView": {
            "AutoView": {
                "OpenMode": "Dialog",
                "DialogWidth": "Small",
                "Path": "content/metadata/Views/PersonalAccount/EditView.json",
                "Parameters": [
                    {
                        "Name": "RefreshInfo",
                        "Value": true
                    }
                ]
            }
        }
    }
