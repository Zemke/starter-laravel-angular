<div ng-controller="TodoController">
    <form class="form-horizontal" ng-submit="create()" novalidate>
        <fieldset>
            <div class="form-group">
                <div class="col-md-5">
                    <input id="body" name="body" type="text" placeholder="Enter your Todo" class="form-control input-md"
                           ng-model="body" required>
                </div>
            </div>
            <div class="form-group">
                <div class="col-md-5">
                    <input type="submit" id="submit" name="submit" class="btn btn-primary"/>
                </div>
            </div>
        </fieldset>
    </form>
</div>


