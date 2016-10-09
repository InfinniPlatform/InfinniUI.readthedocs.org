Button.metadata
===============

Метаданные типа `Button <../>`__.

Properties
----------

.. list-table::
   :header-rows: 1

   * - Name
     - Type
     - Default
     - Description
   * - Action
     - `ActionMetadata <../../../Core/Actions/Action.metadata.html>`__
   * - Основное действие кнопки
   * - Content
     - ``String``
   * - Содержимое кнопки
   * - ContentTemplate
     - `ElementMetadata <../../../Core/Elements/Element/Element.metadata.html>`__
   * - Шаблон содержимого кнопки
   * - ViewMode
     - `viewMode <../../Core/viewMode/>`__
     - ``common``
     - Может принимать значения: 'link' или 'common'. Если указать значение 'link', то кнопка примет вид ссылки


Examples
--------

.. code:: json

    {
        "ContentTemplate": {
            "Icon": {
              "Value": "pencil"
            }
        },
        "Action": {
            "EditAction": {
                ...
            }
        }
    }
