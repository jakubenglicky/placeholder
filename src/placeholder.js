Placeholder = function () {
    this.replace = function () {
        images = document.getElementsByTagName('img');
        for(i = 0; i < images.length; i++) {
            if (images[i].hasAttribute("data-placeholder")) {
                images[i].src = 'https://via.placeholder.com/' + images[i].dataset.placeholder;
            }
        }

        if (i > 1) {
            console.log(i + ' images was represented via Placeholder.com');
        } else {
            console.log(i + ' image was represented via Placeholder.com');
        }
    }
};

plc = new Placeholder();
plc.replace();
