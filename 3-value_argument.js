const firstArgument = process.argv.slice(2);

if (firstArgument[0]){
   console.log(firstArgument[0]);
}else {
    console.log('No argument');
}
