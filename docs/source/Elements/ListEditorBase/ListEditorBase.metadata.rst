ListEditorBase.metadata
=======================

Метаданные типа `ListEditorBase <./>`__.

Properties
----------

.. list-table::
   :header-rows: 1

   * - Name
     - Type
     - Default
     - Description
   * - MultiSelect
     - ``Boolean``
     - false
     - Разрешен ли выбор нескольких элементов коллекции
   * - ValueSelector
     - `Script <../../Core/Script/>`__
     - –
     - Функция выборки из элемента коллекции значения для выбора
   * - ValueProperty
     - ``String``
     - –
     - Свойство элемента коллекции со значением для выбора
   * - DisabledItemCondition
     - `Script <../../Core/Script/>`__
     - –
     - Функция, определяющая запрет на выбор элемента
   * - OnSelectedItemChanged
     - `Script <../../Core/Script/>`__
     - –
     - Обработчик события о том, что элемент был выделен


Examples
--------

.. code:: json

    {
        "MultiSelect": true,
        "ValueProperty": "id",
        "ItemFormat": "{FirstName} {LastName}, {BirthDate:d}",
        "DisabledItemCondition": "{ return (args.value.Id == 3); }"
    }
