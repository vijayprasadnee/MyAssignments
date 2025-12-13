let browserName="chrome"
let testType="Sanity"

function launchBrowser(browserName)
{
    if (browserName=="chrome")
        console.log("This is CHROME Browser")
    else 
        console.log("This is not CHROME Browser")
}

function testtype(testType)
{
    switch (testType){
        case "Sanity":
            console.log("This is Sanity")
            break;
        case "Regression":
            console.log("This is Regression")
            break;
        default:
            console.log("Doesnt match with any of switch")
            break;
    }
}

launchBrowser(browserName)
testtype(testType)