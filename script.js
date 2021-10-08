var rootEl = $('.container');

var saveButton = $('<button>');

var textArea = $('text')

saveButton.text('save');

saveButton.attr('class', 'saveBtn');

rootEl.append(saveButton);

saveButton.onclick = function() {localStorage.setItem('text', textArea.content )}

console.log(localStorage)

window.onstorage = () => {

    return (window.localStorage.getItem(textArea));
  };


getTime();

function getTime(){
    var currentTime = moment().format('LT');
    $('.time-block').each(function(){
        var timeBlock = '.time-block'
        var time = '.hour'
        if(currentTime < time){
             $(timeBlock)($(this).addclass('future'))
        } else {
            $(timeBlock)($(this).addclass('past'))
        }
    });
  };