Session
=======

Description
-----------

Провайдер для работы сессией пользователя.

Methods
-------

.. list-table::
   :header-rows: 1

   * - Name
     - Description
   * - `getCurrentUser <Session.getCurrentUser.html>`__
     - Возвращает информацию о текущем пользователе.
   * - `changePassword <Session.changePassword.html>`__
     - Изменяет пароль текущего пользователя.
   * - `changeProfile <Session.changeProfile.html>`__
     - Изменяет персональную информацию текущего пользователя.
   * - `changeActiveRole <Session.changeActiveRole.html>`__
     - Изменяет активную роль текущего пользователя.
   * - `signInInternal <Session.signInInternal.html>`__
     - Осуществляет вход пользователя в систему через внутренний провайдер.
   * - `getSignInExternalForm <Session.getSignInExternalForm.html>`__
     - Возвращает форму входа пользователя в систему через внешний провайдер.
   * - `getLinkExternalLoginForm <Session.getLinkExternalLoginForm.html>`__
     - Возвращает форму добавления текущему пользователю имени входа у внешнего провайдера.
   * - `unlinkExternalLogin <Session.unlinkExternalLogin.html>`__
     - Удаляет у текущего пользователя имя входа у внешнего провайдера.
   * - `addClaim <Session.addClaim.html>`__
     - Добавляет "утверждения" пользователя.
   * - `setSessionData <Session.setSessionData.html>`__
     - Устанавливает "утверждения" текущего пользователя.
   * - `getSessionData <Session.getSessionData.html>`__
     - Получает "утверждения" текущего пользователя.
   * - `signOut <Session.signOut.html>`__
     - Выход пользователя из системы.


Events
------

.. list-table::
   :header-rows: 1

   * - Name
     - Description
   * - `onActiveRoleChanged <Session.onActiveRoleChanged.html>`__
     - Устанавливает обработчик события изменения активной роли текущего пользователя.
   * - `onSignInInternal <Session.onSignInInternal.html>`__
     - Устанавливает обработчик события входа пользователя в систему через внутренний провайдер.
   * - `onSignOut <Session.onSignOut.html>`__
     - Устанавливает обработчик события выхода пользователя из системы.

