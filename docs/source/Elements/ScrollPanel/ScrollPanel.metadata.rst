ScrollPanel.metadata
====================

Метаданные типа `ScrollPanel <./>`__.

Properties
----------

.. list-table::
   :header-rows: 1

   * - Name
     - Type
     - Default
     - Description
   * - HorizontalScroll
     - `ScrollVisibility <ScrollVisibility/>`__
     - 'Auto'
     - Видимость полосы прокрутки по горизонтали
   * - VerticalScroll
     - `ScrollVisibility <ScrollVisibility/>`__
     - 'Auto'
     - Видимость полосы прокрутки по вертикали


Examples
--------

::

    {
      "ScrollPanel": {
        "HorizontalScroll": "Hidden",
        "VerticalScroll": "Visible",
        "Items": [
          {
            "Label": {
              "Value": "One"
            }
          },
          {
            "Label": {
              "Value": "Two"
            }
          },
          {
            "Label": {
              "Value": "Three"
            }
          }
        ]
      }
    }
