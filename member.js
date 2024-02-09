function skillsMember(){
    return{
        restrict: 'E',
        templateUrl: 'app/views/skills-member.html',
        controller: 'skillsMemberController',
        controllerAs: 'vm',
        bindToController: true,
        scope: {
            member: '='
        }
    };
}