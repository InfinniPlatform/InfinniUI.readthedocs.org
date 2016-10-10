StackPanel.metadata
===================

Метаданные типа `StackPanel <./>`__.

Properties
----------

.. list-table::
   :header-rows: 1

   * - Name
     - Type
     - Default
     - Description
   * - ViewMode
     - ``String``
     - –
     - `Режим отображения <../../Core/viewMode/>`__. Может принимать значения: 'Base', 'FormGroup'.
   * - Orientation
     - `StackPanelOrientation <StackPanelOrientation/>`__
     - 'Vertical'
     - Ориентация стека элементов


Examples
--------

::

    {
      "StackPanel": {
        "ViewMode": "Base",
        "Orientation": "Horizontal",
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
    },
    {
      "StackPanel": {
        "ViewMode": "FormGroup",
        "Orientation": "Horizontal",
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
