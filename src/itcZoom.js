(function ()
{
    'use strict';

    function itcZoom()
    {
        return {
            restrict: 'A',
            link: function (scope, element, attrs)
            {
                function handleZoom(val)
                {
                    if (!angular.isUndefinedOrNull(val) && '' != val) {
                        var url = '/api/product/image/' + val;
                        element.zoom({url: url});
                    } else {
                        element.trigger('zoom.destroy');
                    }
                }

                attrs.$observe('imageUrl', function (val)
                {
                    handleZoom(val);
                });
            }
        };
    }

    angular.module('itc.zoom').directive('itcZoom', itcZoom);
})();
