    function loadCSS(href) {
      const link = document.getElementById("theme-stylesheet");
      link.href = href + "?v=" + new Date().getTime();
    }