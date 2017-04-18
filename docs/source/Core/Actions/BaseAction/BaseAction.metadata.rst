BaseAction.metadata
-------------------

Метаданные, которые реализованы во `всех действиях
InfinniUI <./>`__.

Properties
~~~~~~~~~~

.. list-table::
   :header-rows: 1

   * - Name
     - Type
     - Description
   * - OnExecuted
     - `Script <../../Script/>`__
     -  Устанавливает обработчик завершения действия.
   * - CanExecute
     - `Script <../../Script/>`__
     -  Проверка условия для выполнения экшена. Возможно использование Promise. Для выполнения экшена необходимо вернуть true и для предотвращения выполнения экшена необходимо вернуть false.


Examples
~~~~~~~~

.. code:: json

    function canExecute( context, args ) {
        return new Promise( function( resolve, reject ) {
          // some async action
          setTimeout( function() {
              resolve();
          }, 1000 );
        } )
          .then( function() {
              return true;
          } );
    }

    {
        "CancelAction": {
            "OnExecuted": "{ alert('OnCancel'); }",
            "CanExecute": "{ return canExecute( context, args ); }"
        }
    }
