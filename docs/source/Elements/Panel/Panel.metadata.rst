Panel.metadata
--------------

Метаданные типа `Panel <./>`__.

Properties
~~~~~~~~~~

.. list-table::
   :header-rows: 1

   * - Name
     - Type
     - Default
     - Description
   * - Collapsible
     - ``Boolean``
     - false
     - Значение, определяющее, разрешено ли сворачивание панели
   * - Collapsed
     - ``Boolean``
     - false
     - Значение, определяющее, свернута ли панель
   * - HeaderTemplate
     - `Element <../../Core/Elements/Element/>`__
     - –
     - Шаблон отображения заголовка панели
   * - Header
     - ``String``/`BindingMetadata <../../Core/DataBinding/DataBinding.metadata.html>`__
     - –
     - Заголовок панели
   * - OnExpanding
     - `Script <../../Core/Script/>`__
     - –
     - Обработчик события о том, что панель разворачивается
   * - OnExpanded
     - `Script <../../Core/Script/>`__
     - –
     - Обработчик события о том, что панель была развернута
   * - OnCollapsing
     - `Script <../../Core/Script/>`__
     - –
     - Обработчик события о том, что панель сворачивается
   * - OnCollapsed
     - `Script <../../Core/Script/>`__
     - –
     - Обработчик события о том, что панель была свернута


Examples
~~~~~~~~

::

  //infinni-ui-demo
  {
    "Items": [
    //infinni-ui-display-begin
  {
    "Panel": {
      "Collapsible": true,
      "Header": "Numbers",
      "OnExpanded": "{ alert('Panel is expanded!'); }",
      "OnCollapsed": "{ alert('Panel is collapsed!'); }",
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
