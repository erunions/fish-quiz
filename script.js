"use strict";

const sliders = document.getElementsByClassName("slider");
const values = [5, 5, 5, 5, 5, 5, 5, 5, 5, 5];
let total = 0;

const result = document.getElementById('result');
const submit = document.getElementById('submit');

for(let i = 0; i < sliders.length; i++) {
    sliders[i].addEventListener("change", function () {
        values[i] = parseInt(sliders[i].value);
        total = values.reduce((a, b) => a + b, 0);
    });
}

submit.addEventListener('click', function() {
    if(total != 0) {
        result.open = true;

        if(total < 20) {
            result.innerHTML = `
            <p>common carp.... cringe.....</p>
            <img src="fish/common-carp.jpg">
            `;
        }
        else if(total < 40) {
            result.innerHTML = `
            <p>tumna fish</p>
            <img src="fish/tuna.jpg">
            `;
        }
        else if(total < 50) {
            result.innerHTML = `
            <p>angry fish grrrr >:(</p>
            <img src="fish/angry-fish.jpg">
            `;
        }
        else if(total < 60) {
            result.innerHTML = `
            <p>the hand fish......</p>
            <img src="fish/handfish.jpg">
            `;
        }
        else if(total < 70) {
            result.innerHTML = `
            <p>holy moly look at that guy go!</p>
            <img src="fish/holy-moly.jpg">
            `;
        }
        else if(total < 80) {
            result.innerHTML = `
            <p>zoogoneticus tequila</p>
            <img src="fish/tequila.jpg">
            `;
        }
        else if(total < 90) {
            result.innerHTML = `
            <p>a̸̛̛͚̒̽̿̉̉̈͊́̂͐́̀̌̈́̍̒̃̅͐̾̉̔͛̿͒̂͗̍̄̌̍̅̕̚͠ͅm̶̨̨̡̨̗̪̘͈͕͚̩̥̜͔̤̮͇͓̱͇̬̻͓͍̝͎̖̗͖̹͇̻̻͌̆̿̉́̏͂̉̀̎̚ͅḑ̷̡̢̛̫̯̦̤̘͓͎͖̹̝̽̅̽̂̀̏̈́̔̃̽̀͑̾̓́̿̓̾̒͋̿͐̆́̈́́͑͒̑̉̑͆̋̕͜͝͝͝g̸̨̨̢̤̦͎̯̠͔͎̭͉̙̻̼͙̜̜̩̦̯̹̯̜̪̹̣͖̟͙͚̮͑͑̈́̎̑̏͑͌̄͐͒̅͗̏̐͗̾̊̄̌̾̄̌̈́̆̀̅͒̍͝͠ͅḩ̴̦̯̠̱̟̫̞̪̤̟̫͚͙̞̣̈́̕ͅb̸̡̡̠̬̥̫͕̙̭̟͓̟̦̥͚̮̝̮̹͚̋̽̏͆͗̀̌̓͛̅̓̊̽͐͋͂̓̾̓͘̕͝ͅǰ̷̩͓̄͐̅̔̏̌͂̐͝͠v̸̧̧̧̨̛͍̳̥͍̝̰̫͈͎̬̟͕̙̼̪̫̦͇̠̘̪̪̗̱̲̖̯̪̺̲̰̖͍͖̀̽̈̈̎̊̿́̀̏̊͌͊͗̿̽̓̅͆̇̐̃̾̎̽̊̀͒̓͝͠ͅí̷̡̨͍̦͖̙̬̤͇̻̹̳͈͔̙̥̦̝̱̻̣̥͐̈́̏͜h̵̢̡̛͚͓͈̭̙̻̹͉̱̪̟̟̯͕̬͍̯̺͇͆͐̔̓͗̄̈́̓̊̌̐̄̏͆̒̆̎̀̔͑̒̆͜͠j̴̢̛̱̞̏͋̈́̒͋̑͗̆̏̇̂̌̾̓͂̿̊̂̎͂͂͊̆͛̕̕s̷̡̛̝͍̳͛̏̽̀̊̈́̀͆̌̅͒͌̀̊͛̐̏͐̅͑̓̆̈̌̍̉̚͝͠͝͝͝͝͝ͅḩ̴̡̛͙̱͈̜̬͉̣̙͎̺͈̜͐͒̋͛̉͑̈̒̒͛̌̈́̅̍̓̽̕͘͜͝ư̶̧̛̻̥͇̯̜͙̰̩̟͇͔͇̲̮̩̝̙̫͕̹͛̎̄̑̌͐̅̉̋͋̔̇̈́̎̚͝͝i̸̡̧̧̧̧̝̱̥͙̱̻̠͙̳͎̝̹̳̙̟̳͎͉͚͂̀́̈͛͛̿͋̌͒́͜ĝ̸̡̢̜͚̟̤͍̳͎̪̥̣̠͓̙̜͓̪̰̜̙̳̞̜̦̟̞̻͖̩̞͔͕́̇̆͐̋̀̐͑͂́́̄̾̆̀͆̀̓̾̾͘̚̕͠͝͠͠͝͝ḫ̸̢͚̞͖̻͔͙̪̮̤͕̜̳̬̤̼̱͔̬̚͜ę̶̨̨͓͇͕͍̺̣͎͍͉̩̱̭̰̬̣̥̤̯͎̊̍̿̌͊̎͑͊͛̽̊̒͂̓̑́͛̆̾̈́̊̚̕̚̕̕̕͝͝͝ư̴̧̧̰͉̻̟͖͎̮̯̭̥̤͇̜̮͔̺̞͕͈̠͓̖͖̱͆̓̋̀͗̃̿͆̽̍̐̉̊̀̽͆̄͒͗͋̂͝ͅw̸̨̨̙̰̤̯̣̪̖̩̥̲͍͍͚̯̺̫̩̩̦̍̽̉͋͐͋̽̍͆̔̉͂̇̍̈́̀̕̕͘͜͝͝ͅh̶̨̧̢̬͍̥͉̗̱̗̬̤̪̣̖̲̻͙͔̫͓̦̥̠̥̯̣̝̪͐̑ͅj̸̨͈̯̣̫̥͇̥̪̠̠̫̝͉̯͈̣͈̊̏̋̇̒̓͛̂́̓̔̎̇̾͗͆̆͆̿̌̐̈͐̅̆̎̀͘̕̚͘̚̚͝͝ǧ̴̬͓̠͕̲̫͍͊̈̅̄͗̀̽͒͌̃̓̈́́̍̉̐͛̓͗̄̓̓̍́́̽͠͝ḍ̸̢̯̥̺͉̩͕̼̻̲̰̼̜͇̦͉̲͍̠̺̟́͐̿́̂͌̀͂͆̃́̽́̓̌͝͠͠͝h̸̨̧̲̯͈̖̰̜̜͖̘͔̺̭͓̯̤̟̥̦̫͂́͛̇̆̽̔̆̀͛̾̒̕͘͜͝a̶̢̛̛̩͈̼͕̻͖̻̹̬͈̥̳̋͊̌̂̀̇̌̾̀͑͌͆̏͛̐̈́͗͊̈́̈́̍̐̋͘͘͜s̷̛̱̳͕̘̳̮̯͈͍̳̻͖͎͈̜̜̥̲̼̏̏̉̊̄̽͗̽̃̑͆̍̚͜͝l̵̡̲͚̯͉̭͇̬̠͈̲͚̜̳̤̣͖͚̭͉͔̬̈̿̎͋̒̂̿̓̆͑͆̋̚̕̚ͅk̸̨̧̛̩͖̦͕̰̖̩͔̝̯͇̤͎͔̭͙͓̼̞̪͔̖̪̭̼͔͚͚̳̯̃̓̇̍́̿̌͐́̽͊̎̆̓̚͜ͅf̴͕̹̃̀ͅj̷͕̣̳̣͔̓̓̌s̵̛̞̜̝͎̠͎̻͛̒̈̏͑́͊͐̂̇̓̀͐̂̚a̷̢̢̛̠̦̟̱͚͇̞̗̖͕̳͗̆̀̌͊̓̐̔̿̈́͑̌̌̒̒̏̽̒̓̿̅̈́̂̌̕͘̕͜͝ų̸̡̨̨͕̘̘͕͕̦̜̱̗̗͖̭̭͈̱͙̤̲̣͓̲̺͍̜̖̭̼̭͉̻͔̈́̈̈́̽͆̈́̒̌̍̈͘͘ờ̷̧͎̥̼̻̝͈̺̬̰̋͊̋̆̈́͛̏̌̀̑͐͑͘ì̴̡͚͔̪̻͚̟̣̣̠̠͎͈͎̝̮̣̹̯̠̠͉͔̮̯̟̩̰͖̣̻͕͈͙͆͋̃͋͋̆̚͘̚͜͜ͅf̶̡̨̨̢̬̦̜̣̯̘̻̦͚̘̦̟͈̭̜̗̩̦̠͕͙̠͉͇̥̮̗̼̀͑͋̈́̒̔͐̏̄̓̃͗͆̍̄̈́̍̐͒̅́̌̿̒͘͘͜͠͠͝ͅ</p>
            <img src="fish/wha.jpg">
            `;
        }
        else {
            result.innerHTML = `
            <p>wobbegong!!!!!!!!</p>
            <img src="fish/wobbegong.jpg">
            `;
        }
    }
})