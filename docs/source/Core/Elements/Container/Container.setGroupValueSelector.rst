Container.setGroupValueSelector()
=================================

Устанавливает `функцию <../../Script/>`__, определяющую условие
группировки дочерних элементов контейнера.

Syntax
------

.. code:: js

    container.setGroupValueSelector(value)

Parameters
~~~~~~~~~~

.. list-table::
   :header-rows: 1

   * - Name
     - Type
     - Description
   * - value
     - `Script <../../Script/>`__
     - Функция, определяющая условие группировки дочерних элементов контейнера


Данная функция в параметре ``args`` принимает информацию об элементе
контейнера. Свойство ``args.value`` содержит исходный элемент.
Результатом работы функции должно быть некоторое значение, по которому
будут группироваться элементы.

Returns
~~~~~~~

Метод ничего не возвращает.

Examples
--------

.. code:: js

    var selector = function(context, args) {
        var item = args.value;
        return item.Class;
    };

    container.setGroupValueSelector(selector);

See Also
--------

-  `getGroupValueSelector() <Container.getGroupValueSelector.html>`__
