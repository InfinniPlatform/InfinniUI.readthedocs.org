TemplateEditMask
================

Маска ввода строки по шаблону.

|image0|
|image1|

Маска должна записываться в формате, который использует символы,
определяющие правила ввода.

Mask
----

Метасимволы
~~~~~~~~~~~

Каждому метасимволу соответствует определенный диапазона символов.
Конечный пользователь может вводить текст только в те позиции маски, в
которых определены метасимволы. В результате пользователь, находясь
определенной позиции маски ввода может ввести только те символы, которые
входят в диапазон, соответствующий метасимволу этой позиции ввода. Ниже
перечислены все доступные метасимволы.

.. list-table::
   :header-rows: 1

   * - Символ
     - Описание
   * - ``c``
     - Необязательный ввод любого символа.
   * - ``C``
     - Обязательный ввод любого символа.
   * - ``l``
     - Необязательный ввод буквы.
   * - ``L``
     - Обязательный ввод буквы.
   * - ``a``
     - Необязательный ввод буквы или цифры.
   * - ``A``
     - Обязательный ввод буквы или цифры.
   * - ``#``
     - Необязательный ввод цифры, знака "-" или "+".
   * - ``9``
     - Необязательный ввод цифры.
   * - ``0``
     - Обязательный ввод цифры.


Спецсимволы
~~~~~~~~~~~

Спецсимволы представляют различные разделители, символы валют и т.п.
Ниже перечислены все доступные спецсимволы.

.. list-table::
   :header-rows: 1

   * - Символ
     - Описание
   * - ``/``
     - Должен заменяться на `GlobalContext <../../GlobalContext/>`__. `Localizations.dateTimeFormatInfo.dateSeparator <../../Localizations/Localizations.dateTimeFormatInfo.html#dateseparator>`__.
   * - ``:``
     - Должен заменяться на `GlobalContext <../../GlobalContext/>`__. `Localizations.dateTimeFormatInfo.timeSeparator <../../Localizations/Localizations.dateTimeFormatInfo.html#timeseparator>`__.
   * - ``%``
     - Должен заменяться на `GlobalContext <../../GlobalContext/>`__. `Localizations.numberFormatInfo.percentSymbol <../../Localizations/Localizations.numberFormatInfo.html#percentsymbol>`__.
   * - ``$``
     - Должен заменяться на `GlobalContext <../../GlobalContext/>`__. `Localizations.numberFormatInfo.currencySymbol <../../Localizations/Localizations.numberFormatInfo.html#currencysymbol>`__.


Литералы
~~~~~~~~

Символы, которые не являются метасимволами и спецсимволами называются
литералами. Литералы вставляются автоматически, как есть, без изменения.
Конечный пользователь не может заменить литерал на иной символ. Во время
ввода данных курсор перепрыгивает литералы и спецсимволы. Если
метасимвол или спецсимвол требуется записать, как литерал, перед ним
нужно поставить символ "".

Properties
----------

.. list-table::
   :header-rows: 1

   * - Name
     - Type
     - Default
     - Description
   * - Mask
     - ``String``
     - –
     - Маска редактирования
   * - MaskSaveLiteral
     - ``Boolean``
     - ``true``
     - Сохранять литералы в редактируемом значении.
   * - MaskPlaceHolder
     - ``String``
     - ``_``
     - Символ заполнителя для метасимволов.


Если свойство ``MaskSaveLiteral`` равно ``true``, редактируемое значение
будет включать не только введенные пользователем символы, но и все
спецсимволы и литералы, определенные в маске. Если свойство
``MaskSaveLiteral`` равно ``false``, редактируемое значение будет
включать только введенные пользователем символы. Например, указана
маска: "(999)000-00-00", пользователь не стал вводить первые три цифры:
"(\_\_\_)456-78-90". Тогда в случае, если свойство ``MaskSaveLiteral``
равно ``true``, редактор сохранит значение "()456-78-90"; а в случае,
если свойство ``MaskSaveLiteral`` равно ``false``, редактор сохранит
значение "4567890".

Examples
--------

.. code:: js

    //js-demo

    var metadata = {
        TextBox: {
            EditMask: {
                TemplateEditMask: {
                     Mask: "(000)000-00-00"
                }
            }
        }
    };

    var builder = new InfinniUI.ApplicationBuilder();
    var textbox = builder.build(metadata);

    //  Render
    $elementForExample.append(textbox.render());

.. |image0| image:: ../assets/TemplateEditMask_Ex_00.png
.. |image1| image:: ../assets/TemplateEditMask_Ex_01.png

