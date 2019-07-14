const Select7 = {};

Select7.add = (elem, e) => {
    e.stopPropagation();
    var option_text =  elem[elem.selectedIndex].text;
    var option_value =  elem[elem.selectedIndex].value;
    var selected_items = elem.parentElement.querySelector(".select7_items");
    var placeholder = elem.parentElement.querySelector(".select7_placeholder");
    if (option_value === "filler" && option_text === "")
        return;

    placeholder.style.display = "none";

    selected_items.innerHTML += "<div class='select7_item'><div data-option-value='"+ option_value +"' class='select7_content'>"+ option_text +"</div><div class='select7_del' onclick='Select7.remove(this, event);'><div class='select7_x'></div><div class='select7_x'></div></div></div> ";

    elem[elem.selectedIndex].parentElement.removeChild(elem[elem.selectedIndex]);
    if (elem.length == 1)
        elem.style.display = "none";
};

Select7.remove = (elem, e) => {
    e.stopPropagation();
    var option_text = elem.parentElement.querySelector(".select7_content").innerHTML;
    var option_value = elem.parentElement.querySelector(".select7_content").dataset.optionValue;
    var selector = elem.parentElement.parentElement.parentElement.querySelector(".select7_select");
    
    selector.innerHTML += "<option value='"+ option_value +"'>"+ option_text +"</option>";
    
    if (selector.length > 1)
        selector.style.display = "block";
    
    var selected_items = elem.parentElement.parentElement.parentElement.querySelectorAll(".select7_item");
    if (selected_items.length == 1) {
        var placeholder = elem.parentElement.parentElement.parentElement.querySelector(".select7_placeholder");
        placeholder.style.display = "block";
    }

    elem.parentElement.parentElement.removeChild(elem.parentElement);
};

Select7.get = (select7_id, type = "both") => {
    var selected_items = document.getElementById(select7_id).querySelectorAll(".select7_content");

    if (selected_items.length > 0) {
        var selected_values = [];

        switch (type) {
            case "value": {
                for (let i = 0; i < selected_items.length; i++)
                    selected_values = [...selected_values, selected_items[i].dataset.optionValue];
                break;
            }
            case "text": {
                for (let i = 0; i < selected_items.length; i++)
                    selected_values = [...selected_values, selected_items[i].innerHTML];
                break;
            }
            case "both": {
                for (let i = 0; i < selected_items.length; i++)
                    selected_values = [...selected_values, {
                        "text": selected_items[i].innerHTML,
                        "value": selected_items[i].dataset.optionValue,
                    }];
                break;
            }
        }

        return selected_values;
    }
};