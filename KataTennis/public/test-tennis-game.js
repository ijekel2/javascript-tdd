QUnit.test('Tennis game test number 1', function(assert){
    // Create new game
	const gameOne = new TennisGame('Nadal', 'Federer');
	assert.equal(gameOne.playerOneScore, 0, 'Player One score should be zero');
	assert.equal(gameOne.playerTwoScore, 0, 'Player Two score should be zero');

	// Player One scores first
    gameOne.playerOneScores();
    assert.equal(gameOne.getScore(), 'fifteen-love');

    // Player two ties the game
    gameOne.playerTwoScores();
    assert.equal(gameOne.getScore(), 'fifteen-all');

    // Game goes to deuce
    gameOne.playerOneScores();
    gameOne.playerOneScores();
    gameOne.playerTwoScores();
    gameOne.playerTwoScores();
    assert.equal(gameOne.getScore(), 'deuce');

    // Player two gains advantage
	gameOne.playerTwoScores();
	assert.equal(gameOne.getScore(), 'advantage Federer');

	// Player one scores 3 points to win
    gameOne.playerOneScores();
    gameOne.playerOneScores();
    gameOne.playerOneScores()
    assert.equal(gameOne.getScore(), 'Nadal wins!');

});

QUnit.test('Tennis game test number 2', function(assert){
    // Create new game
    const gameTwo = new TennisGame('Del Potro', 'Djokovic');
    assert.equal(gameTwo.playerOneScore, 0, 'Player One score should be zero');
    assert.equal(gameTwo.playerTwoScore, 0, 'Player Two score should be zero');

    // Player two scores first
    gameTwo.playerTwoScores();
    assert.equal(gameTwo.getScore(), 'love-fifteen');

    // Player one ties the game
    gameTwo.playerOneScores();
    assert.equal(gameTwo.getScore(), 'fifteen-all');

    // Player one gains advantage
    gameTwo.playerOneScores();
    gameTwo.playerOneScores();
    gameTwo.playerTwoScores();
    gameTwo.playerTwoScores();
    gameTwo.playerOneScores();
    assert.equal(gameTwo.getScore(), 'advantage Del Potro');

    // Player two scores 3 points to win
    gameTwo.playerTwoScores();
    gameTwo.playerTwoScores();
    gameTwo.playerTwoScores();
    assert.equal(gameTwo.getScore(), 'Djokovic wins!');

});


