function setActiveTopNavByPath() { var path = window.location.pathname; path = decodeURIComponent(path.replace(/^\/home\//, "")); var id = "#nav-" + path.substring(0, path.indexOf("/")).toLowerCase(); $(id).addClass("active") } function setActiveTopNavById() { var id = $("#topnav-selector").attr("data"); id = "#" + id, $(id).addClass("active") } function setActiveSideNavByPath() { var path = window.location.pathname; path = decodeURIComponent(path.replace(/\/$/, "")); var id = "#sidenav-" + path.substring(path.lastIndexOf("/") + 1).toLowerCase().replace(/\.html$/, ""); $(id).addClass("active"), $(id).parent("li").parent("ul").prev("a").addClass("active") } function setActiveSideNavById() { var id = $("#sidenav-selector").attr("data"); id = "#" + id, $(id).addClass("active"), $(id).parent("li").parent("ul").prev("a").addClass("active") }