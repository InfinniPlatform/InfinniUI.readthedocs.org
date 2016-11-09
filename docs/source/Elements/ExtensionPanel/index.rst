ExtensionPanel
==============

Контейнер для встраивания произвольных прикладных элементов.

Description
-----------

Для реализации функционала, не предусмотренного платформой, можно
добавить в глобальное пространство функцию-конструктор, экземпляры
которой будут создавать нужный элемент. Для того, чтобы воспользоваться
этой функцией в InfinniUI, необходимо указать имя функции-конструктора
ExtensionPanel в поле
`ExtensionName <ExtensionPanel.setExtensionName.html>`__.

Схематически данную функцию можно описать так:

.. code:: js

    function MyExtensionPanel(context, args) {  
        this.render = function() {
            var myElement;
            // тут определяется myElement
            args.$el.append(myElement);
        }
    }

Обратите внимание, что в методе render нужно самостоятельно делать
вставку создаваемого элемента в требуемое место (выделенный под
ExtensionPanel контейнер будет передан в функцию-конструктор в
args.$el).

Parameters
~~~~~~~~~~

.. list-table::
   :header-rows: 1

   * - Name
     - Type
     - Description
   * - context
     - `ViewContext </Core/Context>`__
     - Контекст представления
   * - args
     - ``Object``
     - Объект с полями: ● $el - элемент выделенный под ExtensionPanel, ● parameters - `параметры <ExtensionPanel.getParameters.html>`__, ● builder - `построитель элементов </Core/Builders/>`__, ● itemTemplate - `функция шаблонизации дочерних элементов </Core/Elements/Container/Container.getItemTemplate.html>`__, ● items - `коллекция дочерних элементов </Core/Elements/Container/Container.getItems.html>`__


Examples
~~~~~~~~

.. code:: js

    function SuperPanelExtension(context, args) {
        this.render = function() {
            if( args.items == null ) {
                return;
            }

            args.items.forEach( function(item, index){
                var item = args.itemTemplate(context, {index: index}),
                    $item = item.render(),
                    $div = $("<div>");

                $div.addClass("my-super-class")
                    .append($item);

                args.$el.append($div);
            });
        };
    }

.. code:: js

    function CaptchaExtension(context, args) {  
        this.render = function() {
            var $captcha = this.createCaptcha(args.parameters);

            args.$el.append($captcha);
        };

        this.createCaptcha = function(params) {
            // captcha creation
        };
    }

Extends
-------

`Container </Core/Elements/Container/>`__

Syntax
------

.. code:: js

    new ExtensionPanel(parent)

Parameters
~~~~~~~~~~

.. list-table::
   :header-rows: 1

   * - Name
     - Type
     - Description
   * - parent
     - `Element <../../Core/Elements/Element>`__
     - Родительский элемент


Methods
-------

.. list-table::
   :header-rows: 1

   * - Name
     - Description
   * - `setExtensionName <ExtensionPanel.setExtensionName.html>`__
     - Устанавливает название прикладного элемента
   * - `setContext <ExtensionPanel.setContext.html>`__
     - Устанавливает `контекст представления </Core/Context/>`__
   * - `setBuilder <ExtensionPanel.setBuilder.html>`__
     - Устанавливает `Builder </Core/Builders/>`__
   * - `getParameters <ExtensionPanel.getParameters.html>`__
     - Возвращает `параметры </Core/Parameters/>`__, передаваемые в прикладной элемент
   * - `setParameters <ExtensionPanel.setParameters.html>`__
     - Устанавливает `параметры </Core/Parameters/>`__, передаваемые в прикладной элемент


Events
------

Нет


.. include:: ExtensionPanel.metadata.rst