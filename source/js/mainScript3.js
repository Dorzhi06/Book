    $('#processing').on('click', function(e)
    {
        e.preventDefault();
        var data = $(this).serialize();
        $.ajax
        ({
            url: './pages/Round_3/1processing.html', 
            type: 'GET',
            success: function(responce)
            {        
                $('#ShowPage').html(responce); 
            },
            error: function()
            {
                alert('Error!');            
            }
        });
    });

    $('#combo').on('click', function(e)
    {
        e.preventDefault();
        var data = $(this).serialize();
        $.ajax
        ({
            url: './pages/Round_3/2combo.html', 
            type: 'GET',
            success: function(responce)
            {        
                $('#ShowPage').html(responce); 
            },
            error: function()
            {
                alert('Error!');            
            }
        });
    });

    $('#processing2').on('click', function(e)
    {
        e.preventDefault();
        var data = $(this).serialize();
        $.ajax
        ({
            url: './pages/Round_3/1processing.html', 
            type: 'GET',
            success: function(responce)
            {        
                $('#ShowPage').html(responce); 
            },
            error: function()
            {
                alert('Error!');            
            }
        });
    });

    $('#combo2').on('click', function(e)
    {
        e.preventDefault();
        var data = $(this).serialize();
        $.ajax
        ({
            url: './pages/Round_3/2combo.html', 
            type: 'GET',
            success: function(responce)
            {        
                $('#ShowPage').html(responce); 
            },
            error: function()
            {
                alert('Error!');            
            }
        });
    });