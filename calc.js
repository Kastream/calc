let symbs = ['* ', '**', '- ', '+ ', '/ '];
let li = '';
function shower(nli) {
    console.log(nli);
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
    if (nli.slice(-1) == ' ') {
        evener(res);
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
        if (nli.slice(-1) != ')' && isNaN(nli.slice(-1)) || nli.slice(-1) == ' ') {
            nli += '0';
        }
        for (let ind = (nli.lastIndexOf('(')); ind < nli.length; ind ++) {
            if (/^\d+$/.test(nli[ind])) {
                for (let i = 0; i < counter; i ++) {
                    nli = nli + ')';
                }
                shower(nli);
                return false;
            }
            
        }
        if (nli.slice(-1) == ')') {
            for (let i = 0; i < counter; i ++) {
                nli = nli + ')';
            }
            shower(nli);
            return false;
        }
        nli = nli + '0'
        for (let i = 0; i < counter; i ++) {
            nli = nli + ')';
        }
        shower(nli);
    }}
function checker(nli) {
    let counter = -1;
    for (let i =0; i < nli.length; i ++) {
        if (nli[i] == '(') {
            counter ++;
        } else if (nli[i] == ')') {
            counter --;
    }}
    if (counter < 0) {
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
                if (!isNaN(li.slice(-2)) || !isNaN(li.slice(-1))) {
                    console.log('before checking slice in symbs', li.slice(-2));
                    if (symbs.includes(li.slice(-2))) {
                        li += '(';
                    } else {
                    li += ' * (';
                }} else {
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

}})})