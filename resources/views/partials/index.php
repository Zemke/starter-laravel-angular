<p ng-if="authenticatedUser">
    Hello {{authenticatedUser.username}}, thank you for installing me.
</p>
<p ng-if="!authenticatedUser">
    Hello guest, thank you for installing me.
</p>
