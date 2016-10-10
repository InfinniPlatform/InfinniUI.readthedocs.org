TextEditorBase.getDisplayFormat
===============================

Возвращает `функцию <../../Core/Script/>`__ форматирования
`значения <../EditorBase/EditorBase.getValue.html>`__ для отображения.

Description
-----------

В некоторых ситуациях для представления данных пользователю требуется их
предварительная обработка. Метод
`setDisplayFormat() <TextEditorBase.setDisplayFormat.html>`__ позволяет
установить функцию форматирования значения редактора. Результат работы
этой функции используется в качестве отображаемого значения.

Syntax
------

.. code:: js

    TextEditorBase.getDisplayFormat()

Returns
~~~~~~~

`Функция <../Core/Script/>`__ форматирования
`значения <../EditorBase/EditorBase.getValue.html>`__ для отображения. В
параметре ``argument`` передается информация, необходимая для
форматирования. Свойство ``argument.value`` содержит значение редактора.
Результатом работы функции должна быть строка.

Examples
--------

.. code:: js

    var displayFormat = TextEditorBase.getDisplayFormat();

See Also
--------

-  `setDisplayFormat() <TextEditorBase.setDisplayFormat.html>`__
