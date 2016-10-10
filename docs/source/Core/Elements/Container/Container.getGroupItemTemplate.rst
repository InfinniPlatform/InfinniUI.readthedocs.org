Container.getGroupItemTemplate()
================================

Возвращает `функцию <../../Script/>`__ шаблонизации заголовков групп.

Description
-----------

Если в контейнере `задана
группировка <Container.setGroupValueSelector.html>`__, то,
воспользовавшись
`setGroupItemTemplate <Container.setGroupItemTemplate.html>`__, можно
определить заголовки групп.

Syntax
------

.. code:: js

    container.getGroupItemTemplate()

Parameters
~~~~~~~~~~

Нет

Returns
~~~~~~~

`Функция <../../Script/>`__ шаблонизации заголовков групп.

Данная функция в параметре ``args`` принимает информацию о группах:

-  ``args.index`` - индекс текущей группы,
-  ``args.item`` - элементы текущей группы.

Результатом работы функции должен быть `визуальный
элемент <../Element/>`__.

Examples
--------

.. code:: js

    var groupItemTemplate = container.getGroupItemTemplate();

See Also
--------

-  `setGroupItemTemplate() <Container.setGroupItemTemplate.html>`__
-  `setGroupValueSelector() <Container.setGroupValueSelector.html>`__
