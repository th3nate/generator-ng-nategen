(function () {
    'use strict';

    angular.module('home', ['common', 'ui.sortable', 'gantt', 'gantt.table', 'gantt.movable', 'gantt.tooltips']);

    angular
        .module('home')
        .config(function ($stateProvider) {

            $stateProvider.state('shell.home', {
                abstract: true,
                url: '/home',
                views: {
                    'shellNavView': {
                        template: '<nav-private></nav-private>'
                    },
                    'shellContentView': {
                      templateUrl: 'home/templates/home-template.html',
                      controller: 'homeController',
                      controllerAs: 'vm'
                    }
                }
            })

            .state('shell.home.dashboard', {
                url: '/dashboard',
                views: {
                  'shellSideView@shell': {
                      template: '<sidenav-dashboard></sidenav-dashboard>'
                  },
                  'homeContentView': {
                      template: '<dashboard></dashboard>'
                  }
                }
            })

              .state('shell.home.plans', {
                  abstract:true,
                  url: '/plans',
                  views: {
                      'shellSideView@shell': {
                          template: '<sidenav-plan></sidenav-plan>'
                      }
                  }
              })

            .state('shell.home.plans.goals', {
                url: '/goals',
                views: {
                    'homeContentView@shell.home': {
                        template: '<plan-goal></plan-goal>'
                    },

                }
            })

            .state('shell.home.plans.risks', {
                url: '/risks',
                views: {
                    'homeContentView@shell.home': {
                        template: '<plan-risk></plan-risk>'
                    }
                }
            })

            .state('shell.home.plans.portfolios', {
                url: '/portfolios',
                views: {
                    'homeContentView@shell.home': {
                        template: '<plan-portfolio></plan-portfolio>'
                    }
                }
            })

              .state('shell.home.money', {
                  abstract:true,
                  url: '/money',
                  views: {
                      'shellSideView@shell': {
                          template: '<sidenav-money></sidenav-money>'
                      }
                  }
              })

                .state('shell.home.money.transactions', {
                    url: '/transactions',
                    views: {
                        'homeContentView@shell.home': {
                            template: '<money-transaction></money-transaction>'
                        }

                    }
                })
              .state('shell.home.vault', {
                  url: '/vault',
                  views: {
                      'shellSideView@shell': {
                        template: '<sidenav-dashboard></sidenav-dashboard>'
                    },
                      'homeContentView@shell.home': {
                          template: '<vault></vault>'
                      }

                  }
              })
            .state('shell.home.profile', {
                url: '/userprofile',
                views: {
                    'shellSideView@shell': {
                        template: '<sidenav-dashboard></sidenav-dashboard>'
                    },
                    'homeContentView@shell.home': {
                        template: '<user-profile></user-profile>'
                    }

                }
            })
            .state('shell.home.tasks', {
                url: '/tasks',
                views: {
                    'shellSideView@shell': {
                        template: '<sidenav-dashboard></sidenav-dashboard>'
                    },
                    'homeContentView@shell.home': {
                        template: '<task-container></task-container>'
                    }

                }
            })

             .state('shell.home.documents', {
                 url: '/documents',
                 views: {
                     'shellSideView@shell': {
                         template: '<sidenav-dashboard></sidenav-dashboard>'
                     },
                     'homeContentView@shell.home': {
                         template: '<document></document>'
                     }

                 }
             });


            /* Add New States Above */

        });

})();
