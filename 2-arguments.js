const firstArgument = process.argv.slice(2);

if (firstArgument.length==0){
    console.log("No Argument");
}
else if(firstArgument.length==1){
    console.log("Arggument found");
}

console.log('${firstArgument.length} arguments found')