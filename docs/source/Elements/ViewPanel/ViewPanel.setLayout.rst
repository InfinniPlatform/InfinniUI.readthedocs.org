ViewPanel.setLayout()
=====================

Устанавливает `представление <../../Core/Elements/View>`__, которое
нужно отображать внутри ViewPanel.

Syntax
------

.. code:: js

    viewPanel.setLayout(value)

Parameters
~~~~~~~~~~

.. list-table::
   :header-rows: 1

   * - Name
     - Type
     - Description
   * - value
     - `View <../../Core/Elements/View>`__
     - Представление, которое нужно отображать внутри ViewPanel


Returns
~~~~~~~

Метод не возвращает значений.

Examples
--------

.. code:: js

    var countingRhyme = new View();
    countingRhyme.setItemTemplate(function(context, args){
        var label = new Label();
        label.setValue(args.item.text);
        return label;
    });
    countingRhyme.getProperty('items').reset( [
                                        {text: "One, two. How are you? "}, 
                                        {text: "Three, four. Who's at the door? "},
                                        {text: "Five, six. My name is Fix."},
                                        {text: "Seven, eght. Sorry, I'm late."},
                                        {text: "Nine, ten. Say it again."}
                                    ] );

    viewPanel.setLayout(countingRhyme);

See Also
--------

-  `getLayout <ViewPanel.getLayout.html>`__
