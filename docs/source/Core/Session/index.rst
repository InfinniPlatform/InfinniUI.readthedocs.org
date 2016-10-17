Session
=======

Description
-----------

User session provider.

Methods
-------

.. list-table::
   :header-rows: 1

   * - Name
     - Description
   * - `getCurrentUser <Session.getCurrentUser.html>`__
     - Returns info on the current user.
   * - `changePassword <Session.changePassword.html>`__
     - Changes password of the current user.
   * - `changeProfile <Session.changeProfile.html>`__
     - Changes personal information of the current user.
   * - `changeActiveRole <Session.changeActiveRole.html>`__
     - Changes active role of the current user.
   * - `signInInternal <Session.signInInternal.html>`__
     - Sings user in to system via internal provider.
   * - `getSignInExternalForm <Session.getSignInExternalForm.html>`__
     - Returns user sign-in form via external provider.
   * - `getLinkExternalLoginForm <Session.getLinkExternalLoginForm.html>`__
     - Returns login form link from external provider.
   * - `unlinkExternalLogin <Session.unlinkExternalLogin.html>`__
     - Unlinks from the current user login from external provider.
   * - `addClaim <Session.addClaim.html>`__
     - Adds user claim.
   * - `setSessionData <Session.setSessionData.html>`__
     - Sets the current user claim.
   * - `getSessionData <Session.getSessionData.html>`__
     - Gets the current user claim.
   * - `signOut <Session.signOut.html>`__
     - Signs the current user out.


Events
------

.. list-table::
   :header-rows: 1

   * - Name
     - Description
   * - `onActiveRoleChanged <Session.onActiveRoleChanged.html>`__
     - Sets event processor on active role change.
   * - `onSignInInternal <Session.onSignInInternal.html>`__
     - Sets event processor on sign user in via internal provider.
   * - `onSignOut <Session.onSignOut.html>`__
     - Sets event processor on sign user out.



.. toctree::
   :hidden:

   Session.addClaim.rst
   Session.changeActiveRole.rst
   Session.changePassword.rst
   Session.changeProfile.rst
   Session.getCurrentUser.rst
   Session.getLinkExternalLoginForm.rst
   Session.getSessionData.rst
   Session.getSignInExternalForm.rst
   Session.onActiveRoleChanged.rst
   Session.onSignInInternal.rst
   Session.onSignOut.rst
   Session.setSessionData.rst
   Session.signInInternal.rst
   Session.signOut.rst
   Session.unlinkExternalLogin.rst
