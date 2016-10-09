TabPanel.setHeaderTemplate()
============================

Устанавливает `функцию <../../../Core/Script/>`__ шаблонизации закладок
дочерних элементов панели.

Description
-----------

Если `функция <../../../Core/Script/>`__ шаблонизации закладок дочерних
элементов панели определена, то она используется при изменении
`коллекции <../../../Core/Collection/>`__ дочерних элементов панели -
`getItems() <../../../Core/Elements/Container/Container.getItems.html>`__.

Syntax
------

.. code:: js

    tabPanel.setHeaderTemplate(value)

Parameters
~~~~~~~~~~

.. list-table::
   :header-rows: 1

   * - Name
     - Type
     - Description
   * - value
     - `Script <../../../Core/Script/>`__
     - Функция шаблонизации закладок дочерних элементов панели. В параметре ``args`` передается информация, необходимая для формирования `визуального элемента <../../../Core/Elements/Element/>`__, который будет отображен в качестве закладки панели. Свойство ``args.value`` содержит исходный элемент. Результатом работы функции должен быть `визуальный элемент <../../../Core/Elements/Element/>`__


Returns
~~~~~~~

Метод ничего не возвращает.

Examples
--------

.. code:: js

    tabPanel.setHeaderTemplate(function(context, argument) {
      var header = new Label();
      header.setValue(argument.value);
      return header;
    });

    tabPanel.setItemTemplate(function(context, argument) {
      var tabPage = new TabPage();
      var content = new Label();
      content.setValue(argument.value);
      tabPage.getItems().add(content);
      return tabPage;
    });

    tabPanel.getItems().reset([
      'One',
      'Two',
      'Three'
    ]);

See Also
--------

-  `getHeaderTemplate() <../TabPanel.getHeaderTemplate.html>`__
-  `getItemTemplate() <../../../Core/Elements/Container/Container.getItemTemplate.html>`__
-  `setItemTemplate() <../../../Core/Elements/Container/Container.setItemTemplate.html>`__
-  `getItems() <../../../Core/Elements/Container/Container.getItems.html>`__
-  `Collection <../../../Core/Collection/>`__
