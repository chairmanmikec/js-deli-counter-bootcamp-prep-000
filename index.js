var katzDeliLine = [];

function takeANumber(katzDeliLine,name){
  katzDeliLine.push(name);
  return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`
}

function nowServing(katzDeliLine){
  if (katzDeliLine.length > 0) {
    return `Currently serving ${katzDeliLine[0]}.`
  } else {
    return 'There is nobody waiting to be served!'
  } return  katzDeliLine.shift()
}

function currentLine(katzDeliLine){
  var newArray=[];
  if (katzDeliLine.length > 0){
    for (var i=0; i<katzDeliLine.length; i++){
    return newArray.push(`${i+1}. ${katzDeliLine[i]}`)
  }
  return `The line is currently: ${newArray}`
  } else {
    return 'The line is currently empty.'
  }
}