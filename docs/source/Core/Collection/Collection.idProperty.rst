Collection.idProperty
=====================

Возвращает свойство с идентификатором элемента коллекции.

Description
-----------

Идентификатор элемента используется при реализации целого ряда методов
коллекции и служит для уникальной идентификации искомого элемента или
элемента, над которым следует произвести какое-то действие. Если элемент
коллекции не имеет свойства с уникальным идентификатором, он сам
выступает в роли этого идентификатора.

Пример функции сравнения элементов, когда свойство ``idProperty``
указано:

.. code:: js

    function equals(a, b) {
      return a[idProperty] === b[idProperty];
    }

Пример функции сравнения элементов, когда свойство ``idProperty`` не
указано:

.. code:: js

    function equals(a, b) {
      return a === b;
    }

Syntax
------

.. code:: js

    Collection.idProperty

Returns
~~~~~~~

Свойство с идентификатором элемента коллекции, указанное при ее
создании.

Examples
--------

.. code:: js

    var collection = new Collection([
      { key: 1, value: 'A' },
      { key: 2, value: 'B' },
      { key: 3, value: 'C' }
    ], 'key');

    var value1 = collection.getById(1); // 'A'
    var value2 = collection.getById(2); // 'B'
    var value3 = collection.getById(3); // 'C'

See Also
--------

-  `getById() <Collection.getById.html>`__
