// 1. Skaičiaus lygumas
// Parašyk funkciją, kuri priima skaičių ir grąžina "Even", jei skaičius yra lyginis, ir "Odd", jei skaičius yra nelyginis.

// function lyginis(skaicius) {
//   if (skaicius % 2 ===0) {
//      return "lyginis";
//  }   else {
//      return "nelyginis";
//  }
// }
// console.log(lyginis(5));

// 2. Pasukant tekstą atvirkščiai
// Parašyk funkciją, kuri priima eilutę (tekstą) ir grąžina tą eilutę atvirkštine tvarka.


// function reverse(tekstas) {
//   return tekstas.split('').reverse().join('');
// }

function reverse(tekstas) {
    return tekstas.split('').reverse().join('');
  }
  
  console.log(reverse("Laba diena BIT"));
  let originalText = "Labas pasauli!";
  let reversedText = reverse(originalText);
  console.log(reversedText);
  
  // 3. Skaičių kvadratai
  // Parašyk funkciją, kuri priima masyvą skaičių ir grąžina naują masyvą, kurio kiekvienas elementas yra atitinkamo pradinio masyvo elemento kvadratas.
  
  function kvadratu(array) {
    return array.map((a) => a * a);
  }
  
  console.log(kvadratu([10, 2, 6, 4, 8, 10, 16])); 
  
  // 4. Skaičių suma
  // Parašyk funkciją, kuri priima du skaičius ir grąžina jų sumą.
  
  function suma(a, b) {
    return a + b;
  }
  
  let rezultatas = suma(5, 7);
  console.log(rezultatas);
  
  // 5. Kelių skaičių suma
  // Parašyk funkciją, kuri priima masyvą skaičių ir grąžina jų sumą.
  
  function reduce(skaiciai) {
    return skaiciai.reduce((a, b) => a + b, 0);
  }
  
  console.log(reduce([10, 2, 6, 4, 8, 8, 10, 16])); 
  
  // 6. Teksto simbolių skaičiavimas
  // Parašyk funkciją, kuri priima eilutę ir grąžina objektą, kuriame yra skirtingų simbolių skaičius.
  
  function diff(text) {
    const count = {};
    for (const char of text) {
      count[char] = (count[char] || 0) + 1;
    }
    return count;
  }
  
  console.log(diff("Laba diena su vistiena"));
  
  // 7. Didžiausias skaičius
  // Parašyk funkciją, kuri priima masyvą skaičių ir grąžina didžiausią skaičių iš masyvo.
  
  function maziausia(skaiciai) {
    return skaiciai.reduce((a, b) => (a < b ? a : b), Infinity);
  }
  
  // Pavyzdys
  console.log(maziausia([1, 3, 7, 2, 5])); 
  console.log(maziausia([-5, -2, -10]));   
  
  
  // 8. Mažiausias skaičius
  // Parašyk funkciją, kuri priima masyvą skaičių ir grąžina mažiausią skaičių iš masyvo.
  
  // function maziausia(skaiciai) {
  //   return skaiciai.reduce((a, b) => (a < b ? a : b));
  // }
  
  // console.log(maziausia([1, 3, 7, 2, 5])); 
  // console.log(maziausia([-5, -2, -10]));  
  
  
  
  // 9. Daugkartiniai žodžiai
  // Parašyk funkciją, kuri priima žodį ir skaičių, ir grąžina tą žodį, kartotą tiek kartų, kiek nurodytas skaičius.
  
  function pakartotasZodis(zodis, skaicius) {
    return zodis.repeat(skaicius);
  }
  
  console.log(pakartotasZodis("Mokomes ", 5)); 
  
  
  // 10. Fibonacci seka
  // Parašyk funkciją, kuri grąžina pirmuosius n Fibonacci sekos skaičius.
  
  function fibonacci(n) {
    if (n <= 0) return []; 
    if (n === 1) return [0]; 
  
    const result = [0, 1];
  
    for (let i = 2; i < n; i++) {
      result.push(result[i - 1] + result[i - 2]); 
    }
  
    return result;
  }
  
  console.log(fibonacci(0));  
  console.log(fibonacci(1));  
  console.log(fibonacci(5));  
  console.log(fibonacci(10)); 
  
  // 11. Masivo elementų skaičiavimas
  // Parašyk funkciją, kuri priima masyvą ir grąžina jo ilgį (elementų skaičių).
  
  function arrayLength(masyvas) {
    return masyvas.length;
  }
  
  console.log(arrayLength([10, 2, 6, 4, "Pavadinimas", "zodis"])); 
  
  // 12. Filtravimas pagal sąlygas
  // Parašyk funkciją, kuri priima masyvą skaičių ir grąžina naują masyvą, kuriame yra tik teigiami skaičiai.
  
  function teigiami(skaiciai) {
    return skaiciai.filter((skc) => skc > 0);
  }
  console.log(teigiami([10, -2, 6, -4, 8, 8, -10, 16]));
  
  // 13. Rask eilutės ilgį
  // Parašyk funkciją, kuri priima eilutę ir grąžina tos eilutės ilgį.
  
  function ilgis(eilute) {
    return eilute.length;
  }
  
  console.log(ilgis("Laba dieba sy vistiena"));
  
  
  
  // 14. Patikrink, ar masyve yra skaičius
  // Parašyk funkciją, kuri priima masyvą ir skaičių, ir grąžina true, jei masyve yra tas skaičius, ir false, jei nėra.
  
  function arYraSkaicius(masyvas, skaicius) {
    if (masyvas.includes(skaicius)) {
      return true
    }
      return false
  }
  console.log(arYraSkaicius([10, -2, 6, -4, 8, 8, -10, 16]));
  
  // 15. Apskaičiuok skaičiaus faktorialą
  // Parašyk funkciją, kuri priima skaičių ir grąžina jo faktorialą (pvz., 5! = 5 × 4 × 3 × 2 × 1).
  
  function faktorialas(skaicius) {
    let result = 1;  
    for (let i = skaicius; i > 1; i--) {
      result *= i; 
    }
    return result; 
  }
  
  console.log(faktorialas(5));
  console.log(faktorialas(0)); 
  console.log(faktorialas(7)); 
  
  
  // 16. Masyvo rūšiavimas
  // Parašyk funkciją, kuri priima masyvą skaičių ir grąžina jį surūšiuotą nuo mažiausio iki didžiausio.
  
  function rusiuoti(masyvas) {
    return masyvas.sort((a, b) => a - b);
  }
  
  console.log(rusiuoti([10, -2, 6, -4, 8, 8, 10, 16]));
  
  
  // 17. Pašalink dublikatus iš masyvo
  // Parašyk funkciją, kuri priima masyvą ir grąžina naują masyvą be pasikartojančių elementų.
  
  function dublikatai(masyvas) {
    const matyti = {};
    return masyvas.filter(elementas => {
      if (!matyti[elementas]) {
        matyti[elementas] = true;
        return true;
      }
      return false;
    });
  }
  
  console.log(rusiuoti([10, -2, 6, -4, 8, 8, 10, 16]));
  
  // 18. Teksto simbolių dažnio skaičiavimas
  // Parašyk funkciją, kuri priima eilutę ir grąžina objektą, kurio raktai yra simboliai, o reikšmės yra tų simbolių dažnis eilutėje.
  
  function daznis(text) {
    const count = {};
    for (const char of text) {
      count[char] = (count[char] || 0) + 1;
    }
    return count;
  }
  
  console.log(daznis("BIT studentai"));
  
  // 19. Didžiųjų raidžių keitimas į mažąsias ir atvirkščiai
  // Parašyk funkciją, kuri priima eilutę ir grąžina tą pačią eilutę, bet su pakeistomis didžiosiomis raidėmis į mažąsias ir atvirkščiai.
  
  function raiderInvert(text) {
    return text
      .split('') 
      .map(simbolis => 
        simbolis === simbolis.toUpperCase()
          ? simbolis.toLowerCase() 
          : simbolis.toUpperCase() 
      )
      .join(''); 
  }
  
  console.log(raiderInvert("BIT sudeNtai MOKosi programuoti"));
  
  // 20. Patikrink, ar skaičius yra pirminis
  // Parašyk funkciją, kuri priima skaičių ir grąžina true, jei jis yra pirminis, ir false, jei nėra.
  
  function pirminis(skaicius) {
    let isPrime = true;
    if (skaicius > 1) {
      for (let i = 2; i < skaicius; i++) {
        if (skaicius % i === 0) {
          isPrime = false;
          break;
        }
      }
   
      if (isPrime) {
        return true;
      } else {
        return false;
      }
    }
  }
  console.log(pirminis(29));