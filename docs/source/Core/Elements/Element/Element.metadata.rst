Element.metadata
----------------

Метаданные описывающие настройки `Element <./>`__.

Properties
~~~~~~~~~~

.. list-table::
   :header-rows: 1

   * - Name
     - Type
     - Default
     - Description
   * - Name
     - ``String``
     -  null 
     - Имя элемента (строка). Желательно делать его уникальным внутри представления.
   * - Text
     - ``String`` (⇔)
     -  "" 
     - Текст элемента. В разных потомках Element, поле text используется по разному. Например, во View это заголовок представления, а в ImageBox это текст кнопки, инициирующей выбор загружаемого изображения.
   * - Focusable
     - ``Boolean`` (⇔)
     -  true 
     - Значение, определяющее, может ли элемент получить фокус.
   * - Enabled
     - ``Boolean`` (⇔)
     -  true 
     - Значение, определяющее, значение, возможен ли доступ к элементу.
   * - Visible
     - ``Boolean`` (⇔)
     -  true 
     - Значение, определяющее видимость элемента.
   * - HorizontalAlignment
     - `HorizontalAlignment <ElementHorizontalAlignment>`__ (⇔)
     - "Stretch"
     - Горизонтальное выравнивание элемента.
   * - TextHorizontalAlignment
     - `TextHorizontalAlignment <TextHorizontalAlignment>`__ (⇔)
     - "Left"
     - Горизонтальное выравнивание внутри элемента.
   * - Style
     - ``String`` (⇔)
     -  "" 
     - Имя кастомного стиля (на деле это одноименный класс, стили которого можно задать самому в подключаемых на страницу стилях)
   * - TextStyle
     - `TextStyle <../../Style/TextStyle/>`__ (⇔)
     -  "" 
     - Стиль текста элемента
   * - Foreground
     - `Color </Core/Style/ColorStyle/>`__ (⇔)
     -  "" 
     - Цвет текста.
   * - Background
     - `Color </Core/Style/ColorStyle/>`__ (⇔)
     -  "" 
     - Цвет фона.
   * - ToolTip
     - ``String``, `Element <.>`__
     -  null 
     - Всплывающая над элементом подсказка.
   * - Tag
     - \*
     -  null 
     - Произвольное значение, которое можно привязать к элементу.
   * - OnLoaded
     - `Script <../../Script/>`__
     -  null 
     - Устанавливает обработчик готовности элемента.
   * - onGotFocus
     - `Script <../../Script/>`__
     -  null 
     - Устанавливает обработчик получения фокуса элементом.
   * - OnLostFocus
     - `Script <../../Script/>`__
     -  null 
     - Устанавливает обработчик потери фокуса у элемента.
   * - OnClick
     - `Script <../../Script/>`__
     -  null 
     - Устанавливает обработчик клика мышью по элементу.
   * - OnDoubleClick
     - `Script <../../Script/>`__
     -  null 
     - Устанавливает обработчик двойного клика мышью по элементу.
   * - OnMouseDown
     - `Script <../../Script/>`__
     -  null 
     - Устанавливает обработчик нажатия кнопки мыши над элементом (обычный клик срабатывает после отпускания кнопки мыши).
   * - OnMouseUp
     - `Script <../../Script/>`__
     -  null 
     - Устанавливает обработчик поднятия кнопки мыши над элементом (обычный клик срабатывает позже).
   * - OnMouseWheel
     - `Script <../../Script/>`__
     -  null 
     - Устанавливает обработчик прокрутки скролла над элементом.
   * - OnMouseEnter
     - `Script <../../Script/>`__
     -  null 
     - Устанавливает обработчик появления курсора над элементом.
   * - onMouseLeave
     - `Script <../../Script/>`__
     -  null 
     - Устанавливает обработчик выхода курсора из области элемента.
   * - OnMouseMove
     - `Script <../../Script/>`__
     -  null 
     - Устанавливает обработчик движения курсора в области элемента.
   * - OnKeyDown
     - `Script <../../Script/>`__
     -  null 
     - Устанавливает обработчик нажатия клавиши клавиатуры, в момент когда фокус находится на текущем элементе.
   * - OnKeyUp
     - `Script <../../Script/>`__
     -  null 
     - Устанавливает обработчик поднятия клавиши клавиатуры, в момент когда фокус находится на текущем элементе.
   * - OnPropertyChanged
     - `Script <../../Script/>`__
     -  null 
     - Устанавливает обработчик изменения одного из свойств элемента (value, visible и др.).


(⇔) Свойство может быть задано, как
`DataBinding <../../DataBinding/DataBinding.metadata.html>`__.

Exampes
~~~~~~~

Создать экземпляр Element нельзя (это абстрактный класс), однако можно
например создать экземпляр кнопки, которая наследуется от Element.

::

  //infinni-ui-demo
  {
      "DataSources": [
      ],
      "Items": [{
              "GridPanel": {
                  "Items": [
                      {
                          "Cell": {
                              "ColumnSpan": 4,
                              "Items": [
                                  {
                                      //infinni-ui-display-begin
  "Button": {
      "Name": "my_button",
      "Text": "Button",
      "OnClick": "{ alert(args.source.getName()); }"
  }
                                      //infinni-ui-display-end
                                  }
                              ]
                          }
                      }
                  ]
              }
          }
      ]
  }
