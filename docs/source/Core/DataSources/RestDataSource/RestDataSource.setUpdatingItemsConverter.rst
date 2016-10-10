RestDataSource.setUpdatingItemsConverter()
==========================================

Устанавливает конвертер ответа http-сервиса в контейнер элементов
источника данных.

Description
-----------

В общем случае, http-сервис может возвращать данные произвольного
формата. Однако источники данных работают только с контейнерами
элементов. Для конвертации ответа http-сервиса в требуемый формат
используется функция ``setUpdatingItemsConverter``.

Syntax
------

.. code:: js

    RestDataSource.setUpdatingItemsConverter(value)

Parameters
~~~~~~~~~~

.. list-table::
   :header-rows: 1

   * - Name
     - Description
   * - value
     - Функция конвертации ответов http-сервиса в контейнер элементов


Returns
~~~~~~~

Метод ничего не возвращает

Examples
--------

.. code:: js

    RestDataSource.setUpdatingItemsConverter(function(data){
                return data['Items'];
            });

See Also
--------

-  `updateItems() <../BaseDataSource/BaseDataSource.updateItems.html>`__
