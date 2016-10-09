Container.metadata
==================

Метаданные типа `Container <../>`__.

Properties
----------

.. list-table::
   :header-rows: 1

   * - Name
     - Type
     - Description
   * - Items\*
     - ``Array``/``Object``
     - Элементы контейнера
   * - ItemTemplate
     - `Element </docs/API/Core/Elements/Element/Element.metadata.html>`__
     - Шаблон дочерних элементов контейнера, 
   * - ItemFormat
     - `DisplayFormat <../../../DisplayFormat/>`__
     - Формат отображения дочерних элементов контейнера
   * - ItemSelector
     - `Script <../../../Script/>`__
     - Функция, которая по переданным данным конструирует отображаемое значение
   * - ItemProperty
     - ``String``
     - Свойство дочерних элементов контейнера для отображения в контейнере
   * - GroupValueSelector
     - `Script <../../../Script/>`__
     - Функция, определяющую условие группировки дочерних элементов контейнера
   * - GroupValueProperty
     - ``String``
     - Свойство, определяющее условие группировки дочерних элементов контейнера
   * - GroupItemTemplate
     - `Element </docs/API/Core/Elements/Element/Element.metadata.html>`__
     - Функция шаблонизации заголовков групп
   * - GroupItemFormat
     - `DisplayFormat <../../../DisplayFormat/>`__
     - Формат заголовков групп
   * - GroupItemSelector
     - `Script <../../../Script/>`__
     - Функция, которая по переданным данным конструирует значение заголовков групп
   * - GroupItemProperty
     - ``String``
     - Свойство, отображаемое в качестве заголовков групп


\* Обязательное свойство.

Если поле Items заданно массивом, то Container не является
шаблонизируемым и строится по метаданным Items. Если же Items является
объектом, то он содержит `привязку <../../../DataBinding/>`__ на
источник элементов, для отображения которых необходимо задать шаблон.

ItemSelector и GroupItemSelector должны возвращать элементарные
значения: строку или число.

Свойства ItemTemplate, ItemFormat, ItemSelector и ItemProperty
  являются взаимоисключающими. Если указать несколько из них, то для
  отображения будет выбрано наиболее приоритетное. В схеме свойства
  указаны в порядке приоритета.
Кроме того, взаимноисключающими являются GroupValueSelector и
  GroupValueProperty, а также GroupItemTemplate, GroupItemFormat,
  GroupItemSelector и GroupItemProperty.

Examples
--------

Рассмотрим случай, когда Items является массивом.

.. code:: json

    {
        "StackPanel": {
            "Items": [
                {
                    "Icon": {
                        "Value": "remove"
                    }
                },
                {
                    "Label": {
                        "Text": "delete"
                    }
                }
            ]
        }
    }

Пример шаблонизируемого контейнера:

.. code:: json

    {
        "StackPanel": {
            "Items": {
                "Source": "People",
                "Property": ""
            },
            "ItemTemplate": {
                "StackPanel": {
                    "Items": [
                        {
                            "Label": {
                                "Value": {
                                    "Source": "People",
                                    "Property": "$.FullName"
                                }
                            }
                        },
                        {
                            "Label": {
                                "Value": {
                                    "Source": "People",
                                    "Property": "$.Age"
                                }
                            }
                        }
                    ]
                }
            }
        }
    }

Контейнер с группировкой:

.. code:: json

    {
        "ListBox": {
            "ItemTemplate": {
                "TextBox": {
                    "Name": "TextBox1",
                    "Value": {
                        "Source": "MainDataSource",
                        "Property": "#.Display"
                    }
                }
            },
            "GroupItemFormat": "Connect: {Display}",
            "GroupValueProperty": "Display",
            "Items" : {
                "Source": "MainDataSource",
                "Property": ""
            }
        }
    }
