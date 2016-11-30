Panel.setCollapseChanger()
==========================

Устанавливает имя элемента, при клике на который раскрывается панель.

Description
------------

Чтобы разрешить сворачивание панели воспользуйтесь методом `setCollapsible <Panel.setCollapsible.html>`_.    
По умолчанию панел сворачивается/разворачивается при клике на заголовок. 
C помощью метода setCollapseChanger можно установить элемент заголовка, клик на который будет регулировать состояние панели. 

Syntax
------

.. code:: js

    panel.setCollapseChanger(value)

Parameters
~~~~~~~~~~

.. list-table::
   :header-rows: 1

   * - Name
     - Type
     - Description
   * - value
     - ``String``
     - Имя элемента, при нажатии на который панель будет сворачиваться/разворачиваться.

Returns
~~~~~~~

Метод ничего не возвращает.

Examples
--------

.. code:: js

    //js-demo
	var panel = new InfinniUI.Panel();
	panel.setHeaderTemplate(function(context, args) {
	  var header = new InfinniUI.StackPanel(),
	      icon = new InfinniUI.Icon(),
	      label = new InfinniUI.Label;

	  icon.setName('icon_1')
	  icon.setValue('star');
	  label.setValue('Header');

	  header.setOrientation(InfinniUI.StackPanelOrientation.horizontal);
	  header.getItems().reset([icon, label]);
	  header.setItemTemplate(function(context, args){
	  	return args.item;
	  });
	  return header;
	});

	panel.setCollapsible(true);
	panel.setCollapseChanger('icon_1');
	// hiddenCodeStart
	$elementForExample.append(panel.render());
	// hiddenCodeStop

See Also
--------

-  `setCollapseChanger() <Panel.setCollapseChanger.html>`__
-  `getCollapsible() <Panel.getCollapsible.html>`__
-  `setCollapsible() <Panel.setCollapsible.html>`__
