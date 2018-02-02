function takeANumber(katzDeliLine,name){
  katzDeliLine.push(name);
  return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`
}

function nowServing(katzDeliLine){
  if(katzDeliLine>0){
    return katzDeliLine[0]
  } else {
    return 'There is nobody waiting to be served!'
  }
}

function currentLine(katzDeliLine){
  if (katzDeliLine>0){
    for (i=0;i<katzDeliLine.length; i++ ){
      return `
    }
  } else
}