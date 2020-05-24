function somaDosPares(x){
    var soma =0;
    for(i=0; i<=x;i++)
    if( i%2==0){
     soma =soma + i;
    
}
console.log(soma);
}

somaDosPares(10);