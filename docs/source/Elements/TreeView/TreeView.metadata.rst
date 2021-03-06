TreeView.metadata
-----------------

Метаданные типа `TreeView <./>`__.

Properties
~~~~~~~~~~

.. list-table::
   :header-rows: 1

   * - Name
     - Type
     - Description
   * - KeySelector
     - `Script <../../Core/Script>`__
     - Функция выборки из элемента коллекции идентификатора.
   * - KeyProperty
     - ``String``
     - Свойство элемента коллекции с идентификатором.
   * - ParentSelector
     - `Script <../../Core/Script>`__
     - Функция выборки из элемента коллекции идентификатора родителя.
   * - ParentProperty
     - ``String``
     - Свойство элемента коллекции с идентификатором родителя.
   * - OnExpand
     - `Script <../../Core/Script>`__
     - Устанавливает обработчик события раскрытия элемента.
   * - OnCollapse
     - `Script <../../Core/Script>`__
     - Устанавливает обработчик события скрытия элемента.


Examples
~~~~~~~~

.. code:: json

    {
      "TreeView": {
        {
          "KeyProperty": "Id",
          "ParentProperty": "ParentId",
          "ItemProperty": "DisplayName",
          "Items": {
            "Source": "dataSource1"
          }
        }
      }
    }

.. code:: json

    {
      "TreeView": {
        {
          "KeyProperty": "Id",
          "ParentProperty": "ParentId",
          "ItemProperty": "DisplayName",
          "Items": {
            "Source": "dataSource1"
          },
          "OnExpand": "{ console.log( 'This item is expanded: ', args.item ); }",
          "OnCollapse": "{ console.log( 'This item is collapsed: ', args.item ); }"
        }
      }
    }
