InlineView
==========

Метаданные типа `LinkView <../...html>`__. Позволяет задать содержимое
представления с помощью `метаданных <../../../View.metadata.html>`__.

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
     - Название `стратегии отображения <../../OpenMode>`__ представления
   * - DialogWidth
     - ``String``
     - –
     - Ширина диалогового окна (актуально в случае OpenMode = 'Dialog')
   * - Container
     - ``String``
     - –
     - Название контейнера (актуально в случае OpenMode = 'Container')
   * - View\*
     - ``Object``
     - –
     - Шаблон содержимого `представления <../../...html>`__


\* Обязательное свойство.

Examples
--------

.. code:: json

    {
        "LinkView": {
            "InlineView": {
                "OpenMode": "Container",
                "Container": "CenterPanel",
                "View": {
                    "Items": [
                        {
                            "Label": {
                                "Text": "InlineView"
                            }
                        }
                    ]
                }
            }
        }
    }
