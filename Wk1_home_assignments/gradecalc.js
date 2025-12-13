let score=95

function grade(score)
{
    switch (true){
        case score>=90 && score<=99:
            console.log("Outstanding")
            break;
        case(score>=80 && score<=89):
            console.log("Grade A*")
            break;
        case(score>=70 && score <=79):
            console.log("Grade A")
            break;
        default:
            console.log("Out of switch")
            break;
        }
}

grade(score)