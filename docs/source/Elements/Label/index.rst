Label
=====

Текстовая метка.

Extends
-------

`Element <../../Core/Elements/Element>`__,
`EditorBase <../../Core/Elements/EditorBase/>`__

Syntax
------

.. code:: js

    new Label(parent, viewMode)

Parameters
~~~~~~~~~~

.. list-table::
   :header-rows: 1

   * - Name
     - Type
     - Description
   * - parent
     - `Element <../../Core/Elements/Element>`__
     - Родительский `элемент <../../Core/Elements/Element>`__
   * - viewMode
     - ``String``
     - Строка со значением `режима отображения <../../viewMode>`__


Methods
-------

.. list-table::
   :header-rows: 1

   * - Name
     - Description
   * - `getDisplayFormat <Label.getDisplayFormat.html>`__
     - Возвращает `функцию <../../../Core/Script/>`__ форматирования `значения <../EditorBase/EditorBase.getValue.html>`__ для отображения.
   * - `setDisplayFormat <Label.setDisplayFormat.html>`__
     - Устанавливает `функцию <../../../Core/Script/>`__ форматирования `значения <../EditorBase/EditorBase.getValue.html>`__ для отображения.
   * - `getTextTrimming <Label.getTextTrimming.html>`__
     - Возвращает значение, определяющее, усекается ли текст при переполнении.
   * - `setTextTrimming <Label.setTextTrimming.html>`__
     - Устанавливает значение, определяющее, усекается ли текст при переполнении.
   * - `getTextWrapping <Label.getTextWrapping.html>`__
     - Возвращает значение, определяющее, переносится ли текст при переполнении.
   * - `setTextWrapping <Label.setTextWrapping.html>`__
     - Устанавливает значение, определяющее, переносится ли текст при переполнении.
   * - `getEscapeHtml <Label.getEscapeHtml.html>`__
     - Возвращает значение, определяющее, экранируется ли HTML-разметка.
   * - `setEscapeHtml <Label.setEscapeHtml.html>`__
     - Устанавливает значение, определяющее, экранируется ли HTML-разметка.



.. include:: Label.metadata.rst