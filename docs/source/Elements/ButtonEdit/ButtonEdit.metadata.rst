ButtonEdit.metadata
-------------------

Метаданные типа `ButtonEdit <./>`__.

Properties
~~~~~~~~~~

.. list-table::
   :header-rows: 1

   * - Name
     - Type
     - Default
     - Description
   * - Icon
     - ``String``:sup:`1`
     - –
     - Иконка, отображаемая на кнопке
   * - ReadOnly
     - ``Boolean``
     - true
     - Значение, определяющее, возможно ли редактирование текстового поля
   * - ShowClear
     - ``Boolean``
     - true
     - Значение, определяющее наличие кнопки, очищающей указанное значение
   * - OnButtonClick
     - `Script <../../Core/Script/>`__
     - –
     - Обработчик события нажатия на кнопку
   * - Action
     - `ActionMetadata <../../Core/Actions/>`__
     - –
     - Основное действие кнопки


OnButtonClick сработает раньше, чем Action.

:sup:`1` Полный список доступных названий и соответсвующих отображений:
`Icons <http://fontawesome.io/icons/>`__.

Examples
~~~~~~~~

ButtonEdit удобно использовать для редактирования полей-объектов (вроде
адреса).

.. code:: json

    {
        "ButtonEdit": {
            "ShowClear": false,
            "Icon": "pencil",
            "Value": {
                "Source": "MainDataSource",
                "Property": "$.Address"
            },
            "DisplayFormat": "{City}, {Street} st., {House}",
            "Action": {
                "EditAction": {
                    ...
                }
            }
        }
    }
