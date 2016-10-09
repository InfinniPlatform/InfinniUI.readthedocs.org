Panel.setHeaderTemplate()
=========================

Устанавливает `функцию <../../../Core/Script/>`__ шаблонизации заголовка
панели.

Syntax
------

.. code:: js

    panel.setHeaderTemplate(value)

Parameters
~~~~~~~~~~

.. list-table::
   :header-rows: 1

   * - Name
     - Type
     - Description
   * - value
     - `Script <../../../Core/Script/>`__
     - Функция шаблонизации заголовка панели. В параметре ``args`` передается информация, необходимая для формирования `визуального элемента <../../../Core/Elements/Element/>`__, который будет отображен в качестве заголовка панели. Свойство ``args.value`` содержит данные заголовка. Результатом работы функции должен быть `визуальный элемент <../../../Core/Elements/Element/>`__


Returns
~~~~~~~

Метод ничего не возвращает.

Examples
--------

.. code:: js

    panel.setHeaderTemplate(function(context, args) {
      var element = new Label();
      element.setValue(args.value);
      return element;
    });

See Also
--------

-  `getHeaderTemplate() <../Panel.getHeaderTemplate.html>`__
-  `getHeader() <../Panel.getHeader.html>`__
-  `setHeader() <../Panel.setHeader.html>`__
