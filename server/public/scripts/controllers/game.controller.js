gameApp.controller('GameController', ['GameService', function(GameService) {
    let self = this;

    let twitch = GameService;

    //LINK FOR GET GAME FUNCTION
    self.getGame = twitch.getGame;
    
    //link for game Array
    self.gameLib = twitch.gameLib;

    //link for type array
    self.typeArray = twitch.typeArray;

    //link for POST req
    self.addGame = twitch.addGame;
    self.gameToAdd = twitch.gameToAdd;

    //link for DELETE REQ
    self.removeGame = function(game) {
        console.log(game.id);
        twitch.removeGame(game.id);
    };

    //LINK FOR PUT RATING REQ
    self.changeGameScore = twitch.changeGameScore;

    //LINK FOR FAVORITE
    self.favoriteGame = twitch.favoriteGame;
}]);