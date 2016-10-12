ObjectDataSource
================

Источник данных представления для произвольного массива.

Description
-----------

Очень часто встречаются ситуации, когда визуальное представление
оперирует предопределенным набором данных, которые не имеет смысла
хранить во внешнем источнике данных, и можно жестко прописать в коде.
Например, выпадающий список, разрешающий выбрать значение из строго
определенного множества элементов. При решении подобных задач следует
использовать ``ObjectDataSource`` - он позволяет определить произвольный
массив данных в качестве поставщика данных.

Extends
-------

`BaseDataSource <../BaseDataSource/>`__

Syntax
------

.. code:: js

    new ObjectDataSource(parameters)

Parameters
~~~~~~~~~~

.. list-table::
   :header-rows: 1

   * - Name
     - Type
     - Description
   * - parameters
     - ``Object``
     -  Объект с параметрами представления. Один из параметров обязательный: parameters.view - родительское представление источника данных


Properties
----------

Нет

Specific Properties
-------------------

Нет

Methods
-------

.. list-table::
   :header-rows: 1

   * - Name
     - Description
   * - `setItems <ObjectDataSource.setItems.html>`__
     - Устанавливает список элементов источника данных


Events
------

Нет


.. toctree::
   :hidden:

   ObjectDataSource.metadata.rst
   ObjectDataSource.setItems.rst


.. include:: ObjectDataSource.metadata.rst