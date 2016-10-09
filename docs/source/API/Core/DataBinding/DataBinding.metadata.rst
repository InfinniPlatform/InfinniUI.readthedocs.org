DataBinding.metadata
====================

Метаданные типа `DataBinding <../>`__.

Properties
----------

.. list-table::
   :header-rows: 1

   * - Name
     - Type
     - Default
     - Description
   * - Source\*
     - ``String``
   * - Наименование источника данных привязки
   * - Property
     - ``String``
   * - Путь к свойству источника данных привязки
   * - Mode
     - `BindingMode <../BindingMode/>`__
     - ``TwoWay``
     - Направление потока данных в привязке
   * - Converter
     - `BindingConverter <../BindingConverter/>`__
   * - Преобразователь данных между элементом и источником


\* Обязательное свойство.

Examples
--------

Метаданные поля ввода, привязанного к параметру Parameter\_1:

.. code:: json

    {
        "TextBox": {
          "Value": {
            "Source": "Parameter_1"
          }
        }
    }

Пусть теперь поле ввода привязано к полю Name источника данных
DataSource\_1. И пусть при изменении источника, необходимо обновлять
поле ввода, но изменение значения поля ввода не должно влиять на
значение в источнике. Тогда метаданные выглядят так

.. code:: json

    {
        "TextBox": {
          "Value": {
            "Source": "DataSource_1",
            "Property": "Name",
            "Mode": "ToElement"
          }
        }
    }

Пример, когда данные необходимо конвертировать:

.. code:: json

    {
        "TextBox": {
          "Value": {
            "Source": "DataSource_1",
            "Property": "Name",
            "Converter": {
                "ToElement": "{ return args.value == '-' ? 'minus': 'plus'; }",
                "ToSource": "ConvertTextBoxToDataSource_1" //выполнится скрипт из контекста родительской view
            }
          }
        }
    }   
