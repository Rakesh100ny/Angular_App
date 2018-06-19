var app=angular.module('myApp',['ui.router']);


app.config(['$stateProvider','$urlRouterProvider',function($stateProvider,$urlRouterProvider)
{
$stateProvider
.state('register',
{
  url         : '/register',
  templateUrl : 'templates/register.html',
  controller  : 'registerCtrl'
})

.state('readJson',
{
  url         : '/readJson',
  templateUrl : 'AngularJS_readJsonWithService_XMLHttpRequest/ReadingStaticJSONFile.html',
  controller  : 'jsonCtrl'
})

.state('login',
{
  url         : '/login',
  templateUrl : 'templates/login.html',
  controller  : 'loginCtrl'
})

.state('expression',
{
  url         : '/expression',
  templateUrl : 'Angular_Basic/angularJSExpression(usingVariable).html',
})

.state('directives',
{
  url         : '/directives',
  templateUrl : 'Angular_Basic/myFirstAngularJSDirectives.html',
})

.state('simpleDirectives',
{
  url         : '/simpleDirectives',
  templateUrl : 'AngularJS_Directives/AngularJSDirectives.html',
})

.state('validDirectives',
{
  url         : '/validDirectives',
  templateUrl : 'Angular_Basic/myFirstAngularJSDirectives(withValidHTML5).html',
})

.state('controller',
{
  url         : '/controller',
  templateUrl : 'Angular_Basic/myFirstAngularJSController.html',
  controller  : 'userCtrl'
})

.state('syncScope',
{
  url         : '/syncScope',
  templateUrl : 'Angular_Basic/myFirstAngularJSController.html',
  controller  : 'myCtrl'
})

.state('isNumber',
{
  url         : '/isNumber',
  templateUrl : 'AngularJS_Scopes/TheScopeIsInSync.html',
  controller  : 'numberCtrl'
})

.state('displayTable',
{
  url         : '/displayTable',
  templateUrl : 'AngularJS_Tables/DisplayingTable(Simple).html',
  controller  : 'tableCtrl'
})
.state('isString',
{
  url         : '/isString',
  templateUrl : 'AngularJS_API/AngularJSAngular_isString.html',
  controller  : 'stringCtrl'
})

.state('lowerUpperCase',
{
  url         : '/lowerUpperCase',
  templateUrl : 'AngularJS_API/AngularJSAngularLowerCase_UpperCase.html',
  controller  : 'lowerUpperCtrl'
})

.state('controllerFunction',
{
  url         : '/controllerFunction',
  templateUrl : 'AngularJS_Controllers/ControllerFunctions.html',
  controller  : 'functionCtrl'
})

.state('controllerProperties',
{
  url         : '/controllerProperties',
  templateUrl : 'AngularJS_Controllers/ControllerProperties.html',
  controller  : 'propertiesCtrl'
})

.state('directiveRestrict_A',
{
  url         : '/directiveRestrict_A',
  templateUrl : 'AngularJS_Directives/DirectiveWithRestrictions.html',
})

.state('directiveAsAttribute',
{
  url         : '/directiveAsAttribute',
  templateUrl : 'AngularJS_Directives/UsingNewDirectiveAsAttribute.html',
})

.state('directiveAsClass',
{
  url         : '/directiveAsClass',
  templateUrl : 'AngularJS_Directives/UsingNewDirectiveAsClass.html',
})

.state('directiveAsComment',
{
  url         : '/directiveAsComment',
  templateUrl : 'AngularJS_Directives/UsingNewDirectiveAsComment.html',
})

.state('makeNewDirective',
{
  url         : '/makeNewDirective',
  templateUrl : 'AngularJS_Directives/MakeNewDirective.html',
})

.state('ng-modelDirective',
{
  url         : '/ng-modelDirective',
  templateUrl : 'AngularJS_Directives/TheNg-ModelDirective.html',
})

.state('ng-clickDirective',
{
  url         : '/ng-clickDirective',
  templateUrl : 'AngularJS_Events/Ng-ClickDirective.html',
  controller  : 'clickCtrl'
})

.state('ng-hide_ng-showDirective',
{
  url         : '/ng-hide_ng-showDirective',
  templateUrl : 'AngularJS_Events/Ng-Hide_Ng-ShowDirective.html',
  controller  : 'hide_showCtrl'
})

.state('ng-modelDirectiveModel',
{
  url         : '/ng-modelDirectiveModel',
  templateUrl : 'AngularJS_Models/AngularJSModel.html',
  controller  : 'modelCtrl'
})

.state('twoWayBindingModel',
{
  url         : '/twoWayBindingModel',
  templateUrl : 'AngularJS_Models/ModelWithTwo-WayBinding.html',
  controller  : 'twoWayBindingCtrl'
})

.state('ng-hideDirective',
{
  url         : '/ng-hideDirective',
  templateUrl : 'AngularJS_HTML_DOM/Ng-HideDirective.html',
})

.state('emailValidation',
{
  url         : '/emailValidation',
  templateUrl : 'AngularJS_Models/ModelWithValidation.html',
})

.state('usingCSSValidation',
{
  url         : '/usingCSSValidation',
  templateUrl : 'AngularJS_Models/SetCSSClassWhenFieldIsInvalid.html',
})

.state('validationStatus',
{
  url         : '/validationStatus',
  templateUrl : 'AngularJS_Models/FormAndItsCurrentValidationStatus.html',
})

.state('ng-showDirective',
{
  url         : '/ng-showDirective',
  templateUrl : 'AngularJS_HTML_DOM/Ng-showDirective.html',
})

.state('ng-showBasedOnCondition',
{
  url         : '/ng-showBasedOnCondition',
  templateUrl : 'AngularJS_HTML_DOM/Ng-ShowBasedOnCondition.html',
})

.state('filterCurrency',
{
  url         : '/filterCurrency',
  templateUrl : 'AngularJS_Filters/ExpressionFilterCurrency.html',
  controller  : 'currencyCtrl'
})

.state('scope',
{
  url         : '/scope',
  templateUrl : 'AngularJS_Scopes/AngularJSScope.html',
  controller  : 'scopeCtrl'
})

.state('differentScope',
{
  url         : '/differentScope',
  templateUrl : 'AngularJS_Scopes/DifferentScopes.html',
  controller  : 'differentScopeCtrl'
})

.state('rootScope',
{
  url         : '/rootScope',
  templateUrl : 'AngularJS_Scopes/RootScope.html',
  controller  : 'blockCtrl'
})

.state('inputFilter',
{
  url         : '/inputFilter',
  templateUrl : 'AngularJS_Filters/InputFilters.html',
  controller  : 'inputFilterCtrl'
})

.state('usingfilter',
{
  url         : '/usingfilter',
  templateUrl : 'AngularJS_Filters/UsingfilterInFilters.html',
  controller  : 'inputFilterCtrl'
})

.state('ng-disabledDirective',
{
  url         : '/ng-disabledDirective',
  templateUrl : 'AngularJS_HTML_DOM/Ng-DisabledDirective.html',
  controller  : 'disabledCtrl'
})

.state('filterUsingUpperLower',
{
  url         : '/filterUsingUpperLower',
  templateUrl : 'AngularJS_Filters/ExpressionFilterUppercaseLowerCase.html',
  controller  : 'upperlowerFilterCtrl'
})

.state('ng-repeatDirectiveArray',
{
  url         : '/ng-repeatDirectiveArray',
  templateUrl : 'AngularJS_Directives/TheNg-repeatDirective(with Arrays).html',
})

.state('expressionWithArray',
{
  url         : '/expressionWithArray',
  templateUrl : 'AngularJS_Expressions/ExpressionWithArrays.html',
})

.state('ng-bindWithArray',
{
  url         : '/ng-bindWithArray',
  templateUrl : 'AngularJS_Expressions/UsingNg-bindWithArrays.html',
})

.state('expressionWithNumber',
{
  url         : '/expressionWithNumber',
  templateUrl : 'AngularJS_Expressions/ExpressionWithNumbers.html',
})

.state('ng-bindWithNumber',
{
  url         : '/ng-bindWithNumber',
  templateUrl : 'AngularJS_Expressions/UsingNg-bindWithNumbers.html',
})

.state('expressionWithObject',
{
  url         : '/expressionWithObject',
  templateUrl : 'AngularJS_Expressions/ExpressionWithObjects.html',
})

.state('ng-bindWithObject',
{
  url         : '/ng-bindWithObject',
  templateUrl : 'AngularJS_Expressions/UsingNg-bindWithObjects.html',
})

.state('expressionWithString',
{
  url         : '/expressionWithString',
  templateUrl : 'AngularJS_Expressions/ExpressionWithStrings.html',
})

.state('ng-bindWithString',
{
  url         : '/ng-bindWithString',
  templateUrl : 'AngularJS_Expressions/UsingNg-bindWithString.html',
})

.state('ng-repeatDirectiveObject',
{
  url         : '/ng-repeatDirectiveObject',
  templateUrl : 'AngularJS_Directives/TheNg-repeatDirective(WithObjects).html',
})

.state('customCurrencyUsingFilter',
{
  url         : '/customCurrencyUsingFilter',
  templateUrl : 'AngularJS_Filters/indianRupeeUsingCustomFilter.html',
  controller  : 'customFilterCtrl'
})
.state('additional',
{
  url         : '/additional',
  templateUrl : 'Angular_Basic/additional.html',
  controller  : 'addCtrl'
});


  $urlRouterProvider.otherwise('/register');
}]);
