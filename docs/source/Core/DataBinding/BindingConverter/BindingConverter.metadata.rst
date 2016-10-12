BindingConverter.metadata
-------------------------

Метаданные типа `BindingConverter <./>`__.

Properties
~~~~~~~~~~

.. list-table::
   :header-rows: 1

   * - Name
     - Type
     - Description
   * - ToSource
     - ``String``
     - Функция конвертации, осуществляющая преобразование данных элемента в формат данных источника
   * - ToElement
     - ``String``
     - Функция конвертации, осуществляющая преобразование данных источника в формат данных элемента


Examples
~~~~~~~~

В качестве функции конвертации может быть указано как название
прикладного скрипта,

.. code:: json

    {
        "Scripts": [
            {
              "Name": "ElementToSourceConverter",
              "Body": "..."
            },
            {
              "Name": "SourceToElementConverter",
              "Body": "..."
            }
        ],
        ... 
        "Converter": {
          "ToSource": "ElementToSourceConverter", 
          "ToElement": "SourceToElementConverter"
        }
    }

так и тело функции.

.. code:: json

    {
        "Converter": {
          "ToSource": "{ return (args.value == '-' ? false : true); }", 
          "ToElement": "{ return args.value ? '+' : '-'; }"
        }
    }
