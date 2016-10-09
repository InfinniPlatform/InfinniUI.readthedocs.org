Collection.setProperty
======================

Устанавливает значение атрибута для заданного элемента коллекции.
Установка значений атрибута не изменяет сам элемент коллекции.

Syntax
------

.. code:: js

    collection.setProperty(index, propertyName, propertyValue);

Parameters
~~~~~~~~~~

.. list-table::
   :header-rows: 1

   * - Name
     - Type
     - Description
   * - ``index``
     - ``Integer``
     - Порядковый индекс элемента коллекции
   * - ``propertyName``
     - ``String``
     - Имя атрибута
   * - ``value``
     - \*
     - Значение атрибута


Returns
~~~~~~~

Нет

Examples
--------

.. code:: js

    collection.setProperty(0, 'originalIndex', 0); 
    var index = collection.getProperty(0, 'originalIndex');

See Also
--------

-  `getProperty <../Collection.getProperty.html>`__
