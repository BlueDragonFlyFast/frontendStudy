fetch('./dateAndTime.json')
    .then((response) => response.json())
    .then((json) => {
        console.log('test');
        console.log(json.Time);
        console.log(json);
        console.log(JSON.stringify(json));

        let wordArray = ["oneMoreWord", "axXa", "newWord", "no Way", "zero", "zero", "Mommy", "mommy", "mamma", 'aa'];

        console.log(wordArray);

        wordArray = wordArray.sort((a, b) => {
            if (a.toUpperCase() > b.toUpperCase()) {
                return -1;
            }
            if (a.toUpperCase() < b.toUpperCase()) {
                return 1;
            }
            return 0;
        });

        console.log(wordArray);
    });
