ListBox
=======

Список.

Extends
-------

`ListEditorBase <../ListEditorBase/>`__

Syntax
------

.. code:: js

    new ListBox(parent, viewMode)

Parameters
~~~~~~~~~~

.. list-table::
   :header-rows: 1

   * - Name
     - Type
     - Description
   * - parent*
     - `Element <../../Core/Elements/Element>`__
     - Родительский элемент
   * - viewMode*
     - ``String``
     - Строка со значением `режима отображения <../../Core/viewMode/>`__. Может принимать значения: 'common', 'base', 'checking'. Если указать значение 'checking', то отобразится `список радиокнопок <../RadioGroup/>`__


\* Обязательный аргумент.

Usage
-----

Посмотрим, как выглядят различные режимы отображения ListBox.

.. code:: js


    //js-demo
    var simpleItemTemplate = function (context, args) {
        var label = new InfinniUI.Label();
        label.setValue(args.item);
        return label;
    };

    function createListBox (openMode, isMultiSelect){
        listBox = new InfinniUI.ListBox(null, openMode);
        listBox.getItems().reset(['1', '2', '3']);
        listBox.setItemTemplate(simpleItemTemplate);
        listBox.setMultiSelect(isMultiSelect);

        $listBox = listBox.render();
        $elementForExample.append($listBox);
    }

    // hiddenCodeStart
    var viewModeListBox = new InfinniUI.ListBox(null, 'checking'), 
        listBox, checkBox;

    viewModeListBox.getItems().reset([
        'common',
        'base',
        'checking'
    ]);

    viewModeListBox.onValueChanged(function(context, args) {
        if ($listBox){
            $listBox.remove();
        }

        createListBox(args.newValue, checkBox.getValue());
    });

    viewModeListBox.setItemTemplate(simpleItemTemplate);

    var $viewModeListBox = viewModeListBox.render(), $listBox;
    $elementForExample.append($viewModeListBox);

    checkBox = new InfinniUI.CheckBox();
    checkBox.setText('MultiSelect');
    checkBox.setValue(true);
    checkBox.onValueChanged(function (context, args){
        if(listBox) {
            listBox.setMultiSelect(args.newValue);
            $listBox.remove();
            $listBox = listBox.render();
            $elementForExample.append($listBox);
        }
    });

    var $checkBox = checkBox.render();
    $elementForExample.append($checkBox);

    viewModeListBox.setValue('common');
    // hiddenCodeStop

Methods
-------

Нет

Events
------

Нет


.. include:: ListBox.metadata.rst

.. toctree::
   :hidden:

   ListBox.metadata.rst
   