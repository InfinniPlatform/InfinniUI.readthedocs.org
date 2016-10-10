Element
=======

Базовый класс для всех визуальных элементов InfinniUI.

Description
-----------

Все визуальные элементы (далее просто "элементы"), представленные в
InfinniUI, являются потомками Element. В Element реализованы базовые
API, которые в итоге будут предоставлять все элементы InfinniUI.

Syntax
------

.. code:: js

    new Element(parent, viewMode);

Parameters
~~~~~~~~~~

.. list-table::
   :header-rows: 1

   * - Name
     - Type
     - Description
   * - parent
     - `Element <./>`__
     - Родительский `элемент <./>`__
   * - viewMode
     - ``String``
     - Строка со значением `режима отображения <../../viewMode>`__


Usage
-----

Создать экземпляр Element нельзя, однако можно создать, к примеру,
экземпляр кнопки, которая наследуется от Element. Сделаем это, а так же
зададим кнопке текст.

.. code:: js

    //js-demo
    var button = new Button();
    var $button = button.render();

    button.setText("ButtonText")

    $elementForExample.append($button);

Properties
----------

.. list-table::
   :header-rows: 1

   * - Name
     - Type
     - Description
   * - `name <Element.name.html>`__
     - ``String``
     - Содержит имя элемента


Methods
-------

.. list-table::
   :header-rows: 1

   * - Name
     - Description
   * - `getView <Element.getView.html>`__
     - Возвращает родительское `представление <../View/>`__
   * - `getParent <Element.getParent.html>`__
     - Возвращает родительский `элемент <./>`__
   * - `setParent <Element.setParent.html>`__
     - Устанавливает родительский `элемент <./>`__
   * - `getChildElements <Element.getChildElements.html>`__
     - Возвращает список дочерних `элементов <./>`__. Речь идет о непосредственных потомках, дочерние дочерних элементов в этот список не входят. В отличии от следующих методов
   * - `findAllChildrenByType <Element.findAllChildrenByType.html>`__
     - Возвращает список потомков (дочерних, их дочерних и т. д.) `элементов <./>`__ с заданным типом (Button, Label и др.)
   * - `findAllChildrenByName <Element.findAllChildrenByName.html>`__
     - Возвращает список потомков (дочерних, их дочерних и т. д.) `элементов <./>`__ с заданным именем
   * - `addChild <Element.addChild.html>`__
     - Добавляет заданный элемент в качестве дочернего
   * - `removeChild <Element.removeChild.html>`__
     - Удаляет заданный элемент из списка дочерних
   * - `getProperty <Element.getProperty.html>`__
     - Возвращает значение указанного свойства элемента. Например 'text', 'visible' 'value', и др.
   * - `setProperty <Element.setProperty.html>`__
     - Устанавливает значение указанного свойства элемента
   * - `getName <Element.getName.html>`__
     - Возвращает имя элемента
   * - `setName <Element.setName.html>`__
     - Устанавливает имя элемента
   * - `getText <Element.getText.html>`__
     - Возвращает текст элемента (в разных потомках Element, поле text используется по разному. Например, во View это заголовок представления, а в ImageBox это текст кнопки, инициирующей выбор загружаемого изображения)
   * - `setText <Element.setText.html>`__
     - Устанавливает текст элемента
   * - `getFocusable <Element.getFocusable.html>`__
     - Возвращает значение, определяющее, может ли элемент получить фокус
   * - `setFocusable <Element.setFocusable.html>`__
     - Устанавливает значение, определяющее, может ли элемент получить фокус
   * - `getFocused <Element.getFocused.html>`__
     - Возвращает значение, определяющее, установлен ли на элементе фокус
   * - `setFocused <Element.setFocused.html>`__
     - Устанавливает/снимает фокус с элемента (в зависимости от передаваемого значения)
   * - `getTag <Element.getTag.html>`__
     - Возвращает специальное значение, хранящяеся в элементе. Тег можно использовать для привязки произвольных значений к элементу
   * - `setTag <Element.setTag.html>`__
     - Устанавливает специальное значение. Оно может быть любого типа. Тег можно использовать для привязки произвольных значений к элементу
   * - `getEnabled <Element.getEnabled.html>`__
     - Возвращает значение, определяющее, возможен ли доступ к элементу
   * - `setEnabled <Element.setEnabled.html>`__
     - Устанавливает значение, определяющее, возможен ли доступ к элементу
   * - `getVisible <Element.getVisible.html>`__
     - Возвращает значение, определяющее, отображается ли элемент в интерфейсе
   * - `setVisible <Element.setVisible.html>`__
     - Устанавливает значение, определяющее, отображается ли элемент в интерфейсе
   * - `getHorizontalAlignment <Element.getHorizontalAlignment.html>`__
     - Возвращает `горизонтальное выравнивание <ElementHorizontalAlignment/>`__ в родительском элементе
   * - `setHorizontalAlignment <Element.setHorizontalAlignment.html>`__
     - Устанавливает `горизонтальное выравнивание <ElementHorizontalAlignment/>`__ в родительском элементе
   * - `getTextHorizontalAlignment <Element.getTextHorizontalAlignment.html>`__
     - Возвращает `горизонтальное выравнивание текста <TextHorizontalAlignment/>`__ в элементе
   * - `setTextHorizontalAlignment <Element.setTextHorizontalAlignment.html>`__
     - Устанавливает `горизонтальное выравнивание текста <TextHorizontalAlignment/>`__ в элементе
   * - `getToolTip <Element.getToolTip.html>`__
     - Возвращает устанавленное всплывающее сообщение элемента
   * - `setToolTip <Element.setToolTip.html>`__
     - Устанавливает всплывающее сообщение для элемента
   * - `getValidationState <Element.getValidationState.html>`__
     - Возвращает валидационный статус элемента
   * - `setValidationState <Element.setValidationState.html>`__
     - Устанавливает заданный валидационный статус и валидационное сообщение
   * - `getTextStyle <Element.getTextStyle.html>`__
     - Возвращает `стиль текста </docs/API/Core/Style/TextStyle/>`__ элемента
   * - `setTextStyle <Element.setTextStyle.html>`__
     - Устанавливает `стиль текста </docs/API/Core/Style/TextStyle/>`__ элемента
   * - `getForeground <Element.getForeground.html>`__
     - Возвращает `цвет </docs/API/Core/Style/ColorStyle/>`__ текста элемента
   * - `setForeground <Element.setForeground.html>`__
     - Устанавливает `цвет </docs/API/Core/Style/ColorStyle/>`__ текста элемента
   * - `getBackground <Element.getBackground.html>`__
     - Возвращает `цвет </docs/API/Core/Style/ColorStyle/>`__ фона элемента
   * - `setBackground <Element.setBackground.html>`__
     - Устанавливает `цвет </docs/API/Core/Style/ColorStyle/>`__ фона элемента
   * - `getStyle <Element.getStyle.html>`__
     - Возвращает кастомный стиль элемента (на деле это класс, стили которых могут быть заданы в подключаемых на страницу стилях)
   * - `setStyle <Element.setStyle.html>`__
     - Устанавливает элементу кастомный стиль (на деле устанавливает ему одноименный класс, стили которого можно задать самому в подключаемых на страницу стилях). Этот способ кастомизации внешнего вида череват разными последствиями, поскольку примененные к классу css-правила могут противоречить правилам задуманным InfinniUI, в следствии чего верстка может "поехать" неожиданным образом. Следует применять эту возможность как можно реже и как можно аккуратнее
   * - `render <Element.render.html>`__
     - Создает DOM-представление элемента
   * - `remove <Element.remove.html>`__
     - Удаляет элемент и его DOM-представление
   * - `isLoaded <Element.isLoaded.html>`__
     - Проверяет, готов ли элемент. Возвращает соответствующее значение


Events
------

.. list-table::
   :header-rows: 1

   * - Name
     - Description
   * - `onLoaded <Element.onLoaded.html>`__
     - Устанавливает `обработчик события <../../Script/>`__ о том, что элемент был загружен.
   * - `onGotFocus <Element.onGotFocus.html>`__
     - Устанавливает `обработчик события <../../Script/>`__ о том, что элемент получил фокус ввода
   * - `onLostFocus <Element.onLostFocus.html>`__
     - Устанавливает `обработчик события <../../Script/>`__ о том, что элемент потерял фокус ввода
   * - `onBeforeClick <Element.onBeforeClick.html>`__
     - Устанавливает `обработчик события <../../Script/>`__ клика мыши, который будет срабатывать при захвате события на элементе
   * - `onClick <Element.onClick.html>`__
     - Устанавливает `обработчик события <../../Script/>`__ о том, что по элементу сделали одинарный клик мыши
   * - `onDoubleClick <Element.onDoubleClick.html>`__
     - Устанавливает `обработчик события <../../Script/>`__ о том, что по элементу сделали двойной клик мыши
   * - `onMouseDown <Element.onMouseDown.html>`__
     - Устанавливает `обработчик события <../../Script/>`__ о том, что на элементе произвели двойное нажатие кнопкой мыши
   * - `onMouseUp <Element.onMouseUp.html>`__
     - Устанавливает `обработчик события <../../Script/>`__ о том, что на элементе отпустили кнопку мыши
   * - `onMouseWheel <Element.onMouseWheel.html>`__
     - Устанавливает `обработчик события <../Script/>`__ о том, что на элементе прокрутили колесо мыши
   * - `onMouseEnter <Element.onMouseEnter.html>`__
     - Устанавливает `обработчик события <../../Script/>`__ о том, что указатель мыши вошел в границы элемента
   * - `onMouseLeave <Element.onMouseLeave.html>`__
     - Устанавливает `обработчик события <../../Script/>`__ о том, что указатель мыши покинул границы элемента
   * - `onMouseMove <Element.onMouseMove.html>`__
     - Устанавливает `обработчик события <../../Script/>`__ о том, что указатель мыши двигался внутри элемента
   * - `onKeyDown <Element.onKeyDown.html>`__
     - Устанавливает `обработчик события <../../Script/>`__ о том, что на элементе нажали клавишу клавиатуры
   * - `onKeyUp <Element.onKeyUp.html>`__
     - Устанавливает `обработчик события <../../Script/>`__ о том, что на элементе отпустили клавишу клавиатуры
   * - `onPropertyChanged <Element.onPropertyChanged.html>`__
     - Устанавливает `обработчик события <../../Script/>`__ о том, что одно из свойств элемента изменилось



.. toctree::
   :hidden:

   ElementBuilder/index.rst
   ElementHorizontalAlignment/index.rst
   KeyboardEvent/index.rst
   MouseEvent/index.rst
   TextHorizontalAlignment/index.rst
   Element.addChild.rst
   Element.findAllChildrenByName.rst
   Element.findAllChildrenByType.rst
   Element.getBackground.rst
   Element.getChildElements.rst
   Element.getEnabled.rst
   Element.getFocusable.rst
   Element.getFocused.rst
   Element.getForeground.rst
   Element.getHorizontalAlignment.rst
   Element.getName.rst
   Element.getParent.rst
   Element.getProperty.rst
   Element.getStyle.rst
   Element.getTag.rst
   Element.getText.rst
   Element.getTextHorizontalAlignment.rst
   Element.getTextStyle.rst
   Element.getToolTip.rst
   Element.getValidationState.rst
   Element.getView.rst
   Element.getVisible.rst
   Element.isLoaded.rst
   Element.metadata.rst
   Element.name.rst
   Element.onBeforeClick.rst
   Element.onClick.rst
   Element.onDoubleClick.rst
   Element.onGotFocus.rst
   Element.onKeyDown.rst
   Element.onKeyUp.rst
   Element.onLoaded.rst
   Element.onLostFocus.rst
   Element.onMouseDown.rst
   Element.onMouseEnter.rst
   Element.onMouseLeave.rst
   Element.onMouseMove.rst
   Element.onMouseUp.rst
   Element.onMouseWheel.rst
   Element.onPropertyChanged.rst
   Element.remove.rst
   Element.removeChild.rst
   Element.render.rst
   Element.setBackground.rst
   Element.setEnabled.rst
   Element.setFocusable.rst
   Element.setFocused.rst
   Element.setForeground.rst
   Element.setHorizontalAlignment.rst
   Element.setName.rst
   Element.setParent.rst
   Element.setProperty.rst
   Element.setStyle.rst
   Element.setTag.rst
   Element.setText.rst
   Element.setTextHorizontalAlignment.rst
   Element.setTextStyle.rst
   Element.setToolTip.rst
   Element.setValidationState.rst
   Element.setVisible.rst
