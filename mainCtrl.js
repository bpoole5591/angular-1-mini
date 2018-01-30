angular.module('app').controller('mainCtrl', function($scope) {
  $scope.test = 'Some value';
  $scope.friends = ['Charlie Brown', 'Linus', 'Lucy', 'Snoopy'];
  $scope.removeFriend = index => {
    $scope.friends.splice(index, 1);
  };
  $scope.addFriend = str => {
    $scope.friends.push(str);
    $scope.input = "";
  }
});
