TabPanel.getSelectedItem()
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

    tabPanel.getSelectedItem()

Parameters
~~~~~~~~~~

Нет

Returns
~~~~~~~

Выделенный дочерний элемент панели.

Examples
--------

.. code:: js

    var selectedItem = tabPanel.getSelectedItem();

See Also
--------

-  `setSelectedItem() <../TabPanel.setSelectedItem.html>`__
-  `getItems() <../../../Core/Elements/Container/Container.getItems.html>`__
-  `onSelectedItemChanged <../TabPanel.onSelectedItemChanged.html>`__
