$(document).ready(function () {
    let count = 0;
    if(localStorage.getItem('count')!= null){
        count = parseInt(localStorage.getItem('count'))+1;
    }
    for(let i = 0;i<localStorage.length;i++){
        let key = localStorage.key(i);
        if(key == 'debug' || key == 'count'){
            continue;
        }
        let item = localStorage.getItem(key);
        $(".list").append(`<li class="listItem" id="listItem${key}">${item}<svg id="${key}" class="trash" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 7h14m-9 3v8m4-8v8M10 3h4a1 1 0 0 1 1 1v3H9V4a1 1 0 0 1 1-1ZM6 7h12v13a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V7Z"/>
            </svg></li>`)
        
    }
    $(".button").click(function () { 

        let item = $(".input").val();
        if (item == ""){
            return;         //If no content, do nothing
        }
        $(".list").append(`<li class="listItem" id="listItem${count}">${item}<svg id="${count}" class="trash" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 7h14m-9 3v8m4-8v8M10 3h4a1 1 0 0 1 1 1v3H9V4a1 1 0 0 1 1-1ZM6 7h12v13a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V7Z"/>
            </svg></li>`)
            ///Add content to list
        $(".input").val("");
        localStorage.setItem('count', count);
        localStorage.setItem(count, item);
        count = count + 1;

    });
    $(document).on('click', `.trash`, function (e) {
        e.preventDefault();
        let className = e.currentTarget.className.baseVal;
        let id = e.currentTarget.id;
        if(className == 'trash'){
            $(`#listItem${id}`).remove();
            localStorage.removeItem(id);
        }
        return;
    });
    
});
