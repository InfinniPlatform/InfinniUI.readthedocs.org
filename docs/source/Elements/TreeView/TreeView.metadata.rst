TreeView.metadata
=================

Метаданные типа `TreeView <../>`__.

Properties
----------

.. list-table::
   :header-rows: 1

   * - Name
     - Type
     - Description
   * - KeySelector
     - `Script <../../../Core/Script>`__
     - Функция выборки из элемента коллекции идентификатора.
   * - KeyProperty
     - ``String``
     - Свойство элемента коллекции с идентификатором.
   * - ParentSelector
     - `Script <../../../Core/Script>`__
     - Функция выборки из элемента коллекции идентификатора родителя.
   * - ParentProperty
     - ``String``
     - Свойство элемента коллекции с идентификатором родителя.


Examples
--------

.. code:: json

    {
      "KeyProperty": "Id",
      "ParentProperty": "ParentId",
      "ItemProperty": "DisplayName",
      "Items": {
        "Source": "dataSource1"
      }
    }
