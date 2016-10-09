Comparator
==========

Функция сравнения элементов коллекции.

Syntax
------

.. code:: js

    function(a, b)

Parameters
~~~~~~~~~~

.. list-table::
   :header-rows: 1

   * - Name
     - Type
     - Description
   * - ``a``
     - \*
     - Элемент коллекции.
   * - ``b``
     - \*
     - Элемент коллекции.


Returns
~~~~~~~

Возвращает целое число:

-  ``-1`` (или число меньше ``0``), если ``a`` меньше ``b``;
-  ``1`` (или число больше ``0``), если ``a`` больше ``b``;
-  ``0``, если ``a`` равно ``b``.

Examples
--------

Общая форма функции сравнения:

.. code:: js

    function comparator(a, b) {
      if (a is less than b by some ordering criterion) {
        return -1;
      }

      if (a is greater than b by the ordering criterion) {
        return 1;
      }

      // a must be equal to b
      return 0;
    }

Пример функции сравнения целых чисел:

.. code:: js

    function comparator(a, b) {
      if (a < b) return -1;
      if (a > b) return 1;
      return 0;
    }

Пример использования при сортировке:

.. code:: js

    var items = [
      { key: 3, value: 'C' },
      { key: 2, value: 'B' },
      { key: 1, value: 'A' }
    ];

    var comparator = function(a, b) {
      if (a.key < b.key) return -1;
      if (a.key > b.key) return 1;
      return 0;
    };

    var collection = new Collection(items, 'key', comparator);

    collection.forEach(function(item) {
      console.log(item.value);
    });

    // Output:
    // C
    // B
    // A

    collection.sort();

    collection.forEach(function(item) {
      console.log(item.value);
    });

    // Output:
    // A
    // B
    // C
