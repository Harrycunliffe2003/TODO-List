$(".button").click(function () { 
    let item = $(".input").val();
    if (item == ""){
        return;         //If no content, do nothing
    }
    $(".list").append(`<li class="listItem">${item}</li>`); ///Add content to list
    $(".input").val("");
});