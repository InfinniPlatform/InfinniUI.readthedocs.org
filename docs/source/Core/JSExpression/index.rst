JSExpression
=============

Синтаксис для возможности задания простых js-выражений в любых текстовых полях. Одним из применений является локализация приложения.

Syntax
-------

.. code:: js

    "{= (JS-expression) }"


Example
-------

.. code:: js

    InfinniUI.localizations['ru-RU'].strings.custom = {
      button: {
        name: "Текст для кнопки"
      }
    };

    InfinniUI.localizations['en-US'].strings.custom = {
      button: {
        name: "Text for button"
      }
    };

    var metadata = [
      {
        "Button": {
          "Text": "{= InfinniUI.localized.strings.custom.button.name }" // Text for button
        }
      },
      {
        "TextBox": {
          "HintText": "{= 1 + 2 }" // 3
        }
      }
    ];

See Also
--------

-  `InfinniUI.config <../Config/>`__
-  `InfinniUI.localizations <../Localizations/>`__
