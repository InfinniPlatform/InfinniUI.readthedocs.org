EditorBase
==========

Интерфейс редакторов значений.

Extends
-------

`Element <../../Core/Elements/Element>`__

Syntax
------

.. code:: js

    new EditorBase(parent)

Parameters
~~~~~~~~~~

.. list-table::
   :header-rows: 1

   * - Name
     - Type
     - Description
   * - ``parent``
     - `Element <../../Core/Elements/Element>`__
     - Родительский `элемент <../../Core/Elements/Element>`__.


Methods
-------

.. list-table::
   :header-rows: 1

   * - Name
     - Description
   * - `getValue <EditorBase.getValue.html>`__
     - Возвращает значение.
   * - `setValue <EditorBase.setValue.html>`__
     - Устанавливает значение.
   * - `getHintText <EditorBase.getHintText.html>`__
     - Возвращает текст с подсказкой для ввода.
   * - `setHintText <EditorBase.setHintText.html>`__
     - Устанавливает текст с подсказкой для ввода.
   * - `getErrorText <EditorBase.getErrorText.html>`__
     - Возвращает текст с информацией об ошибке.
   * - `setErrorText <EditorBase.setErrorText.html>`__
     - Устанавливает текст с информацией об ошибке.
   * - `getWarningText <EditorBase.getWarningText.html>`__
     - Возвращает текст с информацией о предупреждении.
   * - `setWarningText <EditorBase.setWarningText.html>`__
     - Устанавливает текст с информацией о предупреждении.


Events
------

.. list-table::
   :header-rows: 1

   * - Name
     - Description
   * - `onValueChanging <EditorBase.onValueChanging.html>`__
     - Устанавливает `обработчик события <../../Core/Script/>`__ о том, что значение изменяется.
   * - `onValueChanged <EditorBase.onValueChanged.html>`__
     - Устанавливает `обработчик события <../../Core/Script/>`__ о том, что значение было изменено.

