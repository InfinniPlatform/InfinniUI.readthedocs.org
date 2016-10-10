BaseDataSource.metadata
=======================

Метаданные `базового типа источников данных <./>`__ представления.

Properties
----------

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


Exampes
-------

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
                    "DocumentId": "patients"
                }
            },
            {
                "DocumentDataSource": {
                    "Name": "TerminologyDataSource",
                    "ConfigId": "configuration",
                    "DocumentId": "diseases",
                    "ResolvePriority": 1
                }
            }
        ]
    }

