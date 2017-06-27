ComboBox.getValueTemplate
=========================

Возвращает `функцию <../../Core/Script/>`__ шаблонизации выбранного
значения.

Description
-----------

Зачастую значения перед отображением необходимо преобразовывать.
Чтобы изменить формат отображения значений ComboBox воспользуйтесь 
методом `setItemTemplate <../../Core/Elements/Container/Container.setItemTemplate.html>`__.
Для изменения формата отображения выбранного значения используйте 
метод `setValueTemplate <ComboBox.setValueTemplate.html>`__.

Syntax
------

.. code:: js

    comboBox.getValueTemplate()

Parameters
~~~~~~~~~~

Нет

Returns
~~~~~~~

`Функция <../../Core/Script/>`__ шаблонизации выбранного значения.

Examples
--------

.. code:: js

    var valueTemplate = comboBox.getValueTemplate();

See Also
--------

-  `setValueTemplate <ComboBox.setValueTemplate.html>`__
-  `setItemTemplate <../../Core/Elements/Container/Container.setItemTemplate.html>`__
