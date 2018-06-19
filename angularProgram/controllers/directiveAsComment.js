app.directive("w3TestDirective", function() {
    return {
        restrict : "M",
        replace : true,
        template : "<h1>Made by a directive!</h1>"
    };
});
