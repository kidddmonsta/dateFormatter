function dateFormatter(blockId) {
    $.getJSON('date.json').then(function (dateFormat) {
        var months;
        var newDate;
        var newDateArray = [];
        settings = dateFormat
        //settings.dateArray.forEach(function (date, index) {
        /*var newDate = date.replace(date, moment(date).format("YYYY-MM-DD"));
        console.log(newDate);
        newDateArray.push(newDate);
        return newDateArray
        console.log(newDateArray);*/
        settings.dateArray.forEach(function (seria, index) {
            newSeria = seria.split(" ");
            //console.log(seria);
            //console.log(newSeria);
            switch (newSeria[0]) {
                case "янв":
                    months = '01';
                    break;
                case "фев":
                    months = '02';
                    break;
                case "мар":
                    months = '03';
                    break;
                case "апр":
                    months = '04';
                    break;
                case "май":
                    months = '05';
                    break;
                case "июн":
                    months = '06';
                    break;
                case "июл":
                    months = '07';
                    break;
                case "авг":
                    months = '08';
                    break;
                case "сен":
                    months = '09';
                    break;
                case "окт":
                    months = '10';
                    break;
                case "ноя":
                    months = '11';
                    break;
                case "дек":
                    months = '12';
                    break;
                /*default:
                    xAxis[index] = seria[settings.timeDimension];
                    break;*/
            }
            newDate = newSeria[1] + '-' + months + '-01';
            newDateArray.push(newDate);
            return newDateArray
            /*settings.series.forEach(function (value, ind) {
                if (typeof seriesDataValues[value] == 'undefined') {
                    seriesDataValues[value] = [];
                }
                seriesDataValues[value][index] = seria[value];
            });*/
        });
        console.log(newDateArray);
    })

    //})
}