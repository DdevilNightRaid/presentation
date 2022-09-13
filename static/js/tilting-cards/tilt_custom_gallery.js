VanillaTilt.init(document.querySelectorAll(".jlr_item"),{
    scale: 1.1,
    glare: true,
    reverse: true,
    "max-glare": 0.5,
})
$("#jLightroom").lightroom({
    image_container_selector: ".jlr_item",
    img_selector: "img.jlr_img",
    img_class_loaded: "jlr_loaded",
    img_space: 5,
    img_mode: 'min',
    init_callback: function(elem){$(elem).removeClass("gray_out")}
}).init();
