InfinniUI.extensionPanels.register
==================================

Регистрирует прикладные элементы.

Syntax
------

.. code:: js

    InfinniUI.extensionPanels.register(value)

Parameters
~~~~~~~~~~

.. list-table::
   :header-rows: 1

   * - Name
     - Type
     - Description
   * - value
     - `Object`
     - Параметры, необходимые для создания прикладного элемента. Является объектом с полями: name - идентификатор прикладного элемента, initialize - инициализация функции-конструктора:sup:`1`, render - функция построения прикладного элемента:sup:`2`. 

:sup:`1` На вход получает параметры `context </Core/Context>`__ и `args`. `args` является объектом с полями:

- $el - элемент выделенный под ExtensionPanel, 
- parameters - `параметры <ExtensionPanel.getParameters.html>`__, 
- builder - `построитель элементов </Core/Builders/>`__, 
- itemTemplate - `функция шаблонизации дочерних элементов </Core/Elements/Container/Container.getItemTemplate.html>`__, 
- items - `коллекция дочерних элементов </Core/Elements/Container/Container.getItems.html>`__.

:sup:`2` Схематически данную функцию можно описать так:

.. code:: js

    render: function() {
        var myElement;
        // тут определяется myElement
        args.$el.append(myElement);
    }

Обратите внимание, что в методе render нужно самостоятельно делать
вставку создаваемого элемента в требуемое место (выделенный под
ExtensionPanel контейнер будет передан в функцию-конструктор в
args.$el).


Returns
~~~~~~~

Метод не возвращает значений.

Examples
~~~~~~~~

.. code:: js

	InfinniUI.extensionPanels.register( {
	    name: 'SuperPanelExtension',
	    initialize: function( context, args ) {
	        this.context = args.context;

	        this.$el = args.$el;
	        this.items = args.items;
	        this.itemTemplate = args.itemTemplate;
	    },
	    render: function() {
	    	var that = this;
	        if( this.items == null ) {
	        	return;
	        }

	        this.items.forEach( function(item, index) {
	            var item = that.itemTemplate(context, {index: index}),
	                $item = item.render(),
	                $div = $("<div>");

	            $div.addClass("my-super-class")
	                .append($item);

	            that.$el.append($div);
	        } );
	    }
	} );

.. code:: js

	InfinniUI.extensionPanels.register( {
	    name: 'CaptchaExtension',
	    initialize: function( context, args ) {
	        this.context = args.context;

	        this.$el = args.$el;
	        this.parameters = args.parameters;
	    },
	    render: function() {
	    	var $captcha = this.createCaptcha();

	    	this.$el.append($captcha);
	    },
	    createCaptcha: function() {
	    	// captcha creation
	    }
	} );
