TabPage.metadata
================

Метаданные типа `TabPage <./>`__.

Properties
----------

.. list-table::
   :header-rows: 1

   * - Name
     - Type
     - Default
     - Description
   * - CanClose
     - ``Boolean``
     - false
     - Значение, определяющее, разрешено ли закрытие страницы
   * - OnClosing
     - `Script <../../../Core/Script/>`__
     - –
     - Обработчик события о том, что страница закрывается
   * - OnClosed
     - `Script <../../../Core/Script/>`__
     - –
     - Обработчик события о том, что страница была закрыта


Examples
--------

::

    {
      "TabPage": {
        "Text": "Page_1",
        "OnClosed": "{ alert('Page_1 is closed!'); }",
        "Items": [
          {
            "Label": {
              "Value": "1"
            }
          },
          {
            "Label": {
              "Value": "2"
            }
          },
          {
            "Label": {
              "Value": "3"
            }
          }
        ]
      }
    },
    {
      "TabPage": {
        "Text": "Page_2",
        "OnClosed": "{ alert('Closed: Page_2'); }",
        "Items": [
          {
            "Label": {
              "Value": "A"
            }
          },
          {
            "Label": {
              "Value": "B"
            }
          },
          {
            "Label": {
              "Value": "C"
            }
          }
        ]
      }
    }
