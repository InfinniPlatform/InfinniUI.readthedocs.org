Container.getGroupValueSelector()
=================================

Возвращает `функцию <../../../Script/>`__, определяющую условие
группировки дочерних элементов контейнера.

Syntax
------

.. code:: js

    container.getGroupValueSelector()

Parameters
~~~~~~~~~~

Нет

Returns
~~~~~~~

`Функция <../../../Script/>`__, определяющая условие группировки
дочерних элементов контейнера.

Данная функция в параметре ``args`` принимает информацию об элементе
  контейнера. Свойство ``args.value`` содержит исходный элемент.
Результатом работы функции должно быть некоторое значение, по которому
  будут группироваться элементы.

Examples
--------

.. code:: js

    var groupValueSelector = container.getGroupValueSelector();

See Also
--------

-  `setGroupValueSelector() <../Container.setGroupValueSelector.html>`__
