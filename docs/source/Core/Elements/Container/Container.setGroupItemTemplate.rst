Container.setGroupItemTemplate()
================================

Устанавливает `функцию <../../../Script/>`__ шаблонизации заголовков
групп.

Description
-----------

Если в контейнере `задана
группировка <../Container.setGroupValueSelector.html>`__, то,
воспользовавшись ``setGroupItemTemplate``, можно определить заголовки
групп.

Syntax
------

.. code:: js

    container.setGroupItemTemplate(value)

Parameters
~~~~~~~~~~

.. list-table::
   :header-rows: 1

   * - Name
     - Type
     - Description
   * - value
     - `Script <../../../Script/>`__
     - Функция шаблонизации заголовков групп


Данная функция в параметре ``args`` принимает информацию о группах:

-  ``args.index`` - индекс текущей группы,
-  ``args.item`` - элементы текущей группы.

Результатом работы функции должен быть `визуальный
элемент <../../Element/>`__.

Returns
~~~~~~~

Метод ничего не возвращает.

Examples
--------

.. code:: js

    var headerCreator = function(context, args) {
        var element = new Label();
        var header = args.index + ') ' + args.item[0].Class
        element.setValue(header);
        return element;
    };

    container.setGroupItemTemplate(headerCreator);

See Also
--------

-  `getGroupItemTemplate() <../Container.getGroupItemTemplate.html>`__
-  `setGroupValueSelector() <../Container.setGroupValueSelector.html>`__
