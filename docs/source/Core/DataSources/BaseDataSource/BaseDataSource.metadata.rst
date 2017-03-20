BaseDataSource.metadata
-----------------------

Метаданные `базового типа источников данных <./>`__ представления.

Properties
~~~~~~~~~~

.. list-table::
   :header-rows: 1

   * - Name
     - Type
     - Default
     - Description
   * - Name
     - ``String``
     - –
     - Наименование источника данных
   * - Filter
     - ``String``:sup:`1`
     - –
     - Правило фильтрации документов
   * - FilterParams
     - ``Object``
     - –
     - Объект со значениями параметров. Параметр может быть задан как  [`DataBinding`](../../../DataBinding/DataBinding.metadata/).
   * - Search
     - ``String``
     - –
     - Строка полнотекстового поиска
   * - IdProperty
     - ``String``
     - '\_id'
     - Свойство с идентификатором элемента
   * - FillCreatedItem
     - ``Boolean``
     - true
     - Логическое значение, указывающее, нужно ли предзаполнение новых элементов на сервере
   * - IsLazy
     - ``Boolean``
     - true
     - Логическое значение, определяющее, будет ли прогрузка данных в источнике "ленивой" или нет
   * - ResolvePriority
     - ``Integer``
     - 0
     - Приоритет прогрузки источника данных. Чем выше приоритет, тем раньше источник будет прогружен
   * - ValidationErrors
     - `Script <../../Script/>`__
     - –
     - Функция проверки элемента на ошибки
   * - OnErrorValidator
     - `Script <../../Script/>`__
     - –
     - Обработчик события о том, что проверка на ошибки завершена
   * - OnSelectedItemChanged
     - `Script <../../Script/>`__
     - –
     - Обработчик события о том, что выделенный элемент изменился
   * - OnPropertyChanged
     - `Script <../../Script/>`__
     - –
     - Обработчик события о том, что одно из свойств источника изменилось
   * - OnItemDeleted
     - `Script <../../Script/>`__
     - –
     - Обработчик события о том, что элемент удален
   * - OnItemsUpdated
     - `Script <../../Script/>`__
     - –
     - Обработчик события о том, что список элементов обновлен
   * - OnProviderError
     - `Script <../../Script/>`__
     - –
     - Обработчик события о том, что `поставщик данных </API/Core/DataProviders/>`_ вернул ошибку

:sup:`1` `Шаблонизируемая величина <../RestDataSource/#parameters-templating>`__. Заполняется значениями из FilterParams.


Exampes
~~~~~~~

Создать экземпляр BaseDataSource нельзя (это абстрактный класс), однако
можно создать ObjectDataSource, который наследуется от BaseDataSource.

.. code:: json

    {
        "ObjectDataSource": {
            "Name": "DocumentTypes",
            "IdProperty": "guid",
            "IsLazy": false,
            "ValidationErrors": "{ return { IsValid: (args.Name != null), Items: [{Message: 'Name is required'}] }; }",
            "OnPropertyChanged": "{ alert('Property ' + args.property + ' is changed!'); }"
        }
    }

Допустим возникла зависимость между источниками данных, и для корректной
работы MainDataSource необходим загруженный TerminologyDataSource. Для
решения этой проблемы достаточно указать ResolvePriority для
TerminologyDataSource выше, чем для MainDataSource.

.. code:: json

    {
        "DataSources": [
            {
                "DocumentDataSource": {
                    "Name": "MainDataSource",
                    "ConfigId": "configuration",
                    "DocumentId": "patients",
                    "Filter": "gt(Birthday,<%startDate%>)",
                    "FilterParams": {
                        startDate: date('1985-01-01')
                    },
                }
            },
            {
                "DocumentDataSource": {
                    "Name": "TerminologyDataSource",
                    "ConfigId": "configuration",
                    "DocumentId": "diseases",
                    "Search": "Иванов Иван Иванович",
                    "ResolvePriority": 1
                }
            }
        ]
    }

Реализация фильтра.

.. code:: json

    {
      "DataSources": [
        {
          "ObjectDataSource": {
            "Name": "ObjectDataSource",
            "Items": [
              {"_id": 1, "Name": "Mobile small", "currency": 1100, "Display": "480x320"},
              {"_id": 2, "Name": "Mobile middle", "currency": 1200, "Display": "640x320"},
              {"_id": 3, "Name": "Mobile large", "currency": 1300, "Display": "771x375"},
              {"_id": 4, "Name": "Tablet", "currency": 1400, "Display": "960x480"},
              {"_id": 5, "Name": "Desktop small", "currency": 1500, "Display": "1024x768"},
              {"_id": 6, "Name": "Desktop middle", "currency": 1600, "Display": "1600x900"},
              {"_id": 7, "Name": "Desktop", "currency": 2000, "Display": "1920x1080"}
            ],
            "Filter": "and(contains(Name, <%filterName%>),contains(currency, <%filterPrice%>),contains(Display, <%filterDisplay%>))",
            "FilterParams": {
              "filterName": {
                "Source": "ObjectDataSource2",
                "Property": "$.FilterName"
              },
              "filterPrice": {
                "Source": "ObjectDataSource2",
                "Property": "$.FilterPrice"
              },
              "filterDisplay": {
                "Source": "ObjectDataSource2",
                "Property": "$.FilterDisplay"
              }
            }
          }
        },
        {
          "ObjectDataSource": {
            "Name": "ObjectDataSource2",
            "Items": [
              {"_id": 1, "FilterName": "", "FilterPrice": "", "FilterDisplay": ""}
            ]
          }
        }
      ]
    }
