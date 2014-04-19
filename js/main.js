$(document).ready(function(){

    var $menuIcon = document.getElementsByClassName("menu-icon")[0],
        $offCanva = document.getElementById('off-canvas');

    $menuIcon.addEventListener('click', function() {
        toggleClass($menuIcon, 'close');
        toggleClass($offCanva, 'toggled');
    }, false);

    function toggleClass(element, className) {
        if (!element || !className) { return; }
        var classString = element.className, nameIndex = classString.indexOf(className);
        if (nameIndex == -1) { 
            classString += ' ' + className;
        } else {
            classString = classString.substr(0, nameIndex) + classString.substr(nameIndex+className.length);
        }
        element.className = classString;
    }

    // Push State
    if (history.pushState) {
        var selector = "#blogroll",
        loadSelector = " " + selector + " > *",
        container = $(selector).on("click", "li[role='pagenavigation'] a", function() {
            var href = $(this).attr("href");
            $("html, body").animate({ "scrollTop": 0 }, 400);
            history.pushState({ "path": href }, null, href);
            container.load(href + loadSelector);
            return false;
        });

        $(window).bind("popstate", function(e) {
            var state = e.originalEvent.state;
            if (state) {
                $("window, body").animate({ "scrollTop": 0 }, 200);
                    container.load(state.path + loadSelector);
                }
            });
        history.replaceState({ "path": location.href }, "");
    }

    // Whiskey Checklist
    $('.checkList li').on('click', function (e) {
        $(this).toggleClass('drank');
    });


});
