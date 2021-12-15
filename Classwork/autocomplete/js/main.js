// function printCountry(response){
//     let country = response[0];
//     $("#name").html(country['name']['common']);
//     $("#capital").html(country['capital']);
//     preloader.hide();
// }

// const preloader = $("#preloader");
//
// $(document).ajaxStart(()=>{
//     preloader.show();
// })
//
// $(document).ajaxStop(()=>{
//     preloader.hide();
// })

// preloader.show();

$.getJSON('https://restcountries.com/v2/all',
        (countries)=>{
        const options = {
            data: countries,
            getValue: 'name',
            theme: 'square',
            list:{match: {enable: true}},
            template: {
                type: 'iconLeft',
                fields:{
                    iconSrc: "flag"
                }
            }
        };
        $("#country").easyAutocomplete(options);
});


// $.ajax({
//    method: "GET",
//    url: "https://restcountries.com/v2/all?fields=name",
//    //  beforeSend: function (){preloader.show()},
//    success: printCountry
//    //  complete: () =>preloader.hide()
// });




























