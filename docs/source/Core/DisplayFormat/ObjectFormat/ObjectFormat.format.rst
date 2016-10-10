ObjectFormat.format
===================

Description
-----------

Строка форматирования объекта определяет правила построения текстового
представления заданного объекта.

Путь к свойству объекта записывается в формате, который описан в разделе
`DotNotation <../../DotNotation/>`__.

Строка форматирования для даты и времени записываться в формате, который
описан в разделе
`dateTimeFormatFormatting <../../../Culture/Culture.dateTimeFormatting.html>`__.

Строка форматирования для числовых значений записываться в формате,
который описан в разделе
`NumberFormat.format <../../NumberFormat.format.html>`__.

Ниже приведены правила построения строки форматирования в форме
`Бэкуса-Наура <http://en.wikipedia.org/wiki/Backus%E2%80%93Naur_Form>`__.

Schema
------

.. raw:: html

   <pre>
   <Строка форматирования> ::= { <Произвольный текст> | <Формат значения> }
        
   <Формат значения> ::= "{" [ <Путь к свойству объекта> ] [ ":" <Настройки форматирования> ] "}"
      
   <Настройки форматирования> ::=
       <Форматирование даты и времени>
       | <Форматирование числовых значений>
      
   <Форматирование даты и времени> ::= DateTimeFormating
       
   <Форматирование числовых значений> ::= NumberFormatting
   </pre>

Examples
--------

.. list-table::
   :header-rows: 1

   * - Формат
     - Форматируемое значение
     - Результат форматирования (en-US)
   * - *Простые типы данных*
     -  
     -  
   * - "Hello, {}!"
     - "Ivan"
     - "Hello, Ivan!"
   * - "Birth date: {:d}"
     - "2014-09-04T12:34:56"
     - "Birth date: 9/4/2014"
   * - "Birth time: {:T}"
     - "2014-09-04T12:34:56"
     - "Birth time: 12:34:56 AM"
   * - "Weight: {:n2} kg"
     - 123.456
     - "Weight: 123.46 kg"
   * - *Сложные типы данных*
     -  
     -  
   * - "Hello, {FirstName} {MiddleName}!"
     - { FirstName: "Ivan", MiddleName: "Ivanovich" }
     - "Hello, Ivan Ivanovich!"
   * - "Birth date: {BirthDate:d}"
     - { BirthDate: "2014-09-04T12:34:56" }
     - "Birth date: 9/4/2014"
   * - "Birth time: {BirthDate:T}"
     - { BirthDate: "2014-09-04T12:34:56" }
     - "Birth time: 12:34:56 AM"
   * - "Weight: {Weight:n2} kg"
     - { Weight: 123.456 }
     - "Weight: 123.46 kg"

