ScrollPanel.metadata
--------------------

Метаданные типа `ScrollPanel <./>`__.

Properties
~~~~~~~~~~

.. list-table::
   :header-rows: 1

   * - Name
     - Type
     - Default
     - Description
   * - HorizontalScroll
     - `ScrollVisibility <ScrollVisibility.html>`__
     - 'Auto'
     - Видимость полосы прокрутки по горизонтали
   * - VerticalScroll
     - `ScrollVisibility <ScrollVisibility.html>`__
     - 'Auto'
     - Видимость полосы прокрутки по вертикали


Examples
~~~~~~~~

::

  //infinni-ui-demo
  {
    "Items": [
    //infinni-ui-display-begin
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
      //infinni-ui-display-end
    ]
  }
