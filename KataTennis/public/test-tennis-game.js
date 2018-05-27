QUnit.module('Game One Tests');
const gameOne = new TennisGame('Nadal', 'Federer');

test('When a new game is created, player scores should both be zero', function(assert){
	assert.equal(gameOne.playerOneScore, 0, 'Player One score should be zero')
	assert.equal(gameOne.playerTwoScore, 0, 'Player One score should be zero')
});

test('Player one scores the first point, score is \'fifteen-love\'', function(assert){
	gameOne.playerOneScores();
	assert.equal(gameOne.getScore(), 'fifteen-love');
});

test('Player two ties the game; score is \'fifteen-all\'', function(assert){
	gameOne.playerTwoScores();
	assert.equal(gameOne.getScore(), 'fifteen-all');
});

test('Game goes to deuce; score is \'deuce\'', function(assert){
	gameOne.playerOneScores();
    gameOne.playerOneScores();
    gameOne.playerTwoScores();
    gameOne.playerTwoScores();
    assert.equal(gameOne.getScore(), 'deuce');
});