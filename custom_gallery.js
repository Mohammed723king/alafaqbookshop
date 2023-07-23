odoo.define('my_module.custom_gallery', function (require) {
    "use strict";

    const Widget = require('web.Widget');

    const CustomGallery = Widget.extend({
        events: {
            'click .prev-btn': '_onPrevBtnClick',
            'click .next-btn': '_onNextBtnClick',
        },

        init: function (parent, options) {
            this._super.apply(this, arguments);
            this.currentIndex = 0;
        },

        start: function () {
            this.$gallery = this.$('.gallery');
            return this._super.apply(this, arguments);
        },

        _onPrevBtnClick: function () {
            if (this.currentIndex > 0) {
                this.currentIndex--;
                this._updateGalleryPosition();
            }
        },

        _onNextBtnClick: function () {
            if (this.currentIndex < this.$gallery.children().length - 1) {
                this.currentIndex++;
                this._updateGalleryPosition();
            }
        },

        _updateGalleryPosition: function () {
            const slideWidth = this.$gallery.children().first().width();
            const offset = -slideWidth * this.currentIndex;
            this.$gallery.css('transform', `translateX(${offset}px)`);
        },
    });

    return CustomGallery;
});
