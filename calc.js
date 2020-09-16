let li = ''
function shower(nli) {
    document.querySelector('#result').innerHTML = eval(nli)
}
function display(nli) {    
    document.querySelector('#inp').value = nli.split('**').join('^') + '= ';
    let res = nli;
    if (nli.slice(-1) == ' ') {
        if (nli.slice(-2) == '= ') {
            li = String(eval(nli.slice(0, -3)));
            display(li);
            return false;
        }
        if (checker1(nli)) {
            shower(res + '0');
            return false;
        }
        evener(res);
        return false;
    }
    if (evener(res)) {
        
        document.querySelector('#result').innerHTML = eval(res);
        return false;
    }
}
function checker1 (nli) {
    let counter = 0;
    for (let i =0; i < nli.length; i ++) {
        if (nli[i] == '(') {
            counter ++;
        } else if (nli[i] == ')') {
            counter --;
    }}
    if (counter != 0) {
        return false;
    }
    return true;
}
function evener (nli) {
    let counter = 0;
    for (let i = 0; i < nli.length; i ++) {
        if (nli[i] == '(') {
            counter ++;
        } else if (nli[i] == ')') {
            counter --;
        }}
    if (counter == 0) {
        return true;
    } else {
        if (isNaN(nli.slice(-2))) {
            nli += '0';
        }
        for (let ind = (nli.lastIndexOf('(')); ind < nli.length; ind ++) {
            console.log(nli[ind]);
            if (/^\d+$/.test(nli[ind])) {
                console.log('las is dig')
                for (let i = 0; i < counter; i ++) {
                    nli = nli + ')';
                }
                console.log(nli)
                shower(nli);
                return false;
            }
            
        }
        console.log('las no dig')
        nli = nli + '0'
        for (let i = 0; i < counter; i ++) {
            nli = nli + ')';
        }
        shower(nli);
    }}
function checker(nli) {
    let counter = -1;
    for (let i =0; i < nli.length; i ++) {
        console.log(nli[i]);
        if (nli[i] == '(') {
            counter ++;
        } else if (nli[i] == ')') {
            counter --;
    }}
    if (counter != 0) {
        return false;
    }
    return true;
}

document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('button').forEach(button => {
        button.onclick = function() {
            if (button.id == 'dCE') {
                if (li.slice(-1) == ' '){
                    li = li.slice(0,-3);
                } else {
                    li = li.slice(0,-1);
                }
                if (!li) {
                    li = '0';
                }
                display(li);
                return false;
            }
            if (button.id == 'dC') {
                li = ' '
                display(li);
                return false;
            }
            if (button.id == 'dxy' || button.id == 'dplus' || button.id == 'dminus' ||
            button.id == 'dmult' || button.id == 'ddiv' || button.id == 'deq' ||
            button.id == 'ddeg' || button.id == 'dsqrt') {
                if (li.slice(-2) == '+ ' || li.slice(-2) == '/ ' || li.slice(-2) == '- ' ||
                li.slice(-2) == '* ' || li.slice(-3) == '** ') {
                    if (li.slice(-3) == '** ') {
                        li = li.slice(0, -1);
                    }
                    li = li.slice(0, -3); 
                }
                if (button.id == 'deq') {
                    li += ' = ';
                    display(li);
                    return false;
                }
                /*if (li.slice(-2) == '= ') {
                    li = x;
                    document.querySelector('#inp').value = li;
                }*/
                if (button.id == 'dxy') {
                    li += ' ** '
                    display(li);
                    return false;
                }
                if (button.id == 'ddeg') {
                    li = li.split(' ');
                    let last = li.pop();
                    last += '**2';
                    li.push(last);
                    li = li.join(' ');
                    display(li);
                    return false;
                }
                if (button.id == 'dsqrt') {
                    li = li.split(' ');
                    let last = li.pop();
                    last += '**0.5';
                    li.push(last);
                    li = li.join(' ');
                    display(li);
                    return false;
                }
                li += ` ${button.innerHTML} `;
                display(li);
                return false;
            } else if (button.id == 'cl') {
                if (checker(li)) {
                    li += ')';
                    display(li);
                }
                return false;
            } else if (button.id == 'op') {
                if (li == '') {
                    li += '('
                    display(li);
                    return false;
                }
                if (!isNaN(li.slice(-2))) {
                    li += ' * (';
                } else {
                    li += '(';
                }
                display(li);
                return false;

            }else {
                if (li.slice(-2) == '= ') {
                    li = ' ';
                    document.querySelector('#result').innerHTML = 0;
                }
                li += button.innerHTML;
                display(li);
                return false;
            }
            
            
            
            
            
 
            
            /*if (button.id == 'dC') {
                document.querySelector('#inp').value = 0;
                document.querySelector('#result').innerHTML = 0;
                x = 0
                return false;
            };
            if (button.id == 'dCE') {
                let inp = document.querySelector('#inp').value;
                if (inp != 0) {
                    document.querySelector('#inp').value = inp.substring(0, inp.length-1);
                    document.querySelector('#result').innerHTML = document.querySelector('#result').innerHTML.substring(0, document.querySelector('#result').innerHTML.length-1);
                }
                return false;
            }
            if (x == 0) {
                li = button.innerHTML;
                x = eval(li);
                console.log(x)
                document.querySelector('#inp').value = x;
                document.querySelector('#result').innerHTML = x;
            } else if (button.id == 'dxy' || button.id == 'dplus' || button.id == 'dminus' ||
            button.id == 'dmult' || button.id == 'ddiv' || button.id == 'deq' ||
            button.id == 'ddeg' || button.id == 'dsqrt') {
                if (button.id == 'deq') {
                    if (document.querySelector('#inp').value) {
                        eq = document.querySelector('#inp').value;
                    }
                    x = eval(li + d + eq);
                    li = x;
                    console.log(li);
                    console.log(d);
                    console.log(eq);
                    document.querySelector('#result').innerHTML = x;
                    return false;
                } else if (button.id == 'ddeg') {
                    document.querySelector('#inp').value **= 2;
                    li = li.split(' ');
                    li.pop();
                    li.push(document.querySelector('#inp').value);
                    li = li.join(' ')
                    console.log(li)
                    x = eval(li);
                    document.querySelector('#result').innerHTML = x;
                    return false;
                } else if (button.id == 'dsqrt') {
                    console.log('here')
                    document.querySelector('#inp').value = (document.querySelector('#inp').value**0.5).toFixed(6);
                    li = li.split(' ');
                    li.pop();
                    li.push(document.querySelector('#inp').value);
                    li = li.join(' ')
                    console.log(li)
                    x = eval(li).toFixed(6);
                    document.querySelector('#result').innerHTML = x;
                    return false;
                }
                
                d = button.innerHTML;
                li = x + ` ${button.innerHTML} `;
                document.querySelector('#inp').value = 0;
                document.querySelector('#result').innerHTML = li;
                console.log(li)
            } else {
                if (document.querySelector('#inp').value == 0) {
                    document.querySelector('#inp').value = button.innerHTML;
                } else {
                    document.querySelector('#inp').value += button.innerHTML;
                }
                li += button.innerHTML
                x = eval(li);
                console.log(li)
                document.querySelector('#result').innerHTML = x;
                
            } 
            return false; */
            /*if (button.id == 'dxy' || button.id == 'dplus' || button.id == 'dminus' ||
            button.id == 'dmult' || button.id == 'ddiv' || button.id == 'deq' ||
            button.id == 'ddeg' || button.id == 'dsqrt') {

                if (symb == '') {
                    mat.push(document.querySelector('#inp').value);
                    symb = button.innerHTML;
                    document.querySelector('#inp').value = 0;
                    console.log(symb);
                    document.querySelector('#result').innerHTML += ` ${button.innerHTML} `;
                    return false;
                } else if (symb == '+') {
                    if (button.id == 'ddeg') {
                        document.querySelector('#inp').value **= 2;
                        document.querySelector('#result').innerHTML += `^2`;
                        return false;
                    } else if (button.id == 'dsqrt') {
                        document.querySelector('#inp').value **= 0.5;
                        document.querySelector('#result').innerHTML += `^0.5`;
                        return false;
                    } else if (button)
                    mat[0] = parseFloat(mat[0]) + parseFloat(document.querySelector('#inp').value);
                    if (button.id == 'deq') {
                        symb = '';
                        document.querySelector('#result').innerHTML += ` = ${mat[0]}`;
                        return false;
                    } else {
                        symb = button.innerHTML;
                        document.querySelector('#result').innerHTML += ` = ${mat[0]} ${symb}`;
                    }
                    document.querySelector('#inp').value = 0;
                }
                
                return false;
            }
            */
            
            /*if (document.querySelector('#inp').value != 0) {
                document.querySelector('#inp').value += button.innerHTML;
                document.querySelector('#result').innerHTML += button.innerHTML;
                return false;
            } else if (document.querySelector('#inp').value == 0) {
                document.querySelector('#inp').value = button.innerHTML;
                if (document.querySelector('#result').innerHTML == 0) {
                    document.querySelector('#result').innerHTML = button.innerHTML;
                } else {
                    document.querySelector('#result').innerHTML += button.innerHTML;
                }}
            return false;*/
        }
    });




















});