
    $(document).ready(function() {
        $('.city').click(function() {
            var url = $(this).data('url');
            window.location.href = url;
        });
    });
   