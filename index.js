function takeANumber(katzDeliLine,name){
  katzDeliLine.push(name);
  return katzDeliLine.length
}

function nowServing(katzDeliLine){
  if(katzDeliLine>0){
    return katzDeliLine[0]
  } else {
    return 'There is nobody waiting to be served!'
  }
}