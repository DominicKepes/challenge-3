// Assignment Code
var generateBtn = document.querySelector("#generate")
var promptList = ["Choose Password length (8-128)", "Include Lowercase? (y/n)", "Include Uppercase? (y/n)", "Include numbers? (y/n)", "Include special characters? (y/n)"]
// var promptList = ["Choose Password length"]


function promt(toPrompt)
{
  console.log("Prompt: " + toPrompt)
  var ans = window.prompt(toPrompt)
  for (a = 0; a < 5; a++) 
  {
    if(ans == "y" || ans == "n")
      return ans.toLowerCase()
    else if(ans === null)
      return "quit"
    else if(ans >= 8 && ans <= 128)
    {
      return ans
    }
    else
    {
      window.alert("Invalid Responce, Try Again")
      ans = window.prompt(toPrompt)
    }

  }
  alert("To many invalid responces, Quitting")
  return "quit"
}

function generatePassword(list)
{
  console.log("generatePassword")
  var promptAns = []
  for (i = 0; i < list.length; i += 1)
  {
    var elm = list[i]
    // console.log(elm)

    var answer = promt(elm)
    if(answer === "quit")
      return answer
    promptAns.push(answer)
  }
  console.log(promptAns)
  return promptAns
}

// Write password to the #password input
function writePassword(arr) 
{
  console.log("writePassword")
  var password = generatePassword(arr)
  if(password === "quit")
  {
    console.log("User Quit")
    return
  }
  var passwordText = document.querySelector("#password")

  passwordText.value = password

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword(promptList))
