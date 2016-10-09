TabPanel.setSelectedItem()
==========================

Возвращает выделенный дочерний элемент панели.

Description
-----------

В каждый момент времени пользователь может работать только с одной
`страницей <../TabPage/>`__, которая соответствует выделенному дочернему
элементу панели. Метод
`setSelectedItem() <../TabPanel.setSelectedItem.html>`__ позволяет
программно выделить необходимый элемент. Выделяемый элемент должен
присутствовать в `коллекции <../../../Core/Collection/>`__ дочерних
элементов панели -
`getItems() <../../../Core/Elements/Container/Container.getItems.html>`__.
Если соответствующая страница
`заблокирована <../../../Core/Elements/Element/Element.getEnabled.html>`__,
`скрыта <../../../Core/Elements/Element/Element.getVisible.html>`__ или не
найдена, выделение элемента завершится неудачей и метод
`setSelectedItem() <../TabPanel.setSelectedItem.html>`__ вернет значение
``false``. При успешном выделении элемента данный метод вернет значение
``true``. Изменение выделенного элемента приводит к возникновению
события `onSelectedItemChanged <../TabPanel.onSelectedItemChanged.html>`__.

Syntax
------

.. code:: js

    tabPanel.setSelectedItem(value)

Parameters
~~~~~~~~~~

.. list-table::
   :header-rows: 1

   * - Name
     - Type
     - Description
   * - value
     - `TabPage <../TabPage/>`__
     - Дочерний элемент панели, который необходимо выделить


Returns
~~~~~~~

Логическое значение, определяющее успешность выделения дочернего
элемента панели. Значение ``false`` говорит о том, элемент не был
выделен, значение ``true`` - элемент успешно выделен.

Examples
--------

.. code:: js

    var tabPanel = new TabPanel();
    var tabPage1 = new TabPage();
    var tabPage2 = new TabPage();
    tabPanel.getItems().add(tabPage1);
    tabPanel.getItems().add(tabPage2);
    tabPanel.setSelectedItem(tabPage1);

See Also
--------

-  `getSelectedItem() <../TabPanel.getSelectedItem.html>`__
-  `getItems() <../../../Core/Elements/Container/Container.getItems.html>`__
-  `onSelectedItemChanged <../TabPanel.onSelectedItemChanged.html>`__
