TabPanel.metadata
=================

Метаданные типа `TabPanel <../>`__.

Properties
----------

.. list-table::
   :header-rows: 1

   * - Name
     - Type
     - Default
     - Description
   * - HeaderLocation
     - `TabHeaderLocation <../TabHeaderLocation/>`__
     - 'Top'
     - Расположение закладок
   * - OnSelectedItemChanged
     - `Script <../../../Core/Script/>`__
     - –
     - Обработчик события о том, что выделенный элемент изменился


Examples
--------

::

    {
      "TabPanel": {
        "HeaderLocation": "Left",
        "Items": [
          {
            "TabPage": {
              "Text": "Page1",
              "Items": [
                {
                  "Label": {
                    "Value": "Content of Page1"
                  }
                }
              ]
            }
          },
          {
            "TabPage": {
              "Text": "Page2",
              "Items": [
                {
                  "Label": {
                    "Value": "Content of Page2"
                  }
                }
              ]
            }
          }
        ]
      }
    }
