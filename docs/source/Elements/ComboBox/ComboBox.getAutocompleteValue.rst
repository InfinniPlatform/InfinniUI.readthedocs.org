ComboBox.getAutocompleteValue
=============================

Возвращает значение, для поиска в выпадающем списке значений.

Description
-----------

Возвращает текст, который введен пользователем в строке быстрого поиска
значений в выпадающем списке. Для отображения подходящих значений,
необходимо привязать значение ComboBox.autocompleteValue к фильтру
источника данных выпадающего списка.

Syntax
------

.. code:: js

    comboBox.getAutocompleteValue()

Parameters
~~~~~~~~~~

Нет

Returns
~~~~~~~

Возвращает текст, который введен пользователем в строке быстрого поиска
значений в выпадающем списке.

Examples
--------

.. code:: js

    text = comboBox.getAutocompleteValue();

Item's DataSource metadata:

.. code:: json

    {
        "DataSource": {
            "DocumentDataSource": {
                "Filter": "text(Title, <%lookup%>)",
                "FilterParams": {
                    "lookup": {
                        "Source": "MyComboBox1",
                        "Property": "autocompeleteValue"
                    }
                }
            }        
        }
    }

ComboBox Metadata:

.. code:: json


    {
        "ComboBox": {
            "Name": "MyComboBox1",
            "Autocomplete": true,
            "Items": {
                "Source": "ds1",
                "Property": ""
            },
            "ItemProperty": "Title"
        }
    }

See Also
--------

-  `setAutocompleteValue() <../ComboBox.setAutocompleteValue.html>`__
-  `getAutocomplete() <../ComboBox.getAutocomplete.html>`__
-  `setAutocomplete() <../ComboBox.setAutocomplete.html>`__
