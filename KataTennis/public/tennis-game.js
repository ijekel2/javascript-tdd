class TennisGame {
    constructor(playerOneName, playerTwoName) {
        this.playerOneName = playerOneName;
        this.playerTwoName = playerTwoName;
        this.playerOneScore = 0;
        this.playerTwoScore = 0;
        this.translations = {
            0: "love",
            1: "fifteen",
            2: "thirty",
            3: "forty"
        }

    }

    playerOneScores() {
        this.playerOneScore++;
    }

    playerTwoScores() {
        this.playerTwoScore++;
    }

    getScore() {
        let playerOneScoreTranslation = this.translations[this.playerOneScore];

        if (this.playerOneScore === this.playerTwoScore)
            if (this.playerOneScore >= 3)
                return 'deuce';
        	return `${playerOneScoreTranslation}-all`;

        let playerTwoScoreTranslation = this.translations[this.playerTwoScore];
        return `${playerOneScoreTranslation}-${playerTwoScoreTranslation}`

    }

}