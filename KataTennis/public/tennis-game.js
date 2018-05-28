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
        if(this.playerOneWins())
            console.log(`Game over. ${this.playerOneName} wins!`)
    }

    playerTwoScores() {
        this.playerTwoScore++;
        if(this.playerTwoWins())
            console.log(`Game over. ${this.playerTwoName} wins!`)
    }

    isDeuce(){
        return(this.playerOneScore === this.playerTwoScore && this.playerTwoScore >= 3);
    }

    playerOneHasAdvantage(){
        return (this.playerOneScore >= 4 && (this.playerOneScore - 1) === this.playerTwoScore);

    }

    playerTwoHasAdvantage(){
        return (this.playerTwoScore >= 4 && (this.playerTwoScore - 1) === this.playerOneScore);

    }

    playerOneWins(){
        return((this.playerOneScore - this.playerTwoScore) >= 2 && this.playerOneScore >= 4);
    }

    playerTwoWins(){
        return((this.playerTwoScore - this.playerOneScore) >= 2 && this.playerTwoScore >= 4);
    }

    isTied(){
        return this.playerOneScore === this.playerTwoScore;
    }

    getScore() {

        if(this.isDeuce())
            return 'deuce';
        else if(this.playerOneHasAdvantage())
            return `advantage ${this.playerOneName}`;
        else if(this.playerTwoHasAdvantage())
            return `advantage ${this.playerTwoName}`;
        else if(this.playerOneWins())
            return `${this.playerOneName} wins!`;
        else if(this.playerTwoWins())
            return `${this.playerTwoName} wins!`;
        else if(this.isTied())
            return `${this.translations[this.playerOneScore]}-all`;
        else
            return `${this.translations[this.playerOneScore]}-${this.translations[this.playerTwoScore]}`


    }

}