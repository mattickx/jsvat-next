const croatia={name:"Croatia",codes:["HR","HRV","191"],calcFn:e=>{let a=10,t=0;for(let r=0;r<10;r++)0===(t=(Number(e.charAt(r))+a)%10)&&(t=10),a=2*t%11;var r=Number(e.slice(10,11));return(a+r)%10==1},rules:{multipliers:{},regex:[/^(HR)(\d{11})$/]}};export{croatia};